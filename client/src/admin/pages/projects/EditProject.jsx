import React, { useState, useEffect } from 'react'
import { Eye, Save } from 'lucide-react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchProjectById, updateProject } from '../../api'

const CATEGORY_CHOICES = [
    { id: 'Residential', name: 'Residential' },
    { id: 'Commercial', name: 'Commercial' },
    { id: 'Selling', name: 'Selling' },
];

const EditProject = () => {
    const { id } = useParams();
    const [projectData, setProjectData] = useState({
        title: '',
        total_area: '',
        living_space: '',
        price: '',
        location: '',
        year: '',
        category: '',
        description: '',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loadProjectDetails = async () => {
            try {
                const data = await fetchProjectById(id);
                setProjectData(data);
            } catch (error) {
                toast.error('Failed to load project details.');
                navigate('/admin/projects');
            }
        };

        loadProjectDetails();
    }, [id, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData({ ...projectData, [name]: value });
    };

    const handleUpdateProject = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateProject(id, projectData);
            toast.success('Project updated successfully.');
            navigate('/admin/projects');
        } catch (error) {
            toast.error(error.message || 'An error occurred while updating the project.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>EditProject</div>
    )
}

export default EditProject