import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllProfileofSkilled = () => {
    const [content, setContent] = useState([]);

    const handleFetch = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: 'https://huza-backend-app-api.onrender.com/api/profile/allProfile',
               
            });
            console.log(response.data.profile)
            setContent(response.data.profile);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 justify-center mt-32'>
                {content.map((item) => (
                    <div key={item.id} style={{ backgroundColor: 'white', margin: '10px', padding: '10px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', borderRadius: '5px' ,color:'black'}}>
                        <p style={{ width: '200px', height: '300px', objectFit: 'cover', borderRadius: '5px' }}>{item.documents.photo}</p>
                        <p>{item.firstName}</p>
                        <p>{item.lastName}</p>
                        <p>{item.email}</p>
                        <p>{item.Address.country}</p>
                        <p>{item.Address.province}</p>
                        <p>{item.Address.district}</p>
                        <p>{item.Address.sector}</p>
                        <p>{item.education.school}</p>
                        <p>{item.education.major}</p>
                        <p>{item.education.major}</p>
                        <p>{item.education.timeofstudy}</p>
                        <p>{item.education.didyoufinished}</p>
                        <p>{item.documents.certificate}</p>
                        <p>{item.documents.nationalID}</p>
                        <p>{item.documents.resume}</p>
                        
                    </div>
                ))}
            
        </div>
    );
}

export default AllProfileofSkilled

