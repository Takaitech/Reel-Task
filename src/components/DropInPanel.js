import React, { useState } from 'react'
import styles from '../style/style.module.css'
import sort from '../reducers/sort.reducer';


const DropInPanel = ({ sortType, direction, filter, updateSortType, updateSortDirection, updateFilter }) => {

    const [ open, openDropDown] = useState(false)
    

    return(
        <div className={styles.dropInPanelContainer} style={{bottom: open ? '0px' : '-260px'}}>
            <input className={styles.toggleDropIn} type='button' onClick={() => openDropDown(!open)}></input>
            <div className={styles.dropInPanel} style={{display: open ? 'block' : 'block'}}>
                <h3 className={styles.sortTitle}>SORT</h3>
                <div className={styles.sortRow1}>
                        <input className={styles.sortButton} style={{color: sortType != 'ALPHABETICAL' ? 'darkgrey' : 'black'}} type='button' defaultValue='A-Z' id='ALPHABETICAL' onClick={(e) => updateSortType(e.target.id)}></input>
                </div>
                <div className={styles.sortRow2}>
                    <input className={styles.sortIcon} style={{opacity: direction != 'HIGH-LOW' || sortType == 'ALPHABETICAL' ? '0.3' : '1'}} type='image' id='HIGH-LOW'  src='icons/High-Low-Icon.png' onClick={(e => updateSortDirection(e.target.id))}></input>
                    <ul>
                        <input className={styles.sortButton} style={{color: sortType != 'TOTAL' ? 'darkgrey' : 'black'}}  type='button' defaultValue='$ PRICE' id='TOTAL' onClick={(e) => updateSortType(e.target.id)}></input>
                            <input className={styles.sortButton} style={{color: sortType != 'PERCENT_SAVED' ? 'darkgrey' : 'black'}} type='button' defaultValue='% SAVED' id='PERCENT_SAVED' onClick={(e) => updateSortType(e.target.id)}></input>
                    </ul>
                    <input className={styles.sortIcon} style={{opacity: direction != 'LOW-HIGH' || sortType == 'ALPHABETICAL' ? '0.4' : '1'}}  type='image' id='LOW-HIGH' src='icons/Low-High-Icon.png' onClick={(e => updateSortDirection(e.target.id))}></input>
                </div>
                <h3 className={styles.filterTitle}>Filter</h3>
                <ul className={styles.filterRow}>
                    <input className={styles.filterButton}  type='button' style={{opacity: filter != 'ACTIVE' ? '0.4' : '1'}}  defaultValue='ACTIVE' onClick={(e) => updateFilter(e.target.value)}></input>
                    <input className={styles.filterButton} type='button' style={{opacity: filter != 'ALL' ? '0.4' : '1'}} defaultValue='ALL' onClick={(e) => updateFilter(e.target.value)}></input>
                    <input className={styles.filterButton} type='button' style={{opacity: filter != 'PAUSED' ? '0.4' : '1'}}  defaultValue='PAUSED' onClick={(e) => updateFilter(e.target.value)}></input>
                </ul>
            </div>
        </div>
    )
}

export default DropInPanel