import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages'
import UserLayout from '../layouts/UserLayout'

const UserRoutes = () => {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default UserRoutes