import React from 'react';
import ReactDOM from 'react-dom';
import data from "../data/perustiedot.json";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App perustiedot={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

