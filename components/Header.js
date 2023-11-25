import React from 'react'
import styles from '/styles/header.module.css'
import Image from 'next/image'
import { FiAlignJustify } from "react-icons/fi";

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.left}>
          <FiAlignJustify size={"3rem" } color={"rgb(58, 12, 49)"}/>
        </div>
        <div className={styles.right}>
          
        </div>
    </div>
  )
}

export default Header;