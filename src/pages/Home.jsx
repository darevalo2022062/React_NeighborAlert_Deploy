import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/common/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { MainFunctionalities } from '../components/home/MainFunctionalities';

const Home = () => {

    return (
        <>
            <Navbar />
            <HeroSection />
            <MainFunctionalities />
            <Footer />
        </ >
    );
};

export default Home;
