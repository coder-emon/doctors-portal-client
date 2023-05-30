import React from 'react';

const InfoCard = ({card}) => {
    const {title, description, img, bgClass}  = card;
    return (
        <div className={` ${bgClass} py-10 lg:px-5  rounded-md text-white flex flex-col lg:flex-row  justify-between`}>
            <div className='lg:w-1/4 flex justify-center'><img src={img} alt=""  /></div>
            <div className='px-5 lg:w-3/4'>
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;