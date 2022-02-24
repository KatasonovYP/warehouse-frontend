import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Storages from './pages/Storages/Storages';
import Tasks from './pages/Tasks/Tasks';
import Items from './pages/Items/Items';
import Welcome from './pages/Welcome/Welcome';
import Error from './pages/Error/Error';

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
                <Route path='/404' element={<Error />} />
                <Route path='*' element={<Navigate to='/404' />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
