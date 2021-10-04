import React from 'react';
import Footer from './Footer';
import About from './section/About';
import Banner from './section/Banner';
import Blog from './section/Blog';
import ChooseUs from './section/ChooseUs';
import ClientLogo from './section/ClientLogo';
import Counter from './section/Counter';
import ProjectMind from './section/ProjectMind';
import Service from './section/Service';
import Testimonial from './section/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ClientLogo/>
            <Service/>
            <About/>
            <Counter/>
            <ChooseUs/>
            <Testimonial/>
            <Blog/>
            <ProjectMind/>
            <Footer/>
        </div>
    );
};

export default Home;