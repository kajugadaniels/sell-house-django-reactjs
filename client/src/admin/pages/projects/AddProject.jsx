import React, { useState } from 'react';
import { Eye, Save } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addProject } from '../../api';

const CATEGORY_CHOICES = [
    { id: 'Residential', name: 'Residential' },
    { id: 'Commercial', name: 'Commercial' },
    { id: 'Selling', name: 'Selling' },
];

const TYPE_CHOICES = [
    { id: 'Own House', name: 'Own a House' },
    { id: 'Rent Apartment', name: 'Rent an Apartment' },
];

const AddProject = () => {
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
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...projectData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setProjectData({
            ...projectData,
            image: e.target.files[0],
        });
    };

    const handleAddProject = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        Object.keys(projectData).forEach(key => {
            if (key === 'image' && projectData[key]) {
                formData.append('image', projectData[key], projectData[key].name);
            } else {
                formData.append(key, projectData[key]);
            }
        });

        try {
            const response = await addProject(formData);
            console.log('Server response:', response); // Log the entire response for debugging
            if (response && response.message) {
                toast.success(response.message);
                navigate('/admin/projects');
            } else {
                throw new Error('Unexpected response format');
            }
        } catch (error) {
            console.error('Error adding project:', error);
            if (error.response) {
                console.error('Server error response:', error.response);
            }
            toast.error(error.message || 'An error occurred while adding the project.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="px-5 mt-16">
            <div className="container">
                <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                    <div className="col-span-12 sm:col-span-10 sm:col-start-2">
                        <div className="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
                            <div className="text-base font-medium group-[.mode--light]:text-white">
                                Add New Project
                            </div>
                            <div className="flex flex-col gap-x-3 gap-y-2 sm:flex-row md:ml-auto">
                                <Link to='/admin/projects' className="inline-flex items-center justify-center px-3 py-2 font-medium text-white transition duration-200 border rounded-md shadow-sm cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 bg-primary border-primary">
                                    <Eye className='mr-2 h-4 w-4 stroke-[1.3]' />
                                    Go Back
                                </Link>
                            </div>
                        </div>
                        <div className="mt-7">
                            <div className="flex flex-col box box--stacked">
                                <form onSubmit={handleAddProject} className="p-7">
                                    {/* Project Title & Category */}
                                    <div className="flex-col block pt-5 mt-5 sm:flex xl:flex-row xl:items-center">
                                        <div className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:mr-14 xl:w-64">
                                            <div className="text-left">
                                                <div className="flex items-center">
                                                    <div className="font-medium">Project Title & Category</div>
                                                    <div className="ml-2.5 rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-darkmode-300 dark:text-slate-400">Required</div>
                                                </div>
                                                <div className="mt-1.5 text-xs leading-relaxed text-slate-500/80 xl:mt-3">
                                                    Provide the unique title of the project and select its category.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 w-full mt-3 xl:mt-0">
                                            <div className="flex flex-col items-center md:flex-row">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={projectData.title}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter project title"
                                                    className="w-full text-sm transition duration-200 ease-in-out rounded-md shadow-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary"
                                                    required
                                                />
                                                <select
                                                    name="category"
                                                    value={projectData.category}
                                                    onChange={handleInputChange}
                                                    className="w-full text-sm transition duration-200 ease-in-out rounded-md shadow-sm border-slate-200 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary"
                                                    required
                                                >
                                                    <option value="">Select category</option>
                                                    {CATEGORY_CHOICES.map((category) => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <select
                                                    name="type"
                                                    value={projectData.type}
                                                    onChange={handleInputChange}
                                                    className="w-full text-sm transition duration-200 ease-in-out rounded-md shadow-sm border-slate-200 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary"
                                                    required
                                                >
                                                    <option value="">Select type</option>
                                                    {TYPE_CHOICES.map((type) => (
                                                        <option key={type.id} value={type.id}>
                                                            {type.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Image & Price */}
                                    <div className="flex-col block pt-5 mt-5 sm:flex xl:flex-row xl:items-center">
                                        <div className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:mr-14 xl:w-64">
                                            <div className="text-left">
                                                <div className="flex items-center">
                                                    <div className="font-medium">Project Image & Price</div>
                                                    <div className="ml-2.5 rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-darkmode-300 dark:text-slate-400">Required</div>
                                                </div>
                                                <div className="mt-1.5 text-xs leading-relaxed text-slate-500/80 xl:mt-3">
                                                    Upload an image for the project and its price
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 w-full mt-3 xl:mt-0">
                                            <div className="flex flex-col items-center md:flex-row">
                                                <input
                                                    type="file"
                                                    name="image"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="w-full text-sm transition duration-200 ease-in-out rounded-md shadow-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary"
                                                    required
                                                />
                                                <input
                                                    type="number"
                                                    name="price"
                                                    value={projectData.price}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Price"
                                                    className="w-full text-sm transition duration-200 ease-in-out rounded-md shadow-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Total Area & Living Space */}
                                    <div className="flex-col block pt-5 mt-5 sm:flex xl:flex-row xl:items-center">
                                        <div className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:mr-14 xl:w-64">
                                            <div className="text-left">
                                                <div className="flex items-center">
                                                    <div className="font-medium">Area & Space in M</div>
                                                    <div className="ml-2.5 rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-darkmode-300 dark:text-slate-400">Required</div>
                                                </div>
                                                <div className="mt-1.5 text-xs leading-relaxed text-slate-500/80 xl:mt-3">
                                                    Provide the total area size of the project and its living space size.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 w-full mt-3 xl:mt-0">
                                            <div className="flex flex-col items-center md:flex-row">
                                                <input
                                                    type="text"
                                                    name="total_area"
                                                    value={projectData.total_area}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Size"
                                                    className="w-full text-sm transition duration-200 ease-in-out rounded-md shadow-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary"
                                                    required
                                                />
                                                <input
                                                    type="text"
                                                    name="living_space"
                                                    value={projectData.living_space}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Space Size"
                                                    className="w-full text-sm transition duration-200 ease-in-out rounded-md shadow-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Location & Year */}
                                    <div className="flex-col block pt-5 mt-5 sm:flex xl:flex-row xl:items-center">
                                        <div className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:mr-14 xl:w-64">
                                            <div className="text-left">
                                                <div className="flex items-center">
                                                    <div className="font-medium">Location & Year Built</div>
                                                    <div className="ml-2.5 rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-darkmode-300 dark:text-slate-400">Required</div>
                                                </div>
                                                <div className="mt-1.5 text-xs leading-relaxed text-slate-500/80 xl:mt-3">
                                                    Provide the location of the project and the year it was built in.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 w-full mt-3 xl:mt-0">
                                            <div className="flex flex-col items-center md:flex-row">
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={projectData.location}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Location"
                                                    className="w-full text-sm transition duration-200 ease-in-out rounded-md shadow-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary"
                                                    required
                                                />
                                                <input
                                                    type="number"
                                                    onChange={handleInputChange}
                                                    name="year"
                                                    value={projectData.year}
                                                    placeholder="Enter Year"
                                                    className="w-full text-sm transition duration-200 ease-in-out rounded-md shadow-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Description */}
                                    <div className="flex-col block pt-5 mt-5 sm:flex xl:flex-row xl:items-center">
                                        <div className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:mr-14 xl:w-64">
                                            <div className="text-left">
                                                <div className="flex items-center">
                                                    <div className="font-medium">Description</div>
                                                    <div className="ml-2.5 rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-darkmode-300 dark:text-slate-400">Required</div>
                                                </div>
                                                <div className="mt-1.5 text-xs leading-relaxed text-slate-500/80 xl:mt-3">
                                                    Provide details of the project.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 w-full mt-3 xl:mt-0">
                                            <div className="flex flex-col items-center md:flex-row">
                                                <textarea
                                                    name="description"
                                                    value={projectData.description}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter description of the project"
                                                    className="w-full text-sm transition duration-200 ease-in-out rounded-md shadow-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary"
                                                    rows='5'
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button with Loading */}
                                    <div className="flex py-5 border-t border-slate-200/80 px-7 md:justify-end">
                                        <button
                                            type="submit"
                                            className={`inline-flex items-center justify-center w-full px-10 py-2 font-medium transition duration-200 border rounded-md shadow-sm cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 text-primary border-primary md:w-auto ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <svg className="w-5 h-5 mr-2 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                </svg>
                                            ) : (
                                                <Save className="-ml-2 mr-2 h-4 w-4 stroke-[1.3]" />
                                            )}
                                            {loading ? 'Saving...' : 'Add Project'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProject;
