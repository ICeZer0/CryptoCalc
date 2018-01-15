import {VisibilityFilters, FETCH_PRICE} from './actions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL
}

function fetchPrice(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRICE:
        return Object.assign({}, state, {
            visibilityFilter: action.fetchPrice
        })
        default:
        return state
    }
}