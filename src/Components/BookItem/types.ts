import {imageType} from "../../redux/reducers/types";

export interface bookBlockType {
    id: string,
    title: string,
    imageLinks: imageType,
    authors: string[],
    categories: string[]
}