import React from 'react';
import heroImg from "../../assets/images/chair.png"
import "./Hero.css"
import MyBtn from '../MyBtn/MyBtn';
const Hero = () => {
    return (
        <div className="bg-img bg-no-repeat  bg-cover">
            <div className='flex  flex-col-reverse md:flex-row lg:flex-row items-center justify-center container mx-auto py-10 lg:py-36 px-5'>
                <div className='lg:w-7/12'>
                    <h2 className='text-ancent  font-bold text text-5xl font mb-6 pt-14 lg:pt-0 lg:pb-0 '>Your New Smile Starts Here</h2>
                    <p className='text-sm mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                     <MyBtn >Get Started</MyBtn>       
                </div>          
                <div className='lg:w-5/12'>
                    <img src={heroImg} className='w-full' alt="" />
                </div>          
            </div>
        </div>
    );
};

export default Hero;