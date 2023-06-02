import React from 'react';
import MyBtn from '../MyBtn/MyBtn';
import treatment from '../../assets/images/treatment.png'
const Exceptional = () => {
    return (
        <div>
            <div className='flex items-center flex-col-reverse lg:flex-row-reverse justify-center container mx-auto py-5 lg:py-36 px-5'>
                <div className='lg:w-5/12'>
                    <h2 className='text-accent  font-bold text-5xl font mb-3 mt-5'>Exceptional Dental Care, on Your Terms</h2>
                    <p className='text-sm my-5 lg:mb-5 text-accent'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                     <MyBtn >Getting Started</MyBtn>       
                </div>          
                <div className='lg:w-6/12 flex justify-center'>
                    <img src={treatment} className='w-[80%] rounded-md' alt="" />
                </div>          
            </div>
        </div>
    );
};

export default Exceptional;