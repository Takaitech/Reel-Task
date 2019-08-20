import React, { useState } from 'react'
import { connect } from 'react-redux'
import DropInPanel from '../components/DropInPanel'
import { updateSortType } from '../actions/reel.actions'
import { updateSortDirection } from '../actions/reel.actions'
import { updateFilter} from '../actions/reel.actions'

import styles from '../style/style.module.css'

class Sort extends React.Component{
    render(props){
        return(
            <div>
                <DropInPanel sortType={this.props.sortType} direction={this.props.direction} 
                updateSortDirection={this.props.updateSortDirection} updateSortType={this.props.updateSortType}
                updateFilter={this.props.updateFilter} />
            </div>
        )
    }
}




const mapStateToProps = state => ({
    sortType: state.sort.type,
    direction: state.sort.direction
})

const mapDispatchToProps = dispatch => ({
    updateSortDirection: direction => dispatch(updateSortDirection(direction)),
    updateSortType: type => dispatch(updateSortType(type)),
    updateFilter: filter => dispatch(updateFilter(filter))
})

export default connect(mapStateToProps,mapDispatchToProps)(Sort)
