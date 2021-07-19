import {bkItemType} from "../reducers/types";
import {SET_BOOK_ITEM, SET_FETCHING_ITEM} from "../constants";
import {setBookItemActionType,} from "./types";
import {Dispatch} from "redux";


export const setBookItem = (book: bkItemType): setBookItemActionType => {
    return {
        type: SET_BOOK_ITEM,
        payload: book,
    }
}

export const setFetchingItem = (data: boolean): setBookItemActionType => {
    return {
        type: SET_FETCHING_ITEM,
        payload: data,
    }
}


export const getBook = (request: (url: string) => Promise<bkItemType | undefined>, id: string) => async (dispatch: Dispatch<setBookItemActionType>) => {
    try {
        dispatch(setFetchingItem(true))
        const res = await request(`https://www.googleapis.com/books/v1/volumes${id}?key=AIzaSyBWBR8ylMFqyDRRA4r6fkUaPKUkvVS1Q8o`)

        if (!res) {
            throw new Error('Что-то пошло не так, попробуйте позднее!')
        }
        dispatch(setBookItem(res))
        dispatch(setFetchingItem(false))

    } catch (e) {
        dispatch(setFetchingItem(false))
        console.log(e.message)
    }
}
