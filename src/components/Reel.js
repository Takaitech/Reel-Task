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
            <h3 className={styles.reelName}>{`${name.substring(0,18)}...`}</h3>
            <div className={styles.reel}>
                <span className={styles.reelPercent} >{percentSaved}%</span>
                <div className={styles.reelImageOverlay}></div>
                <img onClick={() => handleReelPause(name)} className={styles.reelImage} style={{border: `10px solid ${data.vibrant}` }} src={url} alt='Reel item'></img>
                <div className={styles.progress} style={{height: `${percentSaved}%`, backgroundColor: data.vibrant, opacity: paused ? '0.3' : `1` }}></div>
            </div>
            <span className={styles.totalPaid} >{paused ? 'Paused' :`STATUS:$${amountPaid(total,percentSaved)}/$${total}`}</span>
            <img className={styles.statusIcon} src={paused ? 'icons/Pause-Icon.png': 'icons/Play-Icon.png' } alt='Reel status icon'></img>
        </div>
    )
}

export default Reel