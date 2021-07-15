import {SET_BOOKS, SET_CATEGORIES, SET_SORT_BY} from "../constants";


const initialState = {
    category: 'all',
    sortBy: 'newest'
}



type initialStateType = typeof initialState

const filters = (state = initialState, action:any):initialStateType => {

    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                category: action.payload
            }

        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }


        default:
            return state
    }
}

export default filters