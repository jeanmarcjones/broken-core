import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby'
import styles from './ListLink.module.css'

interface props {
  to: string;
}

const ListLink: FunctionComponent<props> = ({ to, children }) => {
  return (
    <li className={styles.link}>
      <Link to={to} className={styles.link__text}>{children}</Link>
    </li>
  )
}

export default ListLink;
