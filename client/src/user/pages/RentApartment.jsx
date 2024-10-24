import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { motion, AnimatePresence } from 'framer-motion'
import { getProjects } from '../api'

const RentApartment = () => {
    const [projects, setProjects] = useState([])
    const [filteredProjects, setFilteredProjects] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [projectsPerPage] = useState(12)
    const [activeCategory, setActiveCategory] = useState('All')
    const [showMoreProjects, setShowMoreProjects] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const loadProjects = async () => {
            setLoading(true)
            try {
                const data = await getProjects()
                // Filter only projects with 'Rent Apartment' type
                const rentApartmentProjects = data.filter(
                    (project) => project.type === 'Rent Apartment'
                )
                setProjects(rentApartmentProjects)
                setFilteredProjects(rentApartmentProjects)
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

    const handleFilter = (category) => {
        setActiveCategory(category)
        if (category === 'All') {
            setFilteredProjects(projects)
        } else {
            const filtered = projects.filter(project => project.category === category)
            setFilteredProjects(filtered)
        }
        setCurrentPage(1)
        setShowMoreProjects(false)
    }

    const indexOfLastProject = currentPage * projectsPerPage
    const indexOfFirstProject = indexOfLastProject - projectsPerPage
    const currentProjects = filteredProjects.slice(
        indexOfFirstProject,
        showMoreProjects ? filteredProjects.length : indexOfLastProject
    )

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        setShowMoreProjects(false)
    }

    const handleLoadMore = () => {
        setShowMoreProjects(true)
    }

    return (
        <>
            <div className="breadcrumb-area white-bg">
                <div className="container">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/project">Projects</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Rent Apartment</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="project-section section-padding">
                <div className="container">
                    <div className="row border-bottom">
                        <div className="col-xl-5 col-lg-5 col-md-7">
                            <div className="section-title text-low">
                                <div>
                                    <h2 className='text-black fw-bold'>Rent Apartment</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-5 text-start">
                            <div className="p-animation">
                                <p>
                                    Find the best apartments available for rent in our curated list below.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Filter Menu */}
                    <div className="row text-lg-end mt-30">
                        <ul id="menu-filter" className="mb-0 project-menu">
                            <AnimatePresence>
                                {['All', 'Residential', 'Commercial', 'Selling'].map((category, index) => (
                                    <motion.li
                                        key={index}
                                        className="list-inline-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <a
                                            className={activeCategory === category ? 'active' : ''}
                                            onClick={() => handleFilter(category)}
                                        >
                                            {category}
                                        </a>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                    </div>

                    {/* Projects List */}
                    <div id="project-masonry" data-scroll-index="2">
                        <div className="container">
                            <div id="project-grid" className="project-grid project-section pt-60 pb-90">
                                <div className="container-fluid">
                                    {loading ? (
                                        <div className="py-5 text-center">Loading projects...</div>
                                    ) : (
                                        <div className="row">
                                            <AnimatePresence>
                                                {currentProjects.map((project, index) => (
                                                    <motion.div
                                                        key={project.id}
                                                        className="col-xl-4 col-lg-4 col-md-6 residence"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 20 }}
                                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    >
                                                        <div className="single-project-item">
                                                            <div className="project-bg">
                                                                <img 
                                                                    src={project.image || 'https://capricorn-theme.com/html/architon/assets/img/blog/blog-5.jpg'} 
                                                                    alt={project.title} 
                                                                    onError={(e) => {
                                                                        e.target.onerror = null; // prevent infinite fallback
                                                                        e.target.src = 'https://capricorn-theme.com/html/architon/assets/img/blog/blog-5.jpg'; // fallback image
                                                                    }} 
                                                                />
                                                            </div>
                                                            <div className="project-info">
                                                                <div onClick={() => handleView(project.id)}>
                                                                    <h5>{project.title}</h5>
                                                                    <p>{project.category}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </AnimatePresence>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Load More Button */}
                    {currentPage < totalPages && (
                        <div className="mt-5 text-center">
                            <button
                                className="btn btn-primary"
                                onClick={handleLoadMore}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default RentApartment
