import { combineReducers } from 'redux';
import reels from './reel.reducer'
import filter from './filter.reducer';
import sort from './sort.reducer'
import search from './search.reducer'

export default combineReducers({
    reels,
    filter,
    sort,
    search
})