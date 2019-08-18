import React from 'react'
import styles from '../style/style.module.css'

const Search = () => {
    return(
        <div className={styles.searchBar}>
            <input className={styles.searchInput}>
            </input>
            <h1 className={styles.searchTitle}>Search</h1>
        </div>
    )
}

export default Search