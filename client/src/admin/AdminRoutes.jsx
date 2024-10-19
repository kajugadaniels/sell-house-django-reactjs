import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Dashboard } from './pages'
import AdminLayout from '../layouts/AdminLayout'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<AdminLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default AdminRoutes