import React from 'react';
import react from '../../assets/icon/reactjs.png'
import mongo from '../../assets/icon/mongo.png'
import github from '../../assets/icon/github.png'
import html from '../../assets/icon/html.png'
import css from '../../assets/icon/css.png'
import firebase from '../../assets/icon/firebase.png'
import node from '../../assets/icon/nodejs.png'
import express from '../../assets/icon/express.png'

const IconSlider = () => {
    return (
        <div>
            <h1 class="lg:text-5xl uppercase text-3xl font-bold !text-primary  text-red-500 my-8"> <span className="text-secondary">Used</span> Technology</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 py-12 lg:w-[90%] lg:mx-auto  mx-5'>
                <div data-aos="zoom-in" data-aos-duration="700" className='h-36 w-36 rounded-xl shadow-xl mx-auto'>
                    <img className='w-100 mx-auto' src={react} alt="" />
                    <p className="text-xl text-slate-500 text-bold">React js</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="700" className='h-36 w-36 rounded-xl shadow-xl mx-auto'>
                    <img className='w-100 mx-auto' src={mongo} alt="" />
                    <p className="text-xl text-slate-500 text-bold">MongoDB</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="700" className='h-36 w-36 rounded-xl shadow-xl mx-auto'>
                    <img className='w-100 mx-auto' src={html} alt="" />
                    <p className="text-xl text-slate-500 text-bold">HTML</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="700" className='h-36 w-36 rounded-xl shadow-xl mx-auto'>
                    <img className='w-100 mx-auto' src={css} alt="" />
                    <p className="text-xl text-slate-500 text-bold">CSS</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="700" className='h-36 w-36 rounded-xl shadow-xl mx-auto'>
                    <img className='w-100 mx-auto' src={firebase} alt="" />
                    <p className="text-xl text-slate-500 text-bold">firebase</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="700" className='h-36 w-36 rounded-xl shadow-xl mx-auto'>
                    <img className='w-100 mx-auto' src={github} alt="" />
                    <p className="text-xl text-slate-500 text-bold">Github</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="700" className='h-36 w-36 rounded-xl shadow-xl mx-auto'>
                    <img className='w-100 mx-auto' src={node} alt="" />
                    <p className="text-xl text-slate-500 text-bold">Node js</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="700" className='h-36 w-36 rounded-xl shadow-xl mx-auto'>
                    <img className='w-100 mx-auto' src={express} alt="" />
                    <p className="text-xl text-slate-500 text-bold">Express js</p>
                </div>
            </div>
        </div>
    );
};

export default IconSlider;