import React from "react";

function BookItem() {

    return (
        <>
           <section className="book">
               <div className="book__inner">
                   <div className="book__img">
                       <img src="https://nowatermark.ozone.ru/s3/multimedia-x/wc1200/6069902673.jpg" alt=""/>
                   </div>
                   <div className="book__category">
                       <p>Computers</p>
                   </div>
                   <div className="book__title">
                       <h3>Мартин Иден</h3>
                   </div>
                   <div className="book__author">
                       <p>Джек Лондон</p>
                   </div>
               </div>
           </section>


        </>
    );
}

export default BookItem