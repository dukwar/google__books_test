import React from "react"
import BookBlock from "./BookBlock";
import {bookBlockContainerType} from "./types";
import noImage from '../../assets/book-item/noImage.jpg'

function BookBlockContainer({id, title, authors, imageLinks, categories}:bookBlockContainerType) {

    const newImg = imageLinks ? imageLinks.thumbnail : noImage
    const newAuthors = authors && authors.join(', ')
    const newCategories = categories && categories.slice(0,1).join('')


    return (
        <>
          <BookBlock id={id} title={title} img={newImg} authors={newAuthors} categories={newCategories} />
        </>
    );
}

export default BookBlockContainer