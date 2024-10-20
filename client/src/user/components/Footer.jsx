import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-up">
                    <div className="row gy-5">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <a href="/" className="logo">WeLinkHome.</a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5>Office</h5>
                            <p>
                                Kigali Rwanda
                            </p>
                            <div className="company-email">
                                <p>Have a project in mind?</p>
                                <a href="#">info@welinkhome.com</a>
                            </div>
                            <div className="phone-number">
                                <p>Mon-Fri, 08.00 AM-09.00 PM</p>
                                <a href="#">+25078888888</a>
                            </div>

                        </div>
                        <div className="col-lg-2 col-md-6 com-sm-12">
                            <h5>Links</h5>
                            <ul>
                                <li>
                                    <a href="/about">About Us</a>
                                    <a href="/services">Services</a>
                                    <a href="/projects">Projects</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h5>Follow Us</h5>
                            <ul>
                                <li>
                                    <div className="social-area">
                                        <a href="#">Facebook</a>
                                        <a href="#">Instagram</a>
                                        <a href="#">Medium</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer