import React from 'react';
import blog from '../../assets/image/blog.png'

const Blog = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <div>
                <img className='w-2/4 mx-auto ' src={blog} alt="" />
                <h1 class="lg:text-5xl uppercase text-3xl font-bold !text-primary  text-red-500 my-8"> <span className="text-secondary">comming</span> soon</h1>
            </div>

        </div>
    );
};

export default Blog;