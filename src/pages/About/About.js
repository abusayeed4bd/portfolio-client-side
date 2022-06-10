import React from 'react';
import about from '../../assets/image/about.jpg'

const About = () => {
    return (
        <section>
            <h1 class="lg:text-5xl uppercase text-3xl font-bold !text-primary  text-red-500 my-5"> about <span className="text-secondary">me</span></h1>
            <div class="hero  bg-base-100">

                <div class="hero-content flex-col lg:flex-row">
                    <img src={about} class="max-w-sm rounded-lg shadow-2xl" alt='abusayeed' />
                    <div className="lg:text-left lg:ml-5">
                        <h3 className="text-secondary text-3xl font-bold">I am</h3>
                        <h1 class="text-3xl lg:text-5xl text-primary font-bold">Abu Sayeed Muhammd Ibrahim</h1>
                        <p class="py-6 text-xl text-slate-500">Self motivated and creative web developer and seo expert who is passionate about web development and enjoy working on projects that challenge me to think outside the box. I ensure 100% client satisfaction and always like to update me with new trends and technology</p>

                        <div className="text-left">
                            <h2 className="text-secondary text-center text-4xl font-bold">
                                Skills:
                            </h2>
                            <p className='text-xl text-slate-500'><strong className='text-secondary'>Expertise:</strong> HTML, CSS, Javascript, ES6, React js, React router, Bootstrap, Tailwind CSS, Daisy UI</p>
                            <p className='text-xl text-slate-500'><strong className='text-secondary'>Comfotrable:</strong> Node js, Express js, MongoDB, Firebase</p>
                            <p className='text-xl text-slate-500'><strong className='text-secondary'>Familiar:</strong> Recharts, React Native, NPM, Stripe payment</p>
                            <p className='text-xl text-slate-500'><strong className='text-secondary'>Tools:</strong> Github, Vs code, Chrome Dev Tool, Netlify, Figma, Heroku</p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;