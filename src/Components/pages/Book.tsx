import React, {useEffect} from "react";
import {useRequest} from "../../hooks/request.hook";
import {useLocation} from "react-router-dom"
import {useBookItemActions} from "../../hooks/useActions.hook";
import {useTypesSelector} from "../../hooks/useTypesSelector.hook";


function Book() {

    const {getBook} = useBookItemActions()
    const {request} = useRequest()
    const location = useLocation()
    const id = location.pathname

    const book = useTypesSelector(({bkItem}) => bkItem.book?.volumeInfo)
    const title = book && book.title
    const categories = book && book.categories && book.categories.join(' / ')
    const authors = book && book.authors && book.authors.join(', ')
    const img = book && book.imageLinks && book.imageLinks.smallThumbnail
    const description = book && book.description && book.description

    useEffect(() => {
        getBook(request, id)
    }, [])



    return (
        <>
            <section className="bk">
                <div className="container">
                    <div className="bk__inner">
                        <div className="bk__img">
                            <div className="bk__img--container">
                                <img src={img} alt=""/>
                            </div>
                        </div>

                        <div className="bk__data">
                            <div className="bk__category">
                                <h2>{categories}</h2>
                            </div>
                            <div className="bk__title">
                                <h1>{title}</h1>
                            </div>
                            <div className="bk__authors">
                                <h2>{authors}</h2>
                            </div>

                            <div className="bk__description">
                                <h3>Description</h3>
                                <p>{description}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default Book