import React from 'react';
import contact from '../../assets/image/contact.jpg'

const Contact = () => {
    return (

        <div style={{ background: `url(${contact})` }} class="hero py-12 ">
            <div class="hero-content  flex-col lg:flex-row-reverse g-12 lg:w-[90%] mx-auto">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div class="card  flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" class="input input-bordered" />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <textarea className='input input-bordered h-[150px]' name="message" id="" cols="30" rows="10"></textarea>

                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                </svg>
                                Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;