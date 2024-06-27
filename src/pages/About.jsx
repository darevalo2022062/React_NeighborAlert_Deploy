import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/common/Footer';
import { HeroSection } from '../components/about/HeroSection';
import { MissionVision } from '../components/about/MissionVision';

const About = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <MissionVision />
            <Footer />
        </>
    )
}

export default About
