import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Dashboard, Profile } from './pages'
import AdminLayout from '../layouts/AdminLayout'
import './assets/css/app.css'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<AdminLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    )
}

export default AdminRoutes