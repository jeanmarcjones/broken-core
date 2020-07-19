import React, { FunctionComponent, Suspense } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ReleaseNode } from '../types/graphql/ReleaseNode'
const Soundcloud = React.lazy(() => import('./Soundcloud'))

interface Edges {
  node: ReleaseNode
}

interface Data {
  allMarkdownRemark: {
    edges: Edges[]
  }
}

const Release: FunctionComponent = () => {
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

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {releases.map(release => {
          const { cat, soundcloud } = release.node.frontmatter
          return <Soundcloud key={cat} id={soundcloud} />
        })}
      </Suspense>
    </>
  )
}

export default Release
