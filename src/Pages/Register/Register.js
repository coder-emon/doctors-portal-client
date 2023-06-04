import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth.Context';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { signUp, setLoading, updateUser, setUser,googleSignIn,user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(user);
    const handleRegister =  (data) => {
        console.log(data)
        signUp(data.email, data.password)
            .then(async (result) => {
                const user =  result.user
                updateUser(data.name)
                .then(() => {
                    toast.success("user registered successfully")
                })
                .catch((err) => {
                    console.error(err.message)
                    toast.error(err.message)
                })
                setUser(user)
                console.log(user)
            })
            .catch((err) => {
                console.error(err.message)
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
            <form onSubmit={handleSubmit(handleRegister)} className='flex flex-col justify-center items-center shadow-md p-10 rounded-md gap-4'>
                <h1 className='text-center text-xl text-[#000000] font-bold '>SignUp</h1>
                <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" {...register('name')} className='border-2 border-[#CFCFCF] focus:border-transparent rounded px-4 py-2 w-full lg:w-96 focus:ring-primary focus:ring-2 outline-none' />
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email')} className='border-2 border-[#CFCFCF] focus:border-transparent rounded px-4 py-2 w-full lg:w-96 focus:ring-primary focus:ring-2 outline-none' />
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="password">Password</label>
                    <input type="text" id='password' {...register('password', { pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/, message: "At least 1 uppercase 1 lowercase letter 1 number and 1 special charecter required" } })} className='border-2 border-[#CFCFCF] focus:border-transparent rounded px-4 py-2 w-full lg:w-96 focus:ring-primary focus:ring-2 outline-none' />
                    <label htmlFor='forget-modal' className='text-xs cursor-pointer' >Forget Password</label>
                </div>
                {
                    errors.password && <p>{errors.password.message}</p>
                }
                <button className='w-full bg-accent text-white py-2 rounded'>Signup</button>
                <div className='text-sm'>
                    <span>Already have an account</span>
                    <Link to="/login" className='text-secondary'> Please Login</Link>
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

export default Register;