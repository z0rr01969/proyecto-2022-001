import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

//el root, funcion llamada a la creacion de documento -> app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
