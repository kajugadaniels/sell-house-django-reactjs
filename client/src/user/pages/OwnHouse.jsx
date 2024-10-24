import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects } from '../api/projects';

const OwnHouse = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(12);
    const [activeCategory, setActiveCategory] = useState('All');
    const [showMoreProjects, setShowMoreProjects] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loadProjects = async () => {
            setLoading(true);
            try {
                const data = await getProjects();
                // Filter projects by type 'Own House'
                const ownHouseProjects = data.filter(project => project.type === 'Own House');
                setProjects(ownHouseProjects);
                setFilteredProjects(ownHouseProjects);
            } catch (error) {
                console.error('Error loading projects:', error);
                toast.error('Failed to load projects.');
            } finally {
                setLoading(false);
            }
        };
        loadProjects();
    }, []);

    const handleView = (projectId) => {
        navigate(`/project/${projectId}`);
    };

    const handleFilter = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(project => project.category === category);
            setFilteredProjects(filtered);
        }
        setCurrentPage(1);
        setShowMoreProjects(false);
    };

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(
        indexOfFirstProject,
        showMoreProjects ? filteredProjects.length : indexOfLastProject
    );

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const handleLoadMore = () => {
        setShowMoreProjects(true);
    };

    return (
        <>
            <div className="py-3 breadcrumb-area bg-light">
                <div className="container">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="mb-0 breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="text-decoration-none">Home</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/project" className="text-decoration-none">Projects</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Own a House</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="py-5 project-section">
                <div className="container">
                    <div className="pb-3 mb-4 row border-bottom">
                        <div className="col-lg-5 col-md-7">
                            <div className="section-title">
                                <h2 className="text-black fw-bold">Own a House</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-5">
                            <p className="text-muted">
                                Browse through our collection of available houses and find your dream home.
                            </p>
                        </div>
                    </div>

                    {/* Filter Menu */}
                    <div className="mb-4 row">
                        <div className="col-12">
                            <ul className="nav justify-content-end project-menu">
                                <AnimatePresence>
                                    {['All', 'Residential', 'Commercial', 'Selling'].map((category, index) => (
                                        <motion.li
                                            key={index}
                                            className="nav-item"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <button
                                                className={`nav-link border-0 bg-transparent px-3 ${activeCategory === category ? 'text-primary fw-bold' : 'text-muted'}`}
                                                onClick={() => handleFilter(category)}
                                            >
                                                {category}
                                            </button>
                                        </motion.li>
                                    ))}
                                </AnimatePresence>
                            </ul>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="project-grid">
                        {loading ? (
                            <div className="py-5 text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <div className="row g-4">
                                <AnimatePresence>
                                    {currentProjects.map((project, index) => (
                                        <motion.div
                                            key={project.id}
                                            className="col-lg-4 col-md-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <div className="border-0 shadow-sm card project-card h-100">
                                                <div className="position-relative">
                                                    {project.image ? (
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="card-img-top"
                                                            style={{
                                                                height: '250px',
                                                                objectFit: 'cover',
                                                            }}
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                e.target.src = '/assets/images/placeholder-house.jpg';
                                                            }}
                                                        />
                                                    ) : (
                                                        <div 
                                                            className="bg-light d-flex align-items-center justify-content-center"
                                                            style={{ height: '250px' }}
                                                        >
                                                            <span className="text-muted">No image available</span>
                                                        </div>
                                                    )}
                                                    <div className="project-overlay">
                                                        <button 
                                                            className="btn btn-primary"
                                                            onClick={() => handleView(project.id)}
                                                        >
                                                            View Details
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="mb-1 card-title">{project.title}</h5>
                                                    <p className="mb-0 card-text text-muted small">{project.category}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>

                    {/* Load More Button */}
                    {!showMoreProjects && currentPage < totalPages && (
                        <div className="mt-5 text-center">
                            <button
                                className="px-4 py-2 btn btn-primary"
                                onClick={handleLoadMore}
                            >
                                Load More Projects
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Add custom CSS */}
            <style>
                {`
                    .project-card {
                        transition: transform 0.3s ease;
                    }
                    
                    .project-card:hover {
                        transform: translateY(-5px);
                    }
                    
                    .project-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    }
                    
                    .project-card:hover .project-overlay {
                        opacity: 1;
                    }
                    
                    .nav-link {
                        cursor: pointer;
                        transition: color 0.3s ease;
                    }
                    
                    .nav-link:hover {
                        color: var(--bs-primary) !important;
                    }
                `}
            </style>
        </>
    );
};

export default OwnHouse;