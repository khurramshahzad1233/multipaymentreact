import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Stripeprovider from './context/Stripeprovider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Stripeprovider>
    <App />
    </Stripeprovider>
    
  </React.StrictMode>
);

