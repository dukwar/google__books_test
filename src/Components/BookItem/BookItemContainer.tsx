import React from "react"
import BookItem from "./BookItem";
import {bookItemContainerType} from "./types";
import noImage from '../../assets/book-item/noImage.jpg'

function BookItemContainer({title, authors, imageLinks, categories}:bookItemContainerType) {

    const dotSlice = (data:string | string[], sliceN:number) => {
        if (data && data.length > sliceN) {
           let dataChanged = data.slice(0, sliceN)
           return [dataChanged, '...'].join('')
        } else {
            if (typeof data === 'object') {
                return data.join(', ')
            } else {
                return data
            }
        }
    }

    const newTitle = dotSlice(title,  75)
    const newImg = imageLinks ? imageLinks.thumbnail : noImage
    const newAuthors = authors && authors.join(', ')
    const newCategories = dotSlice(categories, 1)


    return (
        <>
          <BookItem title={newTitle} img={newImg} authors={newAuthors} categories={newCategories} />
        </>
    );
}

export default BookItemContainer