import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

interface Props {
  data: any
}

const Artists: FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout>
      <p>Artists</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          title
          artist
          date
          cat
        }
      }
    }
  }
`

export default Artists
