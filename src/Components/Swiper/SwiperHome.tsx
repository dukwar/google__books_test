import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper';
import 'swiper/swiper-bundle.css';
import {SwiperHomeData} from "./SwiperHome.dt";

SwiperCore.use([Navigation, Pagination, Scrollbar]);


function SwiperHome() {

    return (
        <>
            <section className="swiper-home--title">
                <div className="container">
                    <h1>Новинки</h1>
                </div>
            </section>

            <div className="swiper-home--container">
                <Swiper

                    breakpoints={{

                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30

                        },

                        425: {
                            slidesPerView: 3,

                        },

                        280: {
                            slidesPerView: 3,
                            spaceBetween: 20

                        }
                    }}

                    className="swiper-home"
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation
                    pagination={{
                        clickable: true
                    }}
                >


                    {SwiperHomeData.map(({id, img}) => {
                        return (
                            <SwiperSlide key={`swiperHome-${id}`} className="swiper-home--slide">
                                <img className="swiper-home--img" src={img} alt=""/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>


    )
}




export default SwiperHome