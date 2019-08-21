import React from 'react'
import { connect } from 'react-redux'
import styles from '../style/style.module.css'
import { updateSearchQuery } from '../actions/reel.actions'

class Search extends React.Component {

render() {
    return(
        <form className={styles.searchBar}>
            <input className={styles.searchInput} type='text' onChange={(e) => this.props.updateSearchQuery(e.target.value)}>
            </input>
            <h1 className={styles.searchTitle}>Search</h1>
        </form>
    )
    }   
}

const mapStateToProps = dispatch => ({
}) 

const mapDispatchToProps = dispatch => ({
    updateSearchQuery: query => dispatch(updateSearchQuery(query))
})

export default connect(mapStateToProps,mapDispatchToProps)(Search)