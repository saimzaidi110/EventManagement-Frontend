import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { apiurl } from '../../../api';
import { useNavigate, useParams } from 'react-router-dom';

const RegisterExpo = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { username, email } = user;
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(id)
    const [formData, setFormData] = useState({
        companyName: '',
        productsServices: '',
        documents: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                `${apiurl}/api/expos/exporegisterrequest`,
                {
                    expoId: id,
                    username,
                    email,
                    ...formData,
                }
            );

            console.log(response.data);
            if (response.data.status) {
                toast.success('Expo registration request submitted successfully!');
                navigate('/dashboard/events');
            } else {
                toast.error('Failed to submit registration request.');
            }
        } catch (error) {
            alert('Error submitting the request.', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center mt-10">
            <div className="bg-white shadow-lg rounded-2xl max-w-md w-full p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Register for Expo
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">
                            Products/Services
                        </label>
                        <input
                            type="text"
                            name="productsServices"
                            value={formData.productsServices}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">
                            Required Documents (Links or Descriptions)
                        </label>
                        <input
                            type="text"
                            name="documents"
                            value={formData.documents}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full text-white py-2 px-4 rounded-lg transition ${loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                    >
                        {loading ? 'Submitting...' : 'Submit Registration'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterExpo;
