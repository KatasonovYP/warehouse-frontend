import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Storages from './pages/Storages/Storages';
import Tasks from './pages/Tasks/Tasks';
import Items from './pages/Items/Items';
import Welcome from './pages/Welcome/Welcome';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/sign_in' element={<SignIn />} />
                <Route path='/sign_up' element={<SignUp />} />
                <Route path='/storages' element={<Storages />} />
                <Route path='/tasks' element={<Tasks />} />
                <Route path='/items' element={<Items />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
