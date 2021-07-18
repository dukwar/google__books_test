export interface booksType {
    items: bookType[],
    totalItems: number,
}

export interface bookType {
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string
        },
        categories: string[]
    },
}

export interface bkItemType {
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string
        },
        categories: string[]
        description: string
    },
}
