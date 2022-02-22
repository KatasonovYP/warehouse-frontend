import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Tasks from './pages/Tasks';
import Storages from './pages/Storages';
import Items from './pages/Items';

function App() {
    return (
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/about" element={<Storages />} />
        </Routes>
        </BrowserRouter>
      );
}

export default App;
