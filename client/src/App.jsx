import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminRoutes from './admin/Routes.jsx';
import UserRoutes from './user/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/admin' element={
                    <AdminRoutes />
                } />
                <Route path='/*' element={
                    <UserRoutes />
                } />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
            />
        </Router>
    )
}

export default App