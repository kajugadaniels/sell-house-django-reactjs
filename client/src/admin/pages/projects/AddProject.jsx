import React, { useState, useEffect } from 'react';
import { Eye, Save } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addProject } from '../../api';

const AddProject = () => {
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

    const handleInputChange = (e) => {
        const { title, value } = e.target;
        setProjectData({
            ...projectData,
            [title]: value,
        });
    };

    const handleAddProject = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const payload = { ...projectData };
            await addProject(payload);
            toast.success('Project registered successfully.');
            navigate('/admin/projects');
        } catch (error) {
            toast.error(error.message || 'An error occurred while adding the project.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>AddProject</div>
    )
}

export default AddProject