import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import unique from '../../assets/image/unique.png'
import CardLoading from '../Shared/CardLoading';
import SinglePortfolio from './SinglePortfolio';

const Portfolio = () => {
    // const [portfolio, setPortfolio] = useState([])
    // useEffect(() => {
    //     fetch('https://abusayeed-ibrahim.herokuapp.com/projects')
    //         .then(res => res.json())
    //         .then(data => setPortfolio(data))
    // }, [])
    const { data: portfolio, isLoading } = useQuery('portfolio', () => fetch('https://abusayeed-ibrahim.herokuapp.com/projects').then(res => res.json()))
    if (isLoading) {
        return <CardLoading></CardLoading>
    }
    return (
        <div className='py-12 lg:w-[90%] lg:mx-auto  mx-5'>
            <h1 data-aos="zoom-in" data-aos-duration="1500" class="lg:text-5xl uppercase text-3xl font-bold !text-primary   my-8"> <span className="text-secondary">Latest</span> projects</h1>

            <div className='grid grid-cos-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    portfolio.map(portfolioItem => <SinglePortfolio portfolioItem={portfolioItem}></SinglePortfolio>)
                }


            </div>
        </div>
    );
};

export default Portfolio;