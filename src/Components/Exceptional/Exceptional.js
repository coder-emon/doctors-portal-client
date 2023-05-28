import React from 'react';
import MyBtn from '../MyBtn/MyBtn';
import treatment from '../../assets/images/treatment.png'
const Exceptional = () => {
    return (
        <div>
            <div className='flex items-center gap- flex-row-reverse justify-center container mx-auto py-36'>
                <div className='w-5/12'>
                    <h2 className='text-ancent  font-bold text-5xl font mb-3'>Exceptional Dental Care, on Your Terms</h2>
                    <p className='text-sm mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                     <MyBtn >Getting Started</MyBtn>       
                </div>          
                <div className='w-6/12 flex justify-center'>
                    <img src={treatment} className='w-[80%]' alt="" />
                </div>          
            </div>
        </div>
    );
};

export default Exceptional;