import React from 'react'
import styles from '/styles/sidebar.module.css'
import Link from 'next/link'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <div> <h1>Search N Rescue</h1> </div>
        <div className={styles.body}>
            {/* <div> */}
              <Link href="/map">Map</Link>
              <Link href="/">Home</Link>
            {/* </div> */}
        </div>
        
    </div>
  )
}

export default Sidebar