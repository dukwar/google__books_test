import React from "react";
import {bookItemType} from "./types";

function BookItem({title, authors, img, categories}: bookItemType) {

    return (
        <>
           <section className="book">
               <div className="book__inner">
                   <div className="book__img">
                       <img src={img} alt=""/>
                   </div>
                   <div className="book__category">
                       <p>{categories}</p>
                   </div>
                   <div className="book__title">
                       <h3>{title}</h3>
                   </div>
                   <div className="book__author">
                       <p>{authors}</p>
                   </div>
               </div>
           </section>
        </>
    );
}

export default BookItem