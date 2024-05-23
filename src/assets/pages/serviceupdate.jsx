import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export const Update = () => {
  const [photo, setPhoto] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState('');

  let { proId } = useParams();
  const navigate = useNavigate();

  const updateService = (id) => {
    let updatedService = new FormData();
    if (photo) updatedService.append('photo', photo);
    updatedService.append('category', category);
    updatedService.append('description', description);

    // Log FormData values
    for (let pair of updatedService.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    axios.put(`https://huza-backend-app-api-1.onrender.com/api/service/updateService/${id}`, updatedService)
      .then((resp) => {
        console.log('Response from update:', resp.data);
        setSuccessMessage("Service successfully updated");
        // Optionally, you can navigate back to the services list after a delay
        setTimeout(() => navigate('/dashboard/services'), 2000); // Navigate after 2 seconds
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <form>
        <label>Photo</label><br />
        <input type="file" placeholder='Upload photo'
          className='w-96 h-12 border-2 pl-2'
          onChange={e => setPhoto(e.target.files[0])}></input><br />

        <label>Category</label><br />
        <input type="text" placeholder='Enter category' value={category}
          className='w-96 h-12 border-2 pl-2'
          onChange={e => setCategory(e.target.value)}></input><br />

        <label>Description</label><br />
        <input type="text" placeholder='Enter description' value={description}
          className='w-96 h-12 border-2 pl-2'
          onChange={e => setDescription(e.target.value)}></input><br />

        <button type="button" className='w-96 h-12 border-2 mt-4 bg-black text-white'
          onClick={() => updateService(proId)}>Save Changes</button>
      </form>
      {successMessage && (
        <p className='mt-4 text-green-600'>
          {successMessage}
        </p>
      )}
    </div>
  );
}