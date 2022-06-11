import React from 'react';
import contact from '../../assets/image/contact.jpg'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
    const SERVICE_ID = "service_f2aadxm";
    const TEMPLATE_ID = "template_xuu0dsf";
    const USER_ID = "FExwKcoHjdAh87t7c";

    const handleMessageSend = e => {

        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    // text: error.text,
                })
            });
        e.target.reset()
    }

    return (

        <div id='contact' style={{ background: `url(${contact}) no-repeat center center` }} class="hero py-8 my-0">

            <div class="hero-content  flex-col lg:flex-row-reverse g-12 lg:w-[90%] mx-auto">


                <div data-aos="zoom-in" data-aos-duration="700" class="card  flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100 lg:w-50">
                    <h1 class="lg:text-5xl uppercase  text-xl font-bold !text-primary  text-red-500 pt-4"><span className='text-secondary'> Send a</span> message</h1>
                    <div class="card-body">
                        <form onSubmit={handleMessageSend}>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" class="input input-bordered" required />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea name="message" className='input input-bordered h-[150px]' id="" cols="30" rows="10" required></textarea>

                            </div>
                            <div class="form-control mt-6">
                                <input type="submit" className='btn btn-primary text-white' value='send message' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;