// Import our custom CSS
import './styles/main.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss'; // <- using Sass

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
