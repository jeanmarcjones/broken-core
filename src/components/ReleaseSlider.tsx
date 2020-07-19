import React, { FunctionComponent, Suspense, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ReleaseFrontmatter, ReleaseNode } from '../types/graphql/ReleaseNode'
const Soundcloud = React.lazy(() => import('./Soundcloud'))

interface Edges {
  node: ReleaseNode
}

interface Data {
  allMarkdownRemark: {
    edges: Edges[]
  }
}

const ReleaseSlider: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const data: Data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                cat
                soundcloud
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

  const currentReleases = (): ReleaseFrontmatter =>
    releases[currentPage].node.frontmatter

  const next = () => {
    const page = currentPage === maxPage ? 0 : currentPage + 1
    setCurrentPage(page)
  }

  const prev = () => {
    const page = currentPage === 0 ? maxPage : currentPage - 1
    setCurrentPage(page)
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Soundcloud
          key={currentReleases().cat}
          id={currentReleases().soundcloud}
        />
      </Suspense>
      <div>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </>
  )
}

export default ReleaseSlider
