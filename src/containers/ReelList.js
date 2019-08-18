import React from 'react'
import Reel from '../components/Reel'
import {connect} from 'react-redux'
import { toggleReelPause } from '../actions/reel.actions'

import styles from '../style/style.module.css'


 class ReelList extends React.Component {
    render(props) {
        console.log(this.props)
        return(
            <ul className={styles.reelList}>
                {this.props.reels.map((reel, index) => (
                    <Reel 
                        key={index} 
                        brand={reel.brand} 
                        name={reel.name} 
                        paused={reel.paused} 
                        percentSaved={reel.percentSaved} 
                        total={reel.total} 
                        url={reel.url}
                        toggleReelPause={this.props.toggleReelPause}  
                    />
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    reels: state
})

const mapDispatchToProps = dispatch => ({
    toggleReelPause: name => dispatch(toggleReelPause(name))
})

export default connect(mapStateToProps,mapDispatchToProps)(ReelList)