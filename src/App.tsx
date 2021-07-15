import React, {useEffect} from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import {Route} from "react-router-dom"

import {getBooks} from "./redux/actions/books"
import Header from "./Components/Header";
import Home from "./Components/pages/Home";

function App() {

  const dispatch = useDispatch()

  return (
      <div className="wrapper">
        <Header />
          <div className="content">
              <Route exact path="/" component={Home} />
          </div>
      </div>

  );
}

export default App;
