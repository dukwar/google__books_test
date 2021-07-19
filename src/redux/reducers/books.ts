import {SET_BOOKS, SET_CURRENT_INDEX, SET_FETCHING, SET_MORE_BOOKS} from "../constants";
import {bookType} from "./types";
import {booksActionType} from "../actions/types";


const initialState = {
    books: [] as bookType[],
    totalItems: 0,
    currentTitle: '',
    currentIndex: 0,
    maxLength: 30,
    isFetching: false
}


type initialStateType = typeof initialState

const books = (state = initialState, action: booksActionType): initialStateType => {

    switch (action.type) {
        case SET_BOOKS:

            const totalItems = action.payload.totalItems
            const newItems = action.payload.items

            return {
                ...state,
                books: newItems,
                totalItems: totalItems,
                currentTitle: action.title
            }

        case SET_MORE_BOOKS:

            const totalMoreItems = action.payload.totalItems
            const newMoreItems = action.payload.items

            return {
                ...state,
                books: [...state.books, ...newMoreItems],
                totalItems: totalMoreItems,
            }

        case SET_CURRENT_INDEX:

            return {
                ...state,
                currentIndex: action.payload === 0 ? state.currentIndex = action.payload : state.currentIndex += action.payload
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