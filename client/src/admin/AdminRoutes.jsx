import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Dashboard, Profile, Contacts, GetProjects, AddProject, EditProject } from './pages';
import AdminLayout from '../layouts/AdminLayout';

const AdminRoutes = () => {
    useEffect(() => {
        // Dynamically import Admin CSS when the admin routes are loaded
        import('./assets/css/app.css');
        // Cleanup function to remove the admin CSS when unmounted
        return () => {
            const adminStyles = document.querySelector('link[href*="app.css"]');
            if (adminStyles) {
                adminStyles.remove();
            }
        };
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<AdminLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/projects" element={<GetProjects />} />
                <Route path="/project/add" element={<AddProject />} />
                <Route path="/project/edit/:id" element={<EditProject />} />
            </Route>
        </Routes>
    );
};

export default AdminRoutes;
