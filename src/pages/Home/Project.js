import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import CardLoading from './../Shared/CardLoading';
import Loading from '../Shared/Loading';

const Project = () => {
    const { id } = useParams();
    const { data: project, isLoading } = useQuery('project', () => fetch(`https://abusayeed-ibrahim.herokuapp.com/project/${id}`).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>;
    }
    const { img, name, cartegory, description, client, live, server } = project;
    console.log(project);

    return (
        <div class="card lg:w-[70%] mx-auto rounded-none bg-base-100 lg:my-5 ">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className='grid  grid-cols-3'>
                <a className='btn lg:btn-primary btn-link lg:w-1/2 mx-auto text-primary  lg:text-white m-2' href={client} >Client side code</a>
                <a className='btn lg:btn-primary btn-link lg:w-1/2 mx-auto text-primary  lg:text-white m-2' href={server} >Server side code</a>
                <a className='btn lg:btn-primary btn-link lg:w-1/2 mx-auto text-primary  lg:text-white m-2' href={live} >Live Link</a>
            </div>
            <div class="card-body text-left">
                <h1 class="lg:text-5xl uppercase text-3xl font-bold !text-primary   lg:text-left">{name}</h1>
                <h2 className="lg:text-4xl text-3xl folt-bold lg:text-left text-secondary">
                    {cartegory}
                </h2>
                <p className="text-xl text-bold">{description}</p>
            </div>
        </div>
    );
};

export default Project;