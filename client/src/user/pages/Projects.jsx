import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { toast } from 'react-toastify';
import { getProjects } from '../../admin/api';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const loadProjects = async () => {
            setLoading(true);
            try {
                const data = await getProjects();
                setProjects(data);
                setFilteredProjects(data);
            } catch (error) {
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

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                </div>
            </div>

            <div className="project-section section-padding">
                <div className="container">
                    <div className="row border-bottom">
                        <div className="col-xl-5 col-lg-5 col-md-7">
                            <div className="section-title text-low">
                                <div>
                                    <h2 className='text-black fw-bold'>Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-5 text-start">
                            <div className="p-animation">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="project-masonry" data-scroll-index="2">
                        <div className="container">
                            <div className="row text-lg-end mt-30">
                                <ul id="menu-filter" className="mb-0 project-menu">
                                    <li className="list-inline-item">
                                        <a className="active" data-filter="*">Show All</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="" data-filter=".residential">Residential</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="" data-filter=".commercial">Commercial</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="" data-filter=".selling">Selling</a>
                                    </li>
                                </ul>
                            </div>
                            <div id="project-grid" className="project-grid project-section pt-60 pb-90">
                                <div className="container-fluid">
                                    {loading ? (
                                        <div className="py-5 text-center">Loading projects...</div>
                                    ) : (
                                        <div className="row">
                                            {currentProjects.map((project) => (
                                                <div key={project.id} className="col-xl-4 col-lg-4 col-md-6 residence">
                                                    <div className="single-project-item">
                                                        <div className="project-bg">
                                                            <img src="https://capricorn-theme.com/html/architon/assets/img/blog/blog-5.jpg" alt="" style={{ backgroundSize: 'contain' }} />
                                                        </div>
                                                        <div className="project-info">
                                                            <div onClick={() => handleView(project.id)}>
                                                                <h5>{project.title}</h5>
                                                                <p>{project.category}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
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