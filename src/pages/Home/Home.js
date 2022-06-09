import React from 'react';
import Contact from '../Shared/Contact';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div className="z-0">
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;