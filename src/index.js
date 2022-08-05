import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import Landing from './routes/Landing/Landing';
import Page404s from './Page404s';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/landing' element={<Landing />} />
        <Route
          path="*"
          element={<Page404s />}
        />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
