import React from 'react';
import banner from '../../assets/image/banner.jpg'
import bannerSm from '../../assets/image/banner-sm.jpg'
import Typewriter from 'typewriter-effect';
import resume from '../../assets/resume.pdf'

const Banner = () => {
    const imageUrl = window.innerWidth >= 650 ? banner : bannerSm;
    return (
        <div style={{ background: `url(${banner})` }} class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="">
                    <h1 class="text-4xl  text-base-100">Hi, I am</h1>
                    <h1 class="lg:text-7xl  text-5xl font-black !text-primary uppercase py-5 text-red-500 ">Abu Sayeed Ibrahim</h1>
                    <h1 class="text-3xl  text-base-100 inline-block">
                        <Typewriter class="inline-block"
                            options={{
                                strings: ['I am a Front-end Developer', 'I work with javascript', 'react js', 'mongo db', 'and', 'express js'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    </h1>
                    {/* buttons */}
                    <div className="py-4">
                        {/* <button class="btn btn-primary mx-2">Contact Me
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                        </button> */}
                        <a href={resume} download class="btn btn-primary mx-2">

                            Get my resume
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Banner;