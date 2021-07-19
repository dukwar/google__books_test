import React from "react";
import {NavLink} from "react-router-dom";
import {bookBlockType} from "./types";
import noImage from '../../assets/book-item/noImage.jpg';


const BookBlock = React.memo(({id, title, authors, imageLinks, categories}: bookBlockType) => {

    const newImg = imageLinks ? imageLinks.thumbnail : noImage
    const newAuthors = authors && authors.join(', ')
    const newCategories = categories && categories.slice(0, 1).join('')

    return (
        <>
            <section className="book">
                <div className="book__inner">
                    <NavLink to={"/" + id}>
                        <div className="book__img">
                            <img src={newImg} alt="altImg"/>
                        </div>
                    </NavLink>

                    <div className="book__category">
                        <p>{newCategories}</p>
                    </div>
                    <NavLink to={"/" + id}>
                        <div className="book__title">
                            <h3>{title}</h3>
                        </div>
                    </NavLink>

                    <div className="book__author">
                       <p>{newAuthors}</p>
                    </div>
                </div>
            </section>
        </>
    );
})

export default BookBlock