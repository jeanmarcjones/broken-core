import React, {
  FunctionComponent,
  useState,
  useRef,
  useEffect,
} from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { animated, useTransition } from 'react-spring'
import { ReleaseNode } from '../types/graphql/ReleaseNode'
import * as styles from './ReleaseSlider.module.css'

interface Edges {
  node: ReleaseNode
}

interface Data {
  allMarkdownRemark: {
    edges: Edges[]
  }
}

const ReleaseSlider: FunctionComponent = () => {
  const data: Data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                soundcloud
                cat
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const [width, setWidth] = useState<number>(0)
  const parentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (parentRef.current) setWidth(parentRef.current.offsetWidth)
  }, [parentRef])

  const releases = data.allMarkdownRemark.edges.sort(
    (a, b) => b.node.frontmatter.cat - a.node.frontmatter.cat
  )
  const maxPage = releases.length - 1

  const [reverse, setReverse] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const transitions = useTransition(currentPage, item => item, {
    from: {
      position: 'absolute',
      transform: 'translate3d(-150vh,0,0)',
    },
    enter: { transform: 'translate3d(0vh,0,0)' },
    leave: { transform: 'translate3d(+150vh,0,0)' },
    reverse,
  })

  const next = () => {
    setReverse(false)
    const page = currentPage === maxPage ? 0 : currentPage + 1
    setCurrentPage(page)
  }

  const prev = () => {
    setReverse(true)
    const page = currentPage === 0 ? maxPage : currentPage - 1
    setCurrentPage(page)
  }

  return (
    <div className={styles.releaseSlider} ref={parentRef}>
      {transitions.map(({ item, key, props }) => {
        return (
          <animated.iframe
            key={key}
            style={props}
            width={width}
            height="300"
            scrolling="no"
            frameBorder="no"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${releases[item].node.frontmatter.soundcloud}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
          />
        )
      })}
      <div className={styles.releaseSlider__buttonWrapper}>
        <button className={styles.releaseSlider__button} onClick={prev}>
          prev
        </button>
        <Link className={styles.releaseSlider__button} to="/">
          details
        </Link>
        <button className={styles.releaseSlider__button} onClick={next}>
          next
        </button>
      </div>
    </div>
  )
}

export default ReleaseSlider
