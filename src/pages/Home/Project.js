import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import CardLoading from './../Shared/CardLoading';

const Project = () => {
    const { id } = useParams();
    const { data: project, isLoading } = useQuery('project', () => fetch(`http://localhost:5000/project/${id}`).then(res => res.json()));
    if (isLoading) {
        return <CardLoading></CardLoading>;
    }
    const { img, name, cartegory, description } = project;
    console.log(project);

    return (
        <div class="card lg:w-[70%] mx-auto rounded-none bg-base-100 lg:my-5">
            <figure><img src={img} alt="Shoes" /></figure>
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