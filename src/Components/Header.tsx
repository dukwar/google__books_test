import React, {useEffect} from "react";
import {useFormik} from "formik";
import Button from "./Button";
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
    const {request} = useRequest()



    const formik = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: (values) => {
            setCurrentIndex(0)
            alert(values.search)
            getBooks(request, values.search, currentIndex,30, filter.sortBy, filter.category)
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
                                        {!formik.values.search && <label htmlFor="search">Поиск по библиотеке</label>}
                                        <Button className="button--search">Найти</Button>
                                    </form>
                                </div>

                                <div className="header__icons">
                                    <div className="header__icons--item">
                                        <Call className="header__icon"/>
                                        <p>Позвонить</p>
                                    </div>

                                    <div className="header__icons--item">
                                        <Profile className="header__icon"/>
                                        <p>Профиль</p>
                                    </div>

                                    <div className="header__icons--item">
                                        <Heart className="header__icon"/>
                                        <p>Отложено</p>
                                    </div>

                                    <div className="header__icons--item">
                                        <Cart className="header__icon"/>
                                        <p>Корзина</p>
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