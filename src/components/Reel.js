import React from 'react'
import { usePalette } from 'react-palette'
import styles from '../style/style.module.css'


const Reel = ({brand, name, paused, percentSaved, total, url, toggleReelPause}) => {
   
    const { data } = usePalette(url)
    
    function amountPaid(num, per){
            return (num/100)*per;
    }
    function handleReelPause(name) {
        if(percentSaved !== 100) {
            toggleReelPause(name)
        }
    }

    return(
        <div className={styles.reelContainer}>
            <h2 className={styles.reelBrandName}>{brand}</h2>
            <h3 className={styles.reelName}>{`${name.substring(0,20)}...`}</h3>
            <div className={styles.reel}>
                <span className={styles.reelPercent} >{percentSaved}%</span>
                <img onClick={() => handleReelPause(name)} className={styles.reelImage} style={{border: `10px solid ${data.vibrant}` }} src={url}></img>
                <div className={styles.progress} style={{height: `${percentSaved}%`, backgroundColor: data.vibrant, opacity: paused ? '0.3' : `1` }}>
            </div>
            </div>
            <span className={styles.totalPaid} >{paused ? 'Paused' :`STATUS:$${amountPaid(total,percentSaved)}/$${total}`}</span>
        </div>
    )
}

export default Reel