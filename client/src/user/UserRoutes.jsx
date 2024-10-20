import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Home, ProjectDetails, Projects, Services } from './pages'
import UserLayout from '../layouts/UserLayout'
import './assets/css/app.css'

const UserRoutes = () => {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:slug" element={<ProjectDetails />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default UserRoutes