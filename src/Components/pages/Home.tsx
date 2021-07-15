import React from "react";
import SwiperHome from "../Swiper/SwiperHome";
import BookItem from "../BookItem";

function Home() {

    return (
        <>
            {/*<SwiperHome />*/}
            <div className="container">
                <h2 className="content__title">All books</h2>
                <p className="content__found">Results found: 660</p>
                <section className="content__items">
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                </section>
            </div>



        </>
    );
}

export default Home