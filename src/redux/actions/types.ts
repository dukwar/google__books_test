import {SET_BOOKS, SET_CATEGORIES, SET_CURRENT_INDEX, SET_CURRENT_TITLE, SET_FETCHING, SET_SORT_BY} from "../constants";
import {booksType} from "../reducers/types";

// books
interface setBooksType {
    type: typeof SET_BOOKS,
    payload: booksType,
    title: string
}


interface setCurrentTitleType {
    type: typeof SET_CURRENT_TITLE,
    payload: string
}


interface setCurrentIndexType {
    type: typeof SET_CURRENT_INDEX,
    payload: number
}


interface setFetchingType {
    type: typeof SET_FETCHING,
    payload: boolean
}

export type booksActionType =  setBooksType | setCurrentTitleType | setCurrentIndexType | setFetchingType

// filters

interface setCategoriesType {
    type: typeof SET_CATEGORIES,
    payload: string
}


interface setSortByType {
    type: typeof SET_SORT_BY,
    payload: string
}

export type filtersActionType = setCategoriesType | setSortByType

