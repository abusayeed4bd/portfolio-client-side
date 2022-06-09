import React from 'react';

const SinglePortfolio = ({ portfolioItem }) => {
    const { img, name, cartegory, technologies, description, live, client, server } = portfolioItem;
    return (
        <div class="card !shadow card-compact bg-base-100 h-[470px] shadow-xl mx-auto">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body  text-left relative">
                <h2 class="card-title text-primary text-2xl font-bold uppercase">{name}</h2>
                <h3>{cartegory}</h3>
                <div className="grid grid-cols-4 gap-3">
                    {
                        technologies.map(c => <span className='bg-[#fecaca] fw-bold mr-1  text-primary text-center rounded px-1'>{c}</span>)
                    }
                </div>
                <span className='!font-xl text-secondary'>{description}</span>
                <div class="card-actions justify-evenly absolute bottom-0">
                    <a href={live} target="_blank" rel='noreferrer' class="btn btn-link text-md">Live </a >
                    <a href={client} target="_blank" rel='noreferrer' class="btn btn-link  text-md">Client side</a >
                    {server && <a href={server} target="_blank" rel='noreferrer' class="btn btn-link  text-md">Server side </a >}
                </div>
            </div>
        </div>
    );
};

export default SinglePortfolio;