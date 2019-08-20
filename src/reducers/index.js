import { combineReducers } from 'redux';
import reels from './reel.reducer'
import filter from './filter.reducer';
import sort from './sort.reducer'


export default combineReducers({
    reels,
    filter,
    sort
})