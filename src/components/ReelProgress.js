import React from 'react'
import styles from '../style/style.module.css'
const ReelProgress = ({percentSaved, total, color}) => {
    console.log(color)
    return(
            <div className={styles.progress} style={{height: `${percentSaved}%`, backgroundColor: color}}>
            </div>
    )
}

export default ReelProgress