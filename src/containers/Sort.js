import React from 'react'
import { connect } from 'react-redux'
import DropInPanel from '../components/DropInPanel'
import { updateSortType } from '../actions/reel.actions'
import { updateSortDirection } from '../actions/reel.actions'
import { updateFilter} from '../actions/reel.actions'

class Sort extends React.Component{
    render(props){
        return(
            <div>
                <DropInPanel sortType={this.props.sortType} direction={this.props.direction} filter={this.props.filter}
                updateSortDirection={this.props.updateSortDirection} updateSortType={this.props.updateSortType}
                updateFilter={this.props.updateFilter} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    sortType: state.sort.type,
    direction: state.sort.direction,
    filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    updateSortDirection: direction => dispatch(updateSortDirection(direction)),
    updateSortType: type => dispatch(updateSortType(type)),
    updateFilter: filter => dispatch(updateFilter(filter))
})

export default connect(mapStateToProps,mapDispatchToProps)(Sort)
