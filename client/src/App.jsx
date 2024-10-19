import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminRoutes from './admin/Routes.jsx';
import UserRoutes from './user/Routes.jsx';
import AdminLayout from './layouts/AdminLayout.jsx'
import UserLayout from './layouts/UserLayout.jsx'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/admin' element={
                    <AdminLayout>
                        <AdminRoutes />
                    </AdminLayout>
                } />
                <Route path='/*' element={
                    <UserLayout>
                        <UserRoutes />
                    </UserLayout>
                } />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
}

export default App