import React, { FunctionComponent } from 'react'
import * as styles from './layout.module.css'
import ListLink from './ListLink'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h3>Broken Core</h3>
        <ul className={styles.header__nav}>
          <ListLink to='/'>Home</ListLink>
          <ListLink to='/artists/'>Artists</ListLink>
          <ListLink to='/social/'>Social</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default Layout
