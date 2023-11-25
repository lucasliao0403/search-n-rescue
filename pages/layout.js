
import React from 'react'
import Header from 'components/Header.js'
import Footer from 'components/Footer.js'
import Sidebar from 'components/Sidebar.js'
import styles from '/styles/layout.module.css'



export default function RootLayout({ children }) {
  return (
    <div className={styles.layout}>
        <Sidebar className={styles.sidebar}/>
        <div className={styles.main}>
            {children}       
        </div>
        

    </div>
  )
}
