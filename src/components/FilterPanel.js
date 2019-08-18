import React from 'react'
import styles from '../style/style.module.css'
const FilterPanel = () => {
    return(
        <div className={styles.filterPanelContainer}>
            <input type='button' className={styles.toggleFilterPanel}></input>
            <div className={styles.filterPanel}>
                <ul>Filters
                    <a>Active</a>
                    <a>Inactive</a>
                    <a>Uncompleted</a>
                    <a>Completed</a>
                </ul>
                <ul> Sort by 
                    <a>A-Z</a>
                    <a>Percent Saved Low -> High</a>
                    <a>Percent Saved High-> Low</a>
                    <a>Total Low -> High</a>
                    <a>Total High-> Low</a>
                </ul>
            </div>
        </div>
    )
}

export default FilterPanel