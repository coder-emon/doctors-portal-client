import React from 'react';

const ServiceItem = ({service}) => {
    const {title, img, description} = service
    return (
        <div className='shadow p-5 flex flex-col justify-center items-center'>
            <img src={img} alt="" />
            <h4 className='text-center my-3 font-semibold text-xl'>{title}</h4>
            <p className='text-center font-normal text-sm'>{description}</p>
        </div>
    );
};

export default ServiceItem;