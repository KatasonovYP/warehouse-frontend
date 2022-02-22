import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tasks from './pages/Tasks/Tasks';
import Storages from './pages/Storages/Storages';
import Items from './pages/Items/Items';

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/storages" element={<Storages />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </BrowserRouter>
      );
}

export default App;
