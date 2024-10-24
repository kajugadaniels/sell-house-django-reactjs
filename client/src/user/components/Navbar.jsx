import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CircleX, Menu, MessageCircle, PhoneCall } from 'lucide-react';

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
                            <div className="col-xl-3 col-lg-3 col-6">
                                <div className="logo">
                                    <Link to="/" className="logo">WeLink Home.</Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 d-none d-lg-block text-lg-end">
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
                            <div className="col-xl-4 col-lg-4 col-6 d-none d-lg-block">
                                <div className='d-flex'>
                                    <div className="mt-30 mb-30">
                                        <Link to="own-house" className="text-white bg-black white-btn">Own House</Link>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <Link to="rent-apartment" className="text-white bg-black white-btn">Rent Apartment</Link>
                                    </div>
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
                                                <div className="mt-10 mb-10">
                                                    <Link to="own-house" className="py-4 text-white bg-black white-btn" style={{ border: 'none' }}>Own House</Link>
                                                </div>
                                                <div className="mt-10 mb-10">
                                                    <Link to="rent-apartment" className="py-4 text-white bg-black white-btn" style={{ border: 'none' }}>Rent Apartment</Link>
                                                </div>
                                            </ul>
                                        </nav>
                                        <div className="action-bar">
                                            <Link to="mailto:info@welinkhome.com"><MessageCircle className="las la-envelope" />info@welinkhome.com</Link>
                                            <Link to="tel:123-456-7890"><PhoneCall className="fal fa-phone" />123-456-7890</Link>
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