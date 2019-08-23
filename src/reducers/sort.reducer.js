
const sort = (state = {type: 'ALPHABETICAL', direction: 'LOW-HIGH'}, action) => {
    switch(action.type) {
        case 'UPDATE_SORT_TYPE':
            return {
                ...state,
                type: action.sort
            }

        case 'UPDATE_SORT_DIRECTION':
            return {
                ...state,
                direction: action.direction
            }
            default: return state
    }
}



export default sort