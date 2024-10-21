import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Home, OwnHouse, ProjectDetails, Projects, RentApartment, Services } from './pages';
import UserLayout from '../layouts/UserLayout';

const UserRoutes = () => {
    useEffect(() => {
        // Dynamically import User CSS when the user routes are loaded
        import('./assets/css/style.css');
        // Cleanup function to remove the user CSS when unmounted
        return () => {
            const userStyles = document.querySelector('link[href*="style.css"]');
            if (userStyles) {
                userStyles.remove();
            }
        };
    }, []);

    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:slug" element={<ProjectDetails />} />
                <Route path="/own-house" element={<OwnHouse />} />
                <Route path="/rent-apartment" element={<RentApartment />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default UserRoutes;
