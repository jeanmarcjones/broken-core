import React, { FunctionComponent } from 'react'
import * as styles from './layout.module.css'

const Layout: FunctionComponent = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Layout
