import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Invoice from './pages/Invoice';
import './styles/app.css';

function App() {
  return (
    <Routes>
      <Route path="/invoice" element={ <Invoice /> } />
      <Route exact path="/" element={ <Navigate to="/invoice" /> } />
    </Routes>
  );
}

export default App;

