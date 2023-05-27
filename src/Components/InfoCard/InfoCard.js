import React from 'react';

const InfoCard = ({card}) => {
    const {title, description, img, bgClass}  = card;
    return (
        <div className={` ${bgClass} py-10 px-5 rounded-md text-white flex items-center justify-between`}>
            <div className='w-1/4'><img src={img} alt=""  /></div>
            <div className='w-3/4'>
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;