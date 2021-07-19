import React from "react";
import {Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import Book from "./Components/pages/Book";
import ScrollToTop from "./Components/ComponentHelpers/ScrollToTop";

function App() {

    return (
        <div className="wrapper">
            <ScrollToTop/>
            <Header/>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route exact path="/:id" component={Book}/>
            </div>
        </div>
    );
}

export default App;
