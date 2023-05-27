import React from 'react';
import clock from  '../../assets/icons/clock.svg'
import location from  '../../assets/icons/marker.svg'
import phone from  '../../assets/icons/phone.svg'
import InfoCard from '../InfoCard/InfoCard';
const InfoCards = () => {
    const cardsData = [
        {
            id: 1,
            title:"Opening Hours",
            description:"Lorem Ipsum is simply dummy text of the pri",
            img:clock,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        },
        {
            id: 1,
            title:"Visit our location",
            description:"Brooklyn, NY 10036, United States",
            img:location,
            bgClass:"bg-ancent"
        },
        {
            id: 1,
            title:"Contact us now",
            description:"+000 123 456789",
            img:phone,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-24   container mx-auto'>
            {cardsData.map(card => <InfoCard card={card} key={card.id}></InfoCard>)}
        </div>
    );
};

export default InfoCards;