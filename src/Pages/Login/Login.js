import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MyBtn from '../../Components/MyBtn/MyBtn';

const Login = () => {
    const {register, handleSubmit} = useForm()
    const [loginData, setLoginData] = useState({})
    console.log(loginData);
    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit((data) => setLoginData(data))} className='flex flex-col justify-center items-start'>
                <h1 className='text-center'>Login</h1>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register('email')}  className='bg-gray rounded px-4 py-2 w-full lg:w-96 focus:ring-primary focus:ring-2 outline-none'/>
                <input type="text" {...register('password')} />
                <MyBtn>Login</MyBtn>
            </form>
        </div>
    );
};

export default Login;