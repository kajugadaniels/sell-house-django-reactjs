import React from 'react'

const Navbar = () => {
    return (
        <div className="header-area">
            <div id="header-sticky">
                <div className="navigation">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-4 col-6">
                                <div className="logo">
                                    <a href="/" className="logo">WeLink Home.</a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7 d-none d-lg-block text-lg-end">
                                <div className="main-menu">
                                    <ul>
                                        <li>
                                            <a className="navlink" href="/">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a className="navlink" href="/about">
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a className="navlink" href="/services">
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a className="navlink" href="/projects">
                                                Projects
                                            </a>
                                        </li>
                                        <li>
                                            <a className="navlink" href="/contact">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-1 col-lg-1 d-none d-lg-inline-block">
                                <div className="header-right">
                                    <div className="header-btn">
                                        <div className="menu-trigger">
                                            <span className="lines"></span>
                                            <span className="lines"></span>
                                            <span className="lines"></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="mobile-nav-bar col-6 d-block d-lg-none">
                                <div className="mobile-nav-wrap">
                                    <div id="hamburger">
                                        <i className="las la-bars"></i>
                                    </div>
                                    <div className="mobile-nav">
                                        <button type="button" className="close-nav">
                                            <i className="las la-times-circle"></i>
                                        </button>
                                        <nav className="sidebar-nav">
                                            <ul className="metismenu" id="mobile-menu">
                                                <li>
                                                    <a href="/">
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/about">
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/services">
                                                        Services
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/projects">
                                                        Projects
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/contact">
                                                        Contact
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className="action-bar">
                                            <a href="mailto:info@welinkhome.com"><i className="las la-envelope"></i>info@welinkhome.com</a>
                                            <a href="tel:123-456-7890"><i className="fal fa-phone"></i>123-456-7890</a>
                                            <a href="/contact" className="theme-btn">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar