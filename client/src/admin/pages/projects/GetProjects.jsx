import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, EllipsisVertical, KeySquare, ListChecks, PenLine, Search, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getProjects } from '../../api';
import { toast } from 'react-toastify';

const GetProjects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
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

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (term) {
            const filtered = projects.filter((project) =>
                project.name.toLowerCase().includes(term.toLowerCase()) ||
                project.email?.toLowerCase().includes(term.toLowerCase()) ||
                project.phone_number?.toLowerCase().includes(term.toLowerCase()) ||
                project.alternative_identifier?.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredProjects(filtered);
            setCurrentPage(1); // Reset to the first page when searching
        } else {
            setFilteredProjects(projects);
        }
    };

    const toggleDropdown = (projectId) => {
        setDropdownOpen(dropdownOpen === projectId ? null : projectId);
    };

    const handleEdit = (projectId) => {
        navigate(`/project/${projectId}`);
    };

    const handleDelete = async (projectId) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await deleteProject(projectId);
                setProjects(projects.filter((project) => project.id !== projectId));
                setFilteredProjects(filteredProjects.filter((project) => project.id !== projectId));
                toast.success('Project deleted successfully.');
            } catch (error) {
                toast.error('Failed to delete project.');
            }
        }
    };

    // Pagination logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>GetProjects</div>
    )
}

export default GetProjects