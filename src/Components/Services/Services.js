import React from 'react';
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"
import ServiceItem from '../ServiceItem/ServiceItem';
const Services = () => {
    const servicesData = [
        {
            id: 1,
            title:"Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride,
        },
        {
            id: 2,
            title:"Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity,
        },
        {
            id: 3,
            title:"Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening,
        }
    ]
    return (
        <div>
            <div >
                <h3 className='text-primary font-bold uppercase text-center'>Our Services</h3>
                <h2 className='text-ancent font-normal text-4xl text-center'>Services We Provide</h2>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-5 lg:px-0 container mx-auto'> 
                {
                    servicesData.map(service => <ServiceItem key={service.id} service={service}></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;