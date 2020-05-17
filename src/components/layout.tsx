import React, { FunctionComponent } from 'react'
import * as styles from './layout.module.css'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h3>Broken Core</h3>
      </header>
      {children}
    </div>
  )
}

export default Layout
