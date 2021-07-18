import {combineReducers} from "redux"
import books from "./reducers/books";
import filters from "./reducers/filters";
import bkItem from "./reducers/bk-item";


const rootReducer = combineReducers({
    books,
    bkItem,
    filters
})

export type reducersType = ReturnType<typeof rootReducer>



export default rootReducer