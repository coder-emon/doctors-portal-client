import React from 'react';
import MyBtn from '../MyBtn/MyBtn';

const Contact = () => {
    return (
        <div className='appointment-bg py-16'>
            <div className='pb-6 pt-2'>
                <h4 className='text-secondary font-bold text-center text-xl'>Contact Us</h4>
                <h2 className='text-white  font-normal text-center text-4xl font '>Stay connected with us</h2>
            </div>
            <div>
                <form className='flex flex-col items-center justify-center gap-5 '>
                    <input type="email" placeholder='Email Address' className='bg-white rounded px-2 py-1 w-96 focus:ring-primary focus:ring-2 ' />
                    <input type="text" placeholder='Subject' className='bg-white rounded px-2 py-1 w-96' />
                    <textarea className='bg-white rounded px-2 py-1 w-96 ' placeholder='Your Message' rows={4}></textarea>
                    <MyBtn>Submit</MyBtn>
                </form>
            </div>
        </div>
    );
};

export default Contact;