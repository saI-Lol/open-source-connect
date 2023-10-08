import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const cors=require('cors');
// const express=require('express');

// const app=express()
// app.use(cors());
// app.use(cors({origin:"http://localhost:3000/"}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
