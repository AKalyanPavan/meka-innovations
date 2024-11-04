import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage.js';

export default function App() {
  return (
    <BrowserRouter basename={'/'}>
      <Routes>

        <Route index path='/' element={<Homepage />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);