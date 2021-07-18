import React from "react";
import {NavLink} from "react-router-dom";
import {bookBlockType} from "./types";

function BookBlock({id, title, authors, img, categories}: bookBlockType) {

    return (
        <>
           <section className="book">
               <div className="book__inner">
                   <NavLink to={"/" + id}>
                       <div className="book__img">
                           <img src={img} alt=""/>
                       </div>
                   </NavLink>

                   <div className="book__category">
                       <p>{categories}</p>
                   </div>
                   <NavLink to={"/" + id}>
                       <div className="book__title">
                           <h3>{title}</h3>
                       </div>
                   </NavLink>

                   <div className="book__author">
                       <p>{authors}</p>
                   </div>
               </div>
           </section>
        </>
    );
}

export default BookBlock