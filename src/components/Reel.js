import React from 'react'
import { usePalette } from 'react-palette'
import ReelProgress from './ReelProgress'
import styles from '../style/style.module.css'
import { get } from 'http';




const Reel = ({brand, name, paused, percentSaved, total, url, toggleReelPause}) => {
   
    const { data, loading, error } = usePalette(url)
    
    function amountPaid(num, per){
            return (num/100)*per;
    }
            console.log(paused)
    return(
        <div className={styles.reelContainer}>
            <h2 className={styles.reelBrandName}>{brand}</h2>
            <h3 className={styles.reelName}>{`${name.substring(0,19)} ...`}</h3>
            <div className={styles.reel}>
                <span className={styles.reelPercent}>{percentSaved}%</span>
                <span className={styles.totalPaid}>{paused ? 'Paused' :`$${amountPaid(total,percentSaved)} out of $${total}`}</span>
                <img onClick={() => toggleReelPause(name)} className={styles.reelImage} src={url}></img>
                <ReelProgress percentSaved={percentSaved} color={paused ? 'grey' : data.lightVibrant } total={total}/>
            </div>
        </div>
    )
}

export default Reel