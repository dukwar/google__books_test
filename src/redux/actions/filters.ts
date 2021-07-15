import {SET_CATEGORIES, SET_SORT_BY} from "../constants";

export const setCategories = (category:any) => {
    return {
        type: SET_CATEGORIES,
        payload: category
    }
}

export const setSortBy = (sortBy:any) => {
    return {
        type: SET_SORT_BY,
        payload: sortBy
    }
}