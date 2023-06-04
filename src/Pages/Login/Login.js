import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth.Context';
import { toast } from 'react-hot-toast';

const Login = () => {
    const {signIn , setLoading, setUser,googleSignIn} = useContext(AuthContext)
    const {register, handleSubmit} = useForm()
    
    const handleLogin = (data) => {
        signIn(data.email, data.password)
        .then((data)=>{
            const user = data.user
            setUser(user)
            toast.success("Login successful")
        })
        .catch((err)=>{
            console.error(err)
            toast.error(err.message)
        })
        setLoading(false)
    }
    const handleGoogleSingIn = () => {
        googleSignIn()
            .then((data) => {
                const user = data.user
                setUser(user)
                toast.success("Login successful")
            })
            .catch((err) => {
                console.error(err)
                toast.error(err.message)
            })
            setLoading(false)
    }
    return (
        <div className='flex justify-center items-center py-32'>
            <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col justify-center items-center shadow-md p-10 rounded-md gap-4'>
                <h1 className='text-center text-xl text-[#000000] font-bold '>Login</h1>
                <div className='flex flex-col items-start gap-2'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register('email')}  className='border-2 border-[#CFCFCF] focus:border-transparent rounded px-4 py-2 w-full lg:w-96 focus:ring-primary focus:ring-2 outline-none'/>
                </div>
                <div className='flex flex-col items-start gap-2'>
                <label htmlFor="password">Password</label>
                <input type="passwors" id='password' {...register('password')} className='border-2 border-[#CFCFCF] focus:border-transparent rounded px-4 py-2 w-full lg:w-96 focus:ring-primary focus:ring-2 outline-none'/>
                <span className='text-xs'>Forget Password</span>
                </div>
                <button className='w-full bg-accent text-white py-2 rounded'>Login</button>
                <div className='text-sm'>
                    <span>New to Doctors Portal?</span>
                    <Link to="/login/register" className='text-secondary'> Create new  account</Link>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <span className='w-5/12 h-[1px] bg-[#CFCFCF]   block'></span>
                    <span>OR</span>
                    <span className='w-5/12 h-[1px] bg-[#CFCFCF]   block'></span>
                </div>
                <span className='w-full border-2 border-accent text-accent py-2 rounded uppercase block text-center cursor-pointer'  onClick={handleGoogleSingIn}>Continue With Google</span>
            </form>
        </div>
    );
};

export default Login;