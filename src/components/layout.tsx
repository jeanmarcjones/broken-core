import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './layout.module.css'
import ListLink from './ListLink'

const Layout: FunctionComponent = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h3>{data.site.siteMetadata.title}</h3>
        <ul className={styles.header__nav}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/artists/">Artists</ListLink>
          <ListLink to="/social/">Social</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default Layout
