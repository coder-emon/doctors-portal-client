import React from 'react';
import Hero from '../../Components/Hero/Hero';
import InfoCards from '../../Components/InfoCards/InfoCards';
import Exceptional from '../../Components/Exceptional/Exceptional';
import Services from '../../Components/Services/Services';
import Appointment from '../../Components/Appointment/Appointment';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <div>
             <Hero></Hero>
             <InfoCards></InfoCards>
             <Services></Services>
             <Exceptional></Exceptional>
             <Appointment></Appointment>
             <Testimonials></Testimonials>
             <Contact></Contact>
        </div>
    );
};

export default Home;