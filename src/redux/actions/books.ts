import {SET_BOOKS, SET_CURRENT_INDEX, SET_FETCHING} from "../constants";


export const setBooks = (books:any):any => {
    return {
        type: SET_BOOKS,
        payload: books
    }
}

export const setCurrentIndex = (index:number) => {
    return {
        type: SET_CURRENT_INDEX,
        payload: index
    }
}

export const setFetching = (data:boolean) => {
    return {
        type: SET_FETCHING,
        payload: data

    }
}


export const getBooks = (request: (url:string) => Promise<any>, title:string, startIndex:number, maxLength:number, orderBy:string, category:string) => async (dispatch:any) => {

    dispatch(setFetching(true))
    const res = await request(`https://www.googleapis.com/books/v1/volumes?q=${title}+subject:${category !== 'all' ? category : ''}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxLength}&key=AIzaSyBWBR8ylMFqyDRRA4r6fkUaPKUkvVS1Q8o`)
    console.log(res)
    dispatch(setBooks(res))
    dispatch(setFetching(false))
    // dispatch(setCurrentIndex(30))

}