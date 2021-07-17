import {SET_BOOKS, SET_CURRENT_INDEX, SET_CURRENT_TITLE, SET_FETCHING} from "../constants";
import {booksActionType} from "./types";
import {Dispatch} from "redux";
import {booksType} from "../reducers/types";


export const setBooks = (books:booksType, title:string):booksActionType => {
    return {
        type: SET_BOOKS,
        payload: books,
        title
    }
}

export const setCurrentTitle = (title:string):booksActionType => {
    return {
        type: SET_CURRENT_TITLE,
        payload: title
    }
}

export const setCurrentIndex = (index:number):booksActionType => {
    return {
        type: SET_CURRENT_INDEX,
        payload: index
    }
}

export const setFetching = (data:boolean):booksActionType => {
    return {
        type: SET_FETCHING,
        payload: data

    }
}


export const getBooks = (request: (url:string) => Promise<booksType>, title:string, startIndex:number, maxLength:number, orderBy:string, category:string) => async (dispatch:Dispatch<booksActionType>) => {

    try {
        dispatch(setFetching(true))
        const res = await request(`https://www.googleapis.com/books/v1/volumes?q=${title}+subject:${category !== 'all' ? category : ''}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxLength}&key=AIzaSyBWBR8ylMFqyDRRA4r6fkUaPKUkvVS1Q8o`)
        if (!res) {
           throw new Error('Что-то пошло не так, попробуйте позднее!')
        }
        dispatch(setBooks(res, title))
        dispatch(setCurrentTitle(title))
        dispatch(setCurrentIndex(maxLength))
        dispatch(setFetching(false))


    } catch (e) {
        dispatch(setFetching(false))
        console.log(e.message)
    }
}