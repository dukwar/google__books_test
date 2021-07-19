import React from 'react';
import AppWrapper from "./AppWrapper";
import ReactDOM from "react-dom";


it('App render ', function () {
  const div = document.createElement('div')
  ReactDOM.render(<AppWrapper />, div)
  ReactDOM.unmountComponentAtNode(div)
});



