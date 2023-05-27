import React from 'react';
import heroImg from "../../assets/images/chair.png"
import "./Hero.css"
import MyBtn from '../MyBtn/MyBtn';
const Hero = () => {
    return (
        <div className="bg-img bg-no-repeat  bg-cover">
            <div className='flex items-center justify-center container mx-auto py-36'>
                <div className='w-7/12'>
                    <h2 className='text-ancent  font-bold text-5xl font mb-3'>Your New Smile Starts Here</h2>
                    <p className='text-sm mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                     <MyBtn >Getting Started</MyBtn>       
                </div>          
                <div className='w-5/12'>
                    <img src={heroImg} className='w-full' alt="" />
                </div>          
            </div>
        </div>
    );
};

export default Hero;