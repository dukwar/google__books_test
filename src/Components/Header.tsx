import React from "react";
import {useFormik} from "formik";
import Button from "./Button/Button";
import {Call, Cart, Heart, Profile} from "./Sprites";
import Navbar from "./Navbar/Navbar";
import {useBooksActions} from "../hooks/useActions.hook";
import {useTypesSelector} from "../hooks/useTypesSelector.hook";
import {useRequest} from "../hooks/request.hook";
import SortNav from "./SortNav/SortNav";

function Header() {
    console.log('RENDER HEADER')

    const {getBooks, setCurrentIndex} = useBooksActions()
    const filter = useTypesSelector(({filters}) => filters)
    const currentIndex = useTypesSelector(({books}) => books.currentIndex)
    const currentTitle = useTypesSelector(({books}) => books.currentTitle)
    const {request} = useRequest()



    const formik = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: ({search}) => {
            setCurrentIndex(0)
            alert(search)
            if (currentTitle !== search)
            getBooks(request, search, currentIndex,30, filter.sortBy, filter.category)
        }
    })


    return (
        <>
            <section className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">
                            <span><h1>Google Books</h1></span>
                        </div>
                        <section className="header__data">
                            <div className="header__service">
                                <div className="header__search">
                                    <form onSubmit={formik.handleSubmit}>
                                        <input
                                            id="search"
                                            name="search"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.search}
                                        />
                                        {!formik.values.search && <label htmlFor="search">Library search</label>}
                                        <Button className="button--search">Search</Button>
                                    </form>
                                </div>

                                <div className="header__icons">
                                    <div className="header__icons--item">
                                        <Call className="header__icon"/>
                                        <p>Call</p>
                                    </div>

                                    <div className="header__icons--item">
                                        <Profile className="header__icon"/>
                                        <p>Profile</p>
                                    </div>

                                    <div className="header__icons--item">
                                        <Heart className="header__icon"/>
                                        <p>Postponed</p>
                                    </div>

                                    <div className="header__icons--item">
                                        <Cart className="header__icon"/>
                                        <p>Cart</p>
                                    </div>

                                </div>
                            </div>

                            <Navbar />
                            <SortNav />

                        </section>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Header