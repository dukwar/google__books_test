import React from "react";
import {Provider} from "react-redux";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";


const AppWrapper = () => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}

export default AppWrapper