import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchProjectById } from '../api';

const ProjectDetails = () => {
    const { id } = useParams();
    const [projectData, setProjectData] = useState({
        title: '',
        total_area: '',
        living_space: '',
        price: '',
        location: '',
        year: '',
        category: '',
        type: '',
        description: '',
        image: null,
    });
    const navigate = useNavigate();

    useEffect(() => {
        const loadProjectDetails = async () => {
            try {
                const data = await fetchProjectById(id);
                setProjectData(data);
            } catch (error) {
                toast.error('Failed to load project details.');
                navigate('/projects');
            }
        };

        loadProjectDetails();
    }, [id, navigate]);

    return (
        <>
            <div className="breadcrumb-area pt-50">
                <div className="container">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                <li className="breadcrumb-item"><Link to='/projects'>Projects</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Details</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="pt-0 project-details-wrap section-padding">
                <div className="container">
                    <div className="row gx-5 justify-content-around align-items-end mt-30">
                        <div className="col-xl-6 col-lg-6">
                            <div className="project-bg">
                                <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-details/project-details.jpg" alt="" />
                                <div className="project-brief-wrap">
                                    <div className="single-brief">
                                        <h6>Total Area</h6>
                                        <p>276.50 m2</p>
                                    </div>
                                    <div className="single-brief">
                                        <h6>Living Space</h6>
                                        <p>95.30 m2</p>
                                    </div>
                                    <div className="single-brief">
                                        <h6>Material Space</h6>
                                        <p>Prefabricated Concrete</p>
                                    </div>

                                    <div className="single-brief total-cost">
                                        <h6>Total Cost</h6>
                                        <p>$7,590</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="project-details-inner">
                                <div className="section-title">
                                    <h2>{projectData.title} </h2>
                                </div>
                                <div className="project-details-info">
                                    <div className="single-info">
                                        <p>Location</p>
                                        <h4>Kigali Rwanda</h4>
                                    </div>
                                    <div className="single-info">
                                        <p>Year</p>
                                        <h4>2024</h4>
                                    </div>
                                </div>
                                <div className="project-desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-section mt-120">
                        <h4>Gallery</h4>
                        <hr />
                        <div className="mt-20 row gx-3 gy-3">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row gx-3 gy-3">
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="project-details-img">
                                            <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-details/gallery-5.jpg" alt="" />
                                            <figure>
                                                <figcaption>Drawing Room</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="project-details-img">
                                            <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-details/gallery-5.jpg" alt="" />
                                            <figure>
                                                <figcaption>Drawing Room</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="project-details-img">
                                            <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-details/gallery-5.jpg" alt="" />
                                            <figure>
                                                <figcaption>Drawing Room</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="project-details-img">
                                            <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-details/gallery-5.jpg" alt="" />
                                            <figure>
                                                <figcaption>Drawing Room</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="project-details-img">
                                            <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-details/gallery-5.jpg" alt="" />
                                            <figure>
                                                <figcaption>Drawing Room</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="project-details-img">
                                            <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-details/gallery-5.jpg" alt="" />
                                            <figure>
                                                <figcaption>Drawing Room</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="project-details-img">
                                            <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-details/gallery-5.jpg" alt="" />
                                            <figure>
                                                <figcaption>Drawing Room</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="project-details-img">
                                            <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-details/gallery-5.jpg" alt="" />
                                            <figure>
                                                <figcaption>Drawing Room</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails