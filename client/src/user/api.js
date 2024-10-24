import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';
const MEDIA_BASE_URL = 'http://127.0.0.1:8000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProjects = async () => {
    try {
        const response = await api.get('/projects/');
        // Transform the data to include full image URLs
        const projectsWithFullImageUrls = response.data.map(project => ({
            ...project,
            image: project.image ? `${MEDIA_BASE_URL}${project.image.replace(/^\/media/, '')}` : null
        }));
        return projectsWithFullImageUrls;
    } catch (error) {
        throw error.response
            ? error.response.data
            : new Error('An error occurred while fetching projects.');
    }
};

export const fetchProjectById = async (id) => {
    try {
        const response = await api.get(`/project/${id}/`);
        // Transform the image URL for single project
        const projectWithFullImageUrl = {
            ...response.data,
            image: response.data.image ? `${MEDIA_BASE_URL}${response.data.image.replace(/^\/media/, '')}` : null
        };
        return projectWithFullImageUrl;
    } catch (error) {
        throw error.response
            ? error.response.data
            : new Error('An error occurred while fetching the project.');
    }
};