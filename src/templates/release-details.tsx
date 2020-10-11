import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import * as styles from './release-details.module.css'
import Layout from '../components/Layout'
import { ReleaseNode } from '../types/graphql/ReleaseNode'

interface Props {
  data: {
    markdownRemark: ReleaseNode
  }
}

const ReleaseDetails: FunctionComponent<Props> = ({ data }) => {
  const {
    html,
    frontmatter: { artist, title },
  } = data.markdownRemark
  return (
    <Layout>
      <>
        <h2 className={styles.title}>{`${artist} - ${title}`}</h2>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        artist
        title
        soundcloud
        date
      }
    }
  }
`

export default ReleaseDetails
