import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const Projects = () => {
    return (
        <>
            <div className="breadcrumb-area white-bg">
                <div className="container">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item"><a href="#">Projects</a></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row justify-content-center mt-60">
                        <div className="text-center col-lg-6">
                            <div className="breadcrumb-title">
                                <h1 className="text-dark">Projects</h1>
                            </div>
                            <div className="breadcrumb-icon">
                                <ChevronDown className="las la-angle-down" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="project-grid" className="project-grid project-section pt-60 pb-90">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-project-item">
                                <div className="project-bg">
                                    <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-standard/2-1.jpg" alt="" style={{ backgroundSize: 'contain' }} />
                                </div>
                                <div className="project-info">
                                    <Link to='/project/slug'>
                                        <h5>Project Name</h5>
                                        <p>Residential</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-project-item">
                                <div className="project-bg">
                                    <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-standard/2-1.jpg" alt="" style={{ backgroundSize: 'contain' }} />
                                </div>
                                <div className="project-info">
                                    <Link to='/project/slug'>
                                        <h5>Project Name</h5>
                                        <p>Selling</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-project-item">
                                <div className="project-bg">
                                    <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-standard/2-1.jpg" alt="" style={{ backgroundSize: 'contain' }} />
                                </div>
                                <div className="project-info">
                                    <Link to='/project/slug'>
                                        <h5>Project Name</h5>
                                        <p>Commercial</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-project-item">
                                <div className="project-bg">
                                    <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-standard/2-1.jpg" alt="" style={{ backgroundSize: 'contain' }} />
                                </div>
                                <div className="project-info">
                                    <Link to='/project/slug'>
                                        <h5>Project Name</h5>
                                        <p>Selling</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects