import React, { useState } from 'react';
import { userSchema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const User = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema),
    });

    const createUser = () => {
        // console.log(data); // Log the form data to the console

      axios({
            method: 'POST',
            url: "https://huza-backend-app-api.onrender.com/api/allUsers/create",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber:phoneNumber,
                role: role,
                password:password,
                confirmpassword: confirmpassword,
               
            },
        }).then(response => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
    };
  

    return (
        <div className='flex flex-col items-center mt-10'>
            <form onSubmit={handleSubmit(createUser)} className='bg-blue-400 h-fit w-96 flex flex-col items-center mt-8'>
                <input
                    type="text"
                    placeholder='First Name'
                    {...register("firstName")}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='mt-4 pl-4 pb-2 pt-2'
                />
                <p className='text-red-600'>{errors.firstName?.message}</p>

                <input
                    type="text"
                    placeholder='Last Name'
                    {...register("lastName")}
                    onChange={(e) => setLastName(e.target.value)}
                    className='mt-4 pl-4 pb-2 pt-2'
                />
                <p className='text-red-600'>{errors.lastName?.message}</p>

                <input
                    type="text"
                    placeholder='Email'
                    {...register("email")}
                    onChange={(e) => setEmail(e.target.value)}
                    className='mt-4 pl-4 pb-2 pt-2'
                />
                <p className='text-red-600'>{errors.email?.message}</p>

                <input
                    type="text"
                    placeholder='Phone Number'
                    {...register("phoneNumber")}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className='mt-4 pl-4 pb-2 pt-2'
                />
                <p className='text-red-600'>{errors.phoneNumber?.message}</p>
                <select value={role} onChange={(e)=> setRole(e.target.value)}>
                    <option value="">admin</option>
                    <option value="user">user</option>
                    <option value="skilled">skilled</option>
                </select>
                <p className='text-red-600'>{errors.role?.message}</p>
                {/* {} */}
                <input
                    type="password"
                    placeholder='Password'
                    {...register("password")}
                    onChange={(e) => setPassword(e.target.value)}
                    className='mt-4 pl-4 pb-2 pt-2'
                />
                <p className='text-red-600'>{errors.password?.message}</p>

                <input
                    type="password"
                    placeholder='Confirm Password'
                    {...register("confirmPassword")}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='mt-4 pl-4 pb-2 pt-2'
                />
                  <p className='text-red-600'>{errors.confirmpassword && "Password should match"}</p>

                <button type="submit" className='mt-8 bg-green-700 text-white px-4 py-2'>Create User</button>
            </form>
        </div>
    );
};
