import React from 'react';

const TestimonialItem = ({testimonial}) => {
    const {name, description, img, country} = testimonial
    return (
        <div className='shadow rounded-md p-8'>
            <p className='text-sm'>{description}</p>
            <div className='flex gap-3 justify-start items-center pt-8'>
                <div className='w-1/6'>
                <img src={img} alt="" className='w-44 ring-secondary rounded-full ring-2'/>
                </div>
                <div className='w-5/6'>
                    <h5 className='text-ancent font-semibold text-xl'>{name}</h5>
                    <span className='font-normal text-sm'>{country}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;