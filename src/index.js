// ✅ index.js or main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './page/Layout';
import Home from './page/Home';
import Deals from './page/Deals';
import Login from './page/Login';
import Register from './page/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Route path="/" element={<Layout />}>
          {/* ✅ index = exact '/' */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="deals" element={<Deals />} />

          {/* ✅ fallback for any unmatched route — open Home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
