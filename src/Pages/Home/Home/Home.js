import React from 'react';
import Appointment from '../Appointment/Appointment';
import Contact from '../ContactFrom/Contact';
import DentalCare from '../DentalCare';
import Hero from '../Hero';
import Reviews from '../Reviews/Reviews';
import ServiceContainer from '../Services/ServiceContainer';
import InfoContainer from './InfoContainer/InfoContainer';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <InfoContainer></InfoContainer>
            <ServiceContainer></ServiceContainer>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;