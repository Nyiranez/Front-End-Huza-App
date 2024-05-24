import React, { useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
// import { useNavigate } from 'react-router-dom';

=======
import { useNavigate } from 'react-router-dom';
>>>>>>> 204610a43a47718d427c348842f93bc279162b24
export const Servicecreate = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
<<<<<<< HEAD
  // let navigate = useNavigate();
=======
  let navigate = useNavigate();
>>>>>>> 204610a43a47718d427c348842f93bc279162b24

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAdd = () => {
    const formData = new FormData();
    formData.append('category', category);
    formData.append('description', description);
    formData.append('photo', image);

    axios.post('https://huza-backend-app-api-1.onrender.com/api/service/createService', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log('Response data:', response.data);
      setMessage('Service successfully created');
<<<<<<< HEAD
      // navigate('/services');
=======
      setTimeout(() => navigate('/dashboard/services'), 2000);
    //   navigate('/services');
>>>>>>> 204610a43a47718d427c348842f93bc279162b24
      setIsSuccess(true);
    })
    .catch(err => {
      console.error('Error:', err.response ? err.response.data : err.message);
      setMessage('Error creating service');
      setIsSuccess(false);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Service</h2>
        <input
          type="text"
          value={category}
          placeholder="Enter category"
          onChange={(e) => setCategory(e.target.value)}
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="block w-full mb-4"
        />
        <textarea
          placeholder="Add description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full p-2 mb-4 border border-gray-300 rounded h-32"
        />
        <button
          onClick={handleAdd}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Add Service
        </button>
        {message && (
          <p className={`mt-4 text-center ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};
