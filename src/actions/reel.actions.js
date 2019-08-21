export const toggleReelPause = name => ({
    type: 'TOGGLE_REEL_PAUSE',
    name
})

export const updateSortType = sort => ({
    type: 'UPDATE_SORT_TYPE',
    sort
})

export const updateSortDirection = direction => ({
    type: 'UPDATE_SORT_DIRECTION',
    direction
})

export const updateFilter = filter => ({
    type: 'UPDATE_FILTER',
    filter
})

export const updateSearchQuery = query => ({
    type: 'UPDATE_SEARCH_QUERY',
    query
})