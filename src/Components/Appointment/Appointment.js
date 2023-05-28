import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import MyBtn from '../MyBtn/MyBtn';
import  './Appointment.css'
const Appointment = () => {
    return (
        <div className='appointment-bg bg-cover'>
            <div className='flex items-center  flex-row-reverse justify-center container mx-auto '>
                <div className='w-5/12'>
                    <h4 className='text-primary font-bold text-xl'>Appointment</h4>
                    <h2 className='text-white  font-bold text-4xl font my-7'>Make an appointment Today</h2>
                    <p className='text-sm font-normal font-sm text-white mb-7'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                     <MyBtn >Getting Started</MyBtn>       
                </div>          
                <div className='w-5/12 flex justify-center'>
                    <img src={doctor} className='w-full mt-[-100px] ' alt="" />
                </div>          
            </div>
        </div>
    );
};

export default Appointment;