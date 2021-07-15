import {SET_BOOKS, SET_CURRENT_INDEX, SET_FETCHING} from "../constants";


const initialState = {
    books: [] as any,
    totalItems: 0,
    currentIndex: 0,
    isFetching: false
}



type initialStateType = typeof initialState

const books = (state = initialState, action:any):initialStateType => {

    switch (action.type) {
        case SET_BOOKS:

            const totalItems = action.payload.totalItems
            const newItems = action.payload.items
            return {
                ...state,
                books: [...state.books, ...newItems],
                totalItems: totalItems
            }

        case SET_CURRENT_INDEX:
            return {
                ...state,
                currentIndex: state.currentIndex + action.payload
            }

        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }


        default:
            return state
    }
}

export default books