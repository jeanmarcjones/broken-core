import React, { FunctionComponent } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

interface Node {
  node: {
    html: string
    frontmatter: {
      title: string
      artist: string
      date: string
      cat: string
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
                artist
                cat
                date
                title
              }
              html
            }
          }
        }
      }
    `
  )
  const releases = data.allMarkdownRemark.edges

  return (
    <div>
      {releases.map((release: Node) => {
        return (
          <div
            key={release.node.frontmatter.cat}
            dangerouslySetInnerHTML={{ __html: release.node.html }}
          />
        )
      })}
    </div>
  )
}

export default Release
