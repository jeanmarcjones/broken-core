import React, { FunctionComponent, useMemo, useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { CSSTransition } from 'react-transition-group'
import Soundcloud from './Soundcloud'
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
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [state, setState] = useState<boolean>(true)

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

  const releases = data.allMarkdownRemark.edges.sort(
    (a, b) => b.node.frontmatter.cat - a.node.frontmatter.cat
  )
  const maxPage = releases.length - 1

  const toggleState = () => setState(state => !state)

  const next = () => {
    setState(false)
    const page = currentPage === maxPage ? 0 : currentPage + 1
    setCurrentPage(page)
    // toggleState()
    setState(true)
  }

  const prev = () => {
    setState(false)
    const page = currentPage === 0 ? maxPage : currentPage - 1
    setCurrentPage(page)
    // toggleState()
    setState(true)
  }

  return (
    <div style={{ flex: 1 }}>
      <CSSTransition
        in={state}
        timeout={900}
        classNames="fade"
        unmountOnExit
        // onEnter={() => setState(false)}
        // onExited={() => setState(false)}
      >
        <Soundcloud
          id={releases[currentPage].node.frontmatter.soundcloud}
          key={currentPage}
        />
      </CSSTransition>
      <div className={styles.releaseSlider__buttonWrapper}>
        <button className={styles.releaseSlider__button} onClick={prev}>
          prev
        </button>
        <Link
          className={styles.releaseSlider__button}
          to={releases[currentPage].node.fields.slug}
        >
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
