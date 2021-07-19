import {imageType} from "../../redux/reducers/types";

export interface bookBlockContainerType {
    id: string,
    title: string,
    imageLinks: imageType,
    authors: string[],
    categories: string[]
}

export interface bookBlockType {
    id: string,
    title: string,
    img: string,
    authors: string,
    categories: string
}