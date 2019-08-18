import React from 'react'
import { usePalette } from 'react-palette'
import ReelProgress from './ReelProgress'
import ToggleReelPause from './ToggleReelPause'
import styles from '../style/style.module.css'
import { get } from 'http';




const Reel = ({brand, name, status, percentSaved, total, url}) => {
   
    const { data, loading, error } = usePalette(url)
    
    function percentage(num, per){
            return (num/100)*per;
    }
          
    return(
        <div className={styles.reelContainer}>
            <h2 className={styles.reelBrandName}>{brand}</h2>
            <h3 className={styles.reelName}>{`${name.substring(0,19)} ...`}</h3>
            <div className={styles.reel}>
                <span className={styles.reelPercent}>{percentSaved}%</span>
                <span className={styles.totalPaid}>{`$${percentage(total,percentSaved)}`}{` out of $${total}`}</span>
                <img style={{border: `10px ${data.lightVibrant} solid`}} className={styles.reelImage} src={url}></img>

                <ReelProgress percentSaved={percentSaved} color={data.lightVibrant} total={total}/>
            </div>
            <ToggleReelPause />
        </div>
    )
}

export default Reel