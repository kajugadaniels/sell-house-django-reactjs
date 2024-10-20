import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar change navbar-expand-lg">
            <div className="container">
                <a className="logo" href="#">
                    {/*<img src="img/logo-light.png" alt="logo" />*/}
                    WeLink Home
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar"><i className="fas fa-bars"></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="ml-auto navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">Home</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="index.html">Main Home</a>
                                <a className="dropdown-item" href="index3.html">Architecture</a>
                                <a className="dropdown-item" href="index2.html">Interior Design</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="portfolio-mas2.html">Portfolio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">Blog</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="blog.html">Blogs</a>
                                <a className="dropdown-item" href="blog-details.html">Post Details</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <div className="social-icon">
                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                        <a href="#0"><i className="fab fa-twitter"></i></a>
                        <a href="#0"><i className="fab fa-behance"></i></a>
                    </div>
                    <div className="search">
                        <span className="cursor-pointer icon pe-7s-search"></span>
                        <div className="text-center search-form custom-font">
                            <form>
                                <input type="text" name="search" placeholder="Search" />
                            </form>
                            <span className="cursor-pointer close pe-7s-close"></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar