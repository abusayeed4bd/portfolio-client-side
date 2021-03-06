import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const SinglePortfolio = ({ portfolioItem }) => {
    const { _id, img, name, cartegory, technologies, description, live, client, server } = portfolioItem;

    return (
        <div data-aos="zoom-in" data-aos-duration="700" class="card !shadow card-compact bg-base-100 h-[400px] !hover:shadow-xl mx-auto">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body  text-left relative">
                <h2 class="card-title text-primary text-2xl font-bold uppercase">{name}</h2>

                <div className="grid grid-cols-4 gap-3">
                    {
                        technologies.map(c => <span className='bg-[#fecaca] fw-bold mr-1  text-primary text-center rounded px-1'>{c}</span>)
                    }
                </div>
                <h3 className='text-xl text-secondary'>{cartegory}</h3>
                {/* <span className='!font-xl text-secondary'>{description}</span> */}
                <div class=" flex justify-end absolute bottom-0">
                    {/* <a href={live} target="_blank" rel='noreferrer' class="btn btn-link text-sm">Live </a > */}
                    <Link to={`/project/${_id}`} class="btn btn-primary btn-link w-full text-sm">See Details </Link >
                    {/* <a href={client} target="_blank" rel='noreferrer' class="btn btn-link  text-sm">Client side</a >
                    {server && <a href={server} target="_blank" rel='noreferrer' class="btn btn-link  text-sm">Server side </a >} */}
                </div>
            </div>
        </div>
    );
};

export default SinglePortfolio;