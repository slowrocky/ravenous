import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <h1 className={styles.title}>ravenous</h1>
      </header>
    </React.Fragment>
  )
}

export default Header