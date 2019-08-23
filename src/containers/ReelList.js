import React from 'react'
import Reel from '../components/Reel'
import {connect} from 'react-redux'
import { toggleReelPause } from '../actions/reel.actions'
import styles from '../style/style.module.css'

class ReelList extends React.Component {

    render(props) {
        const sortedReels = (reels,sortType) => {
            switch(sortType) {
                case 'ALPHABETICAL':
                    return reels.sort((a, b) => (a.brand > b.brand) ? 1 : -1)
                case 'TOTAL':
                    return reels.sort((a, b) => (a.total > b.total ) ? 1 : -1)
                case 'PERCENT_SAVED':
                    return reels.sort((a, b) => (a.percentSaved > b.percentSaved ) ? 1 : -1)
                    
                default: return reels
            }
        }

        return(
            <ul className={styles.reelList}>
                {this.props.direction === 'LOW-HIGH' || this.props.sortType === 'ALPHABETICAL'  ? sortedReels(this.props.reels, this.props.sortType).map((reel, index) => (
                    <Reel key={index} brand={reel.brand} name={reel.name} paused={reel.paused} 
                        percentSaved={reel.percentSaved} total={reel.total} url={reel.url}
                        toggleReelPause={this.props.toggleReelPause} 
                    />
                )) : 
                sortedReels(this.props.reels, this.props.sortType).reverse().map((reel, index) => (
                    <Reel key={index} brand={reel.brand} name={reel.name} paused={reel.paused} 
                        percentSaved={reel.percentSaved} total={reel.total} url={reel.url}
                        toggleReelPause={this.props.toggleReelPause} 
                    />
                ))}
            </ul>
        )
    }
}

function getQueriedReels(reels,query,filter) {
    return filterReels(reels.filter(reel => reel.name.toLowerCase().includes(query.toLowerCase()) || reel.brand.toLowerCase().includes(query.toLowerCase())),filter)
}


const filterReels = (reels, filter) => {
    switch(filter) {
        case "ACTIVE":
            return reels.filter(reel => reel.paused === false );
        case "PAUSED":
            return reels.filter(reel => reel.paused === true);
    default: return reels
    }
}

const mapStateToProps = state => ({
    reels: getQueriedReels(state.reels,state.search,state.filter),
    sortType: state.sort.type,
    direction: state.sort.direction
})

const mapDispatchToProps = dispatch => ({
    toggleReelPause: name => dispatch(toggleReelPause(name))
})

export default connect(mapStateToProps,mapDispatchToProps)(ReelList)