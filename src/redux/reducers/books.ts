import {SET_BOOKS, SET_CURRENT_INDEX, SET_CURRENT_TITLE, SET_FETCHING} from "../constants";
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
            const newTitle = state.books.length > 0 && action.title === state.currentTitle

            return {
                ...state,
                books: newTitle ? [...state.books, ...newItems] : [...newItems],
                totalItems: totalItems
            }

        case SET_CURRENT_INDEX:
            return {
                ...state,
                currentIndex: state.currentIndex + action.payload
            }

        case SET_CURRENT_TITLE:
            return {
                ...state,
                currentTitle: action.payload
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