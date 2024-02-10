import React from 'react';
import MainPage from './Pages/MainPage'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewCurrentList from './Pages/ViewCurrentList';
import './Styles/ViewCurrentList.scss';
import ChatAssistant from './ChatAssistant';
import ModifyList from './Pages/ModifyList';
import AddItems from './Pages/AddItems';
import RemoveItems from './Pages/RemoveItems';
import Register from './Register';
import Login from './Login';
import PriorityList from './Pages/PriorityList';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <Register />
                        }
                    />
                    <Route path="ViewCurrentList" element={<ViewCurrentList />} />
                    <Route path="ChatAssistant" element={<ChatAssistant />} />
                    <Route path="ModifyList" element={<ModifyList />} />
                    <Route path="AddItems" element={<AddItems />} />
                    <Route path="RemoveItems" element={<RemoveItems />} />
                    <Route path="MainPage" element={<MainPage />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Register" element={<Register />} />
                    <Route path="PriorityList" element={<PriorityList />} />
                    <Route path="ViewCurrentList" element={<ViewCurrentList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
