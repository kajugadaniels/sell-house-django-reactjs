import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login/', { email, password });
        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        let message = 'An error occurred during login. Please try again.';
        if (error.response) {
            message = error.response.data.error || error.response.data.detail || message;
        }
        return {
            success: false,
            message,
        };
    }
};

export const logout = async (token) => {
    try {
        const response = await api.post(
            '/auth/logout/',
            {},
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        );
        return {
            success: true,
            message: response.data.message,
        };
    } catch (error) {
        let message = 'An error occurred during logout. Please try again.';
        if (error.response) {
            message = error.response.data.error || error.response.data.detail || message;
        }
        return {
            success: false,
            message,
        };
    }
};

export const updateUser = async (data) => {
    console.log('Incoming data:', data); // Log the incoming data

    const sanitizedData = {
        email: data.email,
        name: data.name,
        password: data.password,
        phone_number: data.phone_number,
        role: data.role,
        status: data.status,
    };

    console.log('Sanitized data to be sent:', sanitizedData); // Log the sanitized data
    try {
        const response = await api.put('/auth/update/', sanitizedData, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log('Error response from server:', error.response); // Log error response
        throw error.response ? error.response.data : new Error('Failed to update account.');
    }
};

export const addContactMessage = async (data) => {
    try {
        const response = await api.post('/contacts/', data, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('An error occurred while adding the contact message.');
    }
};

export const getContactMessages = async () => {
    try {
        const response = await api.get('/contacts/', {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('An error occurred while fetching contacts.');
    }
};

export const getProjects = async () => {
    try {
        const response = await api.get('/projects/', {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('An error occurred while fetching projects.');
    }
};

export const addProject = async (data) => {
    try {
        const response = await api.post('/projects/', data, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('An error occurred while adding the project.');
    }
};

export const fetchProjectById = async (id) => {
    try {
        const response = await api.get(`/project/${id}/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response
            ? error.response.data
            : new Error('An error occurred while fetching the project.');
    }
};

export const updateProject = async (id, data) => {
    try {
        const response = await api.put(`/project/${id}/`, data, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response
            ? error.response.data
            : new Error('An error occurred while updating the project.');
    }
};

export const deleteProject = async (id) => {
    try {
        const response = await api.delete(`/project/${id}/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('An error occurred while deleting the project.');
    }
};