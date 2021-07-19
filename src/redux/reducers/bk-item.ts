import {SET_BOOK_ITEM, SET_FETCHING_ITEM} from "../constants";
import {setBookItemActionType} from "../actions/types";
import {bkItemType} from "./types";


const initialState = {
    book: null as bkItemType | null,
    isFetching: false

}


type initialStateType = typeof initialState

const bkItem = (state = initialState, action: setBookItemActionType): initialStateType => {

    switch (action.type) {
        case SET_BOOK_ITEM:
            return {
                ...state,
                book: action.payload
            }

        case SET_FETCHING_ITEM:
            return {
                ...state,
                isFetching: action.payload
            }

        default:
            return state
    }
}

export default bkItem