import React from 'react'
import './App.css'
import {Route} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import Book from "./Components/pages/Book";

function App() {

  return (
      <div className="wrapper">
        <Header />
          <div className="content">
              <Route exact path="/" component={Home} />
              <Route exact path="/:id" component={Book} />
          </div>
      </div>

  );
}

export default App;
