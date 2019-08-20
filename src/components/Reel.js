import React from 'react'
import { usePalette } from 'react-palette'
import styles from '../style/style.module.css'


const Reel = ({brand, name, paused, percentSaved, total, url, toggleReelPause}) => {
   
    const { data } = usePalette(url)
    
    function amountPaid(num, per){
            return (num/100)*per;
    }

    return(
        <div className={styles.reelContainer}>
            <h2 className={styles.reelBrandName}>{brand}</h2>
            <h3 className={styles.reelName}>{`${name.substring(0,19)} ...`}</h3>
            <div className={styles.reel}>
                <span className={styles.reelPercent}>{percentSaved}%</span>
                <span className={styles.totalPaid}>{paused ? 'Paused' :`$${amountPaid(total,percentSaved)} out of $${total}`}</span>
                <img style={{border:`10px solid ${paused ? 'grey' : data.lightVibrant}` }} onClick={() => toggleReelPause(name)} className={styles.reelImage} src={url}></img>
                <div className={styles.progress} style={{height: `${percentSaved}%`, backgroundColor: paused ? 'grey' : data.lightVibrant}}>
            </div>
            </div>
        </div>
    )
}

export default Reel