export interface bookBlockContainerType {
    id: string,
    title: string,
    imageLinks: {
        smallThumbnail: string,
        thumbnail: string
    },
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