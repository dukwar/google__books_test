import {combineReducers} from "redux"
import books from "./reducers/books";
import filters from "./reducers/filters";


const rootReducer = combineReducers({
    books,
    filters
})

export type reducersType = ReturnType<typeof rootReducer>



export default rootReducer