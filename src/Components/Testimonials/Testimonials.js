import React from 'react';
import quote from '../../assets/icons/quote.svg';
import patientImg from '../../assets/images/people1.png'
import TestimonialItem from '../TestimonialItem/TestimonialItem';
const Testimonials = () => {
    const testimonialData = [
        {
            id:1,
            name:"Winson Herry",
            description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            country:"California",
            img:patientImg
        },
        {
            id:2,
            name:"Winson Herry",
            description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            country:"California",
            img:patientImg
        },
        {
            id:3,
            name:"Winson Herry",
            description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            country:"California",
            img:patientImg
        },
    ]
    return (
        <div className='py-20 px-5'>
            <div className='container mx-auto flex justify-between items-center lg:items-start'>
                <div>
                    <h4 className='text-secondary font-bold text-xl'>Testimonial</h4>
                    <h2 className='text-ancent  font-normal text-4xl font '>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className='w-32' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container pt-10 lg:pt-36 lg:pb-10 mx-auto gap-8 lg:px-10'>
                {
                    testimonialData.map(testimonial => <TestimonialItem key={testimonial.id} testimonial={testimonial}></TestimonialItem>)
                }
            </div>
        </div>
    );
};

export default Testimonials;