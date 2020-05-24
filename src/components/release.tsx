import React, { FunctionComponent } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Soundcloud from './Soundcloud'
import { ReleaseNode } from '../types/graphql/ReleaseNode'

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
  const releases = data.allMarkdownRemark.edges

  return (
    <>
      {releases
        .sort((a, b) => b.node.frontmatter.cat - a.node.frontmatter.cat)
        .map(release => {
          const { cat, soundcloud } = release.node.frontmatter
          return <Soundcloud key={cat} id={soundcloud} />
        })}
    </>
  )
}

export default Release
