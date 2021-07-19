import React from "react";
import {useTypesSelector} from "../../hooks/useTypesSelector.hook";
import Button from "../Button/Button";
import SwiperHome from "../Swiper/SwiperHome";
import {useRequest} from "../../hooks/request.hook";
import {useBooksActions} from "../../hooks/useActions.hook";
import Preloader from "../ComponentHelpers/Preloader";
import BookBlock from "../BookItem/BookBlock";

function Home() {

    const {request} = useRequest()
    const {getBooks} = useBooksActions()

    const filters = useTypesSelector(({filters}) => filters)
    const booksData = useTypesSelector(({books}) => books)

    const {category, sortBy} = filters
    const {books, totalItems, currentTitle, currentIndex, maxLength, isFetching} = booksData


    const handleLoadMore = () => {
        getBooks(request, currentTitle, currentIndex, maxLength, sortBy, category, 'getMoreBooks')
    }

    return (
        <>
            <SwiperHome/>
            <div className="container">
                <h2 className="content__title">All books</h2>
                <p className="content__found">Results found: {totalItems}</p>
                <section className="content__items">
                    {books && books.map(({id, volumeInfo}, index) => {
                        const {title, authors, imageLinks, categories} = volumeInfo
                        return <BookBlock
                            key={`book-${id}-${index}`}
                            id={id}
                            title={title}
                            authors={authors}
                            imageLinks={imageLinks}
                            categories={categories}
                        />
                    })}
                </section>

                <div className="content__button">
                    <Button className="button--add" onClick={handleLoadMore} disabled={isFetching}>
                        {isFetching
                            ? <Preloader className="white"/>
                            : <h2>Load more</h2>
                        }
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Home