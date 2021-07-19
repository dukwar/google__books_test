export interface booksType {
    items: bookType[],
    totalItems: number,
}

export interface bookType {
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        imageLinks: imageType,
        categories: string[]
    },
}

export interface bkItemType {
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        imageLinks: imageType,
        categories: string[],
        description: string,
    },
}

export interface imageType {
    smallThumbnail: string,
    thumbnail: string
}
