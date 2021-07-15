import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as filtersActionCreators from "../redux/actions/filters"
import * as booksActionCreators from "../redux/actions/books"



export const useFiltersActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(filtersActionCreators, dispatch)
}

export const useBooksActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(booksActionCreators, dispatch)
}