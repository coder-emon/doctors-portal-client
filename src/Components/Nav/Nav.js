import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
const Nav = () => {
    const [isDisplay, setIsDisplay]= useState(false)
    return (
        <div>
            <div className='flex justify-between items-center container mx-auto py-2 px-4 text-accent'>
                <h1 className='w-2/6 '><Link to="/">Doctors Portal</Link></h1>
                <div className='w-4/6 flex justify-end relative'>
                    {isDisplay ?  <RxCross2 className='text-3xl block cursor-pointer lg:hidden'   onClick={()=> setIsDisplay(!isDisplay)}></RxCross2> :
                   <IoIosMenu className='text-3xl block cursor-pointer lg:hidden' onClick={()=> setIsDisplay(!isDisplay)}></IoIosMenu>}
                    {
                        isDisplay && <ul className='absolute top-7 right-3 bg-slate-300 p-4 rounded flex-col  lg:hidden gap-2  items-center'> 
                        <li className='p-2 bg-[#3A4256] rounded text-white'>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/appointment">Appointment</Link>
                        </li>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                        <li>
                            <Link to="contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="login">Login</Link>
                        </li>
                    </ul>
                    }
                    <ul className='hidden flex-col lg:flex-row lg:flex gap-2 lg:justify-end items-center'> 
                        <li className='p-2 bg-[#3A4256] rounded text-white'>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="appointment">Appointment</Link>
                        </li>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                        <li>
                            <Link to="contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;