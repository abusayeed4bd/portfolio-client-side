import React from 'react';
import Contact from '../Shared/Contact';

import Banner from './Banner';
import IconSlider from './IconSlider';
import Portfolio from './Portfolio';
import Services from './Services';

const Home = () => {
    return (
        <div className="z-0 ">
            <Banner></Banner>
            <Services></Services>
            <Portfolio></Portfolio>
            <IconSlider></IconSlider>
            <Contact></Contact>

        </div>
    );
};

export default Home;