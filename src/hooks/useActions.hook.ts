import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as filtersActionCreators from "../redux/actions/filters"
import * as booksActionCreators from "../redux/actions/books"
import * as bookItemActionCreators from "../redux/actions/bk-item"




export const useFiltersActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(filtersActionCreators, dispatch)
}

export const useBooksActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(booksActionCreators, dispatch)
}

export const useBookItemActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(bookItemActionCreators, dispatch)
}