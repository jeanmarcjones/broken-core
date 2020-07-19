import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import * as styles from './ListLink.module.css'

interface Props {
  to: string
}

const ListLink: FunctionComponent<Props> = ({ to, children }) => {
  return (
    <li className={styles.link}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

export default ListLink
