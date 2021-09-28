import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//  custom add router from recent install of react-router-dom
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* add browerrouter as a component
    browserrouter makes the app so the browser doesnt go through a full reload everytime you click somethine
    removes the current dom and replaces it with another */}
    <BrowserRouter>
    
    <App />

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
