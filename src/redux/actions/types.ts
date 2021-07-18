import {
    SET_BOOK_ITEM,
    SET_BOOKS,
    SET_CATEGORIES,
    SET_CURRENT_INDEX,
    SET_FETCHING, SET_FETCHING_ITEM,
    SET_MORE_BOOKS,
    SET_SORT_BY
} from "../constants";
import {bkItemType, booksType} from "../reducers/types";

// books
interface setBooksType {
    type: typeof SET_BOOKS,
    payload: booksType,
    title: string
}

interface setMoreBooksType {
    type: typeof SET_MORE_BOOKS,
    payload: booksType,
}

export const setMoreBooks = (books:booksType) => {
    return {
        type: SET_MORE_BOOKS,
        payload: books,
    }
}


interface setCurrentIndexType {
    type: typeof SET_CURRENT_INDEX,
    payload: number,
    title: string
}


interface setFetchingType {
    type: typeof SET_FETCHING,
    payload: boolean
}

export type booksActionType =  setBooksType | setMoreBooksType | setCurrentIndexType | setFetchingType

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


// bookItem

export interface setBookItemType {
    type: typeof SET_BOOK_ITEM,
    payload: bkItemType
}

export interface setFetchingItemType {
    type: typeof SET_FETCHING_ITEM,
    payload: boolean
}




export type setBookItemActionType = setBookItemType | setFetchingItemType