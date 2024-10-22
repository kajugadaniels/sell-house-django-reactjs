import React, { useEffect, useState } from 'react'
import { Hero } from '../components'
import { AboutArea, Construct, Design, Develop } from '../assets/img'
import { ArrowUpRight, Play } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { getProjects } from '../api'

const Home = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const loadProjects = async () => {
            setLoading(true)
            try {
                const data = await getProjects()
                setProjects(data.slice(0, 4))
            } catch (error) {
                toast.error('Failed to load projects.')
            } finally {
                setLoading(false)
            }
        }
        loadProjects()
    }, [])

    const handleView = (projectId) => {
        navigate(`/project/${projectId}`)
    }

    return (
        <>
            <Hero />

            <div className="pt-12 pb-12 gray-bg feature-section section-padding">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-xl-5 col-lg-4">
                            <div className="section-title text-low">
                                <div>
                                    <h2 className='text-black fw-bold'>What We Do</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8">
                            <div className="row gy-5 feature-wrap">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay=".2s">
                                    <div className="single-feature-item">
                                        <div className="single-feat-inner">
                                            <div className="icon-wrap">
                                                <img src={Design} alt="Design" />
                                            </div>
                                            <div className="service-title">
                                                <h4>Design</h4>
                                            </div>
                                        </div>
                                        <p>
                                            Welink is committed to refined and innovative design that stands the test of time.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay=".4s">
                                    <div className="single-feature-item">
                                        <div className="single-feat-inner">
                                            <div className="icon-wrap">
                                                <img src={Develop} alt="Develop" />
                                            </div>
                                            <div className="service-title">
                                                <h4>Develop</h4>
                                            </div>
                                        </div>
                                        <p>
                                            Welink is committed to creating living spaces that are smart, unique, memorable and sustainable.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay=".6s">
                                    <div className="single-feature-item">
                                        <div className="single-feat-inner">
                                            <div className="icon-wrap">
                                                <img src={Construct} alt="Construct" />
                                            </div>
                                            <div className="service-title">
                                                <h4>Construct</h4>
                                            </div>
                                        </div>
                                        <p>
                                            Welink is committed to delivering exceptional homes on time and on budget every single time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-0 about-section section-padding pb-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-img-wrap">
                                <div className="image-one wow fadeInUp">
                                    <img src={AboutArea} alt="About WeLink Home" />
                                </div>
                                <div className="image-two wow fadeInUp">
                                    <img src={AboutArea} alt="About WeLink Home" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-content-wrapper wow fadeInUp animated">
                                <div className="section-title text-low">
                                    <h2 className='text-black fw-bold'>About WeLink Home</h2>
                                </div>
                                <div className="p-animation">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <a href="/about" className="theme-btn mt-30">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feature_slider_wrap gray-bg border-top border-bottom pt-60 pb-60">
                <div className="feature_item">
                    <h2>
                        <img src="https://capricorn-theme.com/html/architon/assets/img/asterisk-dark.png" alt="feat-icon" />
                        Design for Sustainability
                    </h2>
                    <h2 className="stroke">
                        <img src="https://capricorn-theme.com/html/architon/assets/img/asterisk-dark.png" alt="feat-icon" />
                        Innovative Design
                    </h2>
                    <h2>
                        <img src="https://capricorn-theme.com/html/architon/assets/img/asterisk-dark.png" alt="feat-icon" />
                        Experienced Team
                    </h2>
                    <h2 className="stroke">
                        <img src="https://capricorn-theme.com/html/architon/assets/img/asterisk-dark.png" alt="feat-icon" />
                        Honesty & Integrity
                    </h2>
                    <h2>
                        <img src="https://capricorn-theme.com/html/architon/assets/img/asterisk-dark.png" alt="feat-icon" />
                        24/7 Accessibility
                    </h2>
                    <h2 className="stroke">
                        <img src="https://capricorn-theme.com/html/architon/assets/img/asterisk-dark.png" alt="feat-icon" />
                        Quality Craftsmanship
                    </h2>
                </div>
            </div>

            <div id="project-2" className="project-section section-padding pt-100 pb-100">
                <div className="container">
                    <div className="row justify-content-center border-bottom">
                        <div className="col-xl-12">
                            <div className="section-title text-up">
                                <h2>Works <span>4</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="tab-content" id="nav-tabContent">
                            {loading ? (
                                <div className="py-5 text-center">Loading projects...</div>
                            ) : (
                                <div className="tab-pane fade show active">
                                    <div className="pt-10 row">
                                        {projects.map((project, index) => (
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                                                <div className="featured-work-wrapper" style={{ backgroundImage: "url('https://capricorn-theme.com/html/architon/assets/img/project/project-details/project-details.jpg')" }} onClick={() => handleView(project.id)}>
                                                    <div className="featured-work-inner">
                                                        <div className="fetured-work-bg">
                                                        </div>
                                                        <div className="details-link" onClick={() => handleView(project.id)}>
                                                            <ArrowUpRight className="text-white" />
                                                        </div>
                                                        <div className="featured-work-info">
                                                            <h2 style={{ fontSize: '50px' }}>{project.price}</h2>
                                                            <h4 style={{ fontSize: '24px' }} className='fw-bold'>{project.title}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div class="video-section">
                <div class="overlay"></div>
                <div class="video-inner-box">
                    <div class="play-btn">
                        <a href="#" class="video-play-btn mfp-iframe"><Play /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home