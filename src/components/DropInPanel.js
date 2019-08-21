import React, { useState } from 'react'
import styles from '../style/style.module.css'


const DropInPanel = ({ sortType, direction, updateSortType, updateSortDirection, updateFilter }) => {

    const [ open, openDropDown] = useState(false)
    

    return(
        <div className={styles.dropInPanelContainer} style={{bottom: open ? '0px' : '-220px'}}>
            <input className={styles.toggleDropIn} type='button' onClick={() => openDropDown(!open)}></input>
            <div className={styles.dropInPanel} style={{display: open ? 'block' : 'block'}}>
                <h3 style={{fontWeight: 'normal', textIndent: '11px', margin: '0'}}>SORT</h3>
                <div className={styles.sortRow1}>
                        <input className={styles.sortButton} type='button' defaultValue='A-Z' id='ALPHABETICAL' onClick={(e) => updateSortType(e.target.id)}></input>
                </div>
                <div className={styles.sortRow2}>
                    <input className={styles.sortIcon} type='image' id='HIGH-LOW'  src='/icons/High-Low-Icon.png' onClick={(e => updateSortDirection(e.target.id))}></input>
                    <ul>
                        <input className={styles.sortButton}  type='button' defaultValue='$ PRICE' id='TOTAL' onClick={(e) => updateSortType(e.target.id)}></input>
                            <input className={styles.sortButton} type='button' defaultValue='% SAVED' id='PERCENT_SAVED' onClick={(e) => updateSortType(e.target.id)}></input>
                    </ul>
                    <input className={styles.sortIcon} type='image' id='LOW-HIGH' src='/icons/Low-High-Icon.png' onClick={(e => updateSortDirection(e.target.id))}></input>
                </div>
                <ul className={styles.filterRow}>
                    <input className={styles.filterButton} type='button' defaultValue='ACTIVE' onClick={(e) => updateFilter(e.target.value)}></input>
                    <input className={styles.filterButton} type='button' defaultValue='ALL' onClick={(e) => updateFilter(e.target.value)}></input>
                    <input className={styles.filterButton} type='button' defaultValue='PAUSED' onClick={(e) => updateFilter(e.target.value)}></input>
                </ul>
            </div>
        </div>
    )
}

export default DropInPanel