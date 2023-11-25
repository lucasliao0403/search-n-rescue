import React from 'react'
import styles from '/styles/sidebar.module.css'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <div> <h1>Search N Rescue</h1> </div>
        <div className={styles.body}>
            {/* <div> */}
              <h2> Dashboard </h2>
              <h2> Analytics </h2>
              <h2> Database </h2>
              <h2> Settings </h2>
            {/* </div> */}
        </div>
        
    </div>
  )
}

export default Sidebar