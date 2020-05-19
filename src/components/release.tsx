import React, { FunctionComponent } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Soundcloud from './Soundcloud'

interface Node {
  node: {
    html: string
    frontmatter: {
      cat: number
      soundcloud: string
    }
  }
}

interface Data {
  allMarkdownRemark: {
    edges: Node[]
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
    <div>
      {releases
        .sort((a, b) => b.node.frontmatter.cat - a.node.frontmatter.cat)
        .map(release => {
          const { cat, soundcloud } = release.node.frontmatter
          return <Soundcloud key={cat} id={soundcloud} />
        })}
    </div>
  )
}

export default Release
