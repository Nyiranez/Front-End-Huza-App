import React, { useState } from 'react';
import { userSchema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const User = () => {
    const [firstname, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema),
    });

    const createUser = () => {

        const User = { firstname, lastName, email, phoneNumber, role, password };
        console.log(User)
        axios({
            method: 'POST',
            url: "https://huza-backend-app-api-9.onrender.com/api/user/create",
            headers :{
                "Content-Type": "application/json",
            }, 
            data: {
                firstname : firstname,
                lastName : lastName,
                email : email,
                phoneNumber: phoneNumber,
                role : role,
                password : password,


            },
        }).then(response => {
            console.log(response.data)
        }).catch((err)=>{
 console.log(err);
        })

    };

    return (
        <div className='flex flex-col items-center mt-10'>
  
            <form onSubmit={handleSubmit(createUser)} className='bg-blue-400 h-fit w-96 flex flex-col items-center mt-8'>
                <input type="text" placeholder='First Name' name="firstName" {...register("firstName")} onChange={(e) => { setFirstName(e.target.value) }} className='mt-4 pl-4 pb-2 pt-2' />
                <p className='text-red-600'>{errors.firstName?.message}</p>

                <input type="text" placeholder='Last Name' name="lastName" {...register("lastName")} onChange={(e) => { setLastName(e.target.value) }} className='mt-4 pl-4 pb-2 pt-2' />
                <p className='text-red-600'>{errors.lastName?.message}</p>

                <input type="text" placeholder='Email' name="email" {...register("email")} onChange={(e) => { setEmail(e.target.value) }} className='mt-4 pl-4 pb-2 pt-2' />
                <p className='text-red-600'>{errors.email?.message}</p>

                <input type="text" placeholder='Phone Number' name="phoneNumber" {...register("phoneNumber")} onChange={(e) => { setPhoneNumber(e.target.value) }} className='mt-4 pl-4 pb-2 pt-2' />
                <p className='text-red-600'>{errors.phoneNumber?.message}</p>

                <input type="text" placeholder='Role' name="role" {...register("role")} onChange={(e) => { setRole(e.target.value) }} className='mt-4 pl-4 pb-2 pt-2' />
                <p className='text-red-600'>{errors.role?.message}</p>

                <input type="password" placeholder='Password' name="password" {...register("password")} onChange={(e) => { setPassword(e.target.value) }} className='mt-4 pl-4 pb-2 pt-2' />
                <p className='text-red-600'>{errors.password?.message}</p>

                <button type="submit" className='mt-8 bg-green-700 text-white px-4 py-2'>Create User</button>
            </form>
        </div>
    );
};