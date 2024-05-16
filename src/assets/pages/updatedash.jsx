import React , {useState} from 'react';



export const Updatedash = () => {

    const [fullName, setFirstName] = useState("");
    const [email, setEmai] = useState("");
    const [role, setRole] = useState("");

    return (
        <div className='flex flex-col items-center mt-24'>
  
            <form  className='bg-blue-400 h-fit w-96 flex flex-col items-center mt-8'>
                <input type="text" placeholder='First Name'  onChange={(e) => { setFirstName(e.target.value) }} className='mt-4 pl-4 pb-2 pt-2' />
                <input type="text" placeholder='Email'  onChange={(e) => { setEmai(e.target.value) }} className='mt-4 pl-4 pb-2 pt-2' />
                

                <input type="text" placeholder='Role'  onChange={(e) => { setRole(e.target.value) }} className='mt-4 pl-4 pb-2 pt-2' />
              

                

                <button type="submit" className='mt-8 bg-green-700 text-white px-4 py-2'>Create User</button>
            </form>
        </div>
    );
};