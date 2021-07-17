export interface bookItemContainerType {
    title: string,
    imageLinks: {
        smallThumbnail: string,
        thumbnail: string
    },
    authors: string[],
    categories: string[]
}

export interface bookItemType {
    title: string,
    img: string,
    authors: string,
    categories: string
}