import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CircleX, Menu } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="header-area">
            <div id="header-sticky">
                <div className="navigation">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-4 col-6">
                                <div className="logo">
                                    <Link to="/" className="logo">WeLink Home.</Link>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 d-none d-lg-block text-lg-end">
                                <div className="main-menu">
                                    <ul>
                                        {menuItems.map((item) => (
                                            <li key={item.path} className={isActive(item.path) ? 'active' : ''}>
                                                <Link className="navlink" to={item.path}>
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mobile-nav-bar col-6 d-block d-lg-none">
                                <div className="mobile-nav-wrap">
                                    <div id="hamburger" onClick={toggleMobileMenu}>
                                        <Menu className="las la-bars" />
                                    </div>
                                    <div className={`mobile-nav ${isMobileMenuOpen ? 'show' : ''}`}>
                                        <button type="button" className="close-nav" onClick={toggleMobileMenu}>
                                            <CircleX className="las la-times-circle" />
                                        </button>
                                        <nav className="sidebar-nav">
                                            <ul className="metismenu" id="mobile-menu">
                                                {menuItems.map((item) => (
                                                    <li key={item.path} className={isActive(item.path) ? 'active' : ''}>
                                                        <Link to={item.path} onClick={toggleMobileMenu}>
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                        <div className="action-bar">
                                            <a href="mailto:info@welinkhome.com"><i className="las la-envelope"></i>info@welinkhome.com</a>
                                            <a href="tel:123-456-7890"><i className="fal fa-phone"></i>123-456-7890</a>
                                            <Link to="/contact" className="theme-btn" onClick={toggleMobileMenu}>Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;