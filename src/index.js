import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as allThemes from './theme/schema.json'
import { setToLocalStorage } from './utils/storage'
import reportWebVitals from './reportWebVitals';

const Index = () => {
  setToLocalStorage("themes", allThemes.default)
  return (
    <App />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
