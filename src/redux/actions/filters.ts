import {SET_CATEGORIES, SET_SORT_BY} from "../constants";
import {filtersActionType} from "./types";

export const setCategories = (category:string):filtersActionType => {
    return {
        type: SET_CATEGORIES,
        payload: category
    }
}

export const setSortBy = (sortBy:string):filtersActionType => {
    return {
        type: SET_SORT_BY,
        payload: sortBy
    }
}