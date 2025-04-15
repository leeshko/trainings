import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.mainHeader}>
        <div>daily dashboard</div>
        <div className={styles.headerCards}>
          <div >daily dashboard</div>
          <div>trend analitics</div>
          <div>Card Analysis 1</div>
          <div>Card Analysis 2</div>
          <div>Card Analysis 3</div>
          <div>Card Analysis 4</div>
          <div>Card Analysis 5</div>
        </div>
    </div>
  )
}

export default Header