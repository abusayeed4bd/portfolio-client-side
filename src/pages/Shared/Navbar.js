import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png'

const Navbar = () => {
    const navItem = <>
        <li><Link className='font-semibold text-lg' to='/'>Home</Link></li>
        <li><Link className='font-semibold text-lg' to='/about'>About</Link></li>
        <li><Link className='font-semibold text-lg' to='/blog'>Blog</Link></li>
        <li><Link className='font-semibold text-lg' to='/contact'>Contact</Link></li>
    </>
    return (
        <div class="navbar bg-base-100 sticky top-0 shadow-lg bg-base-100 z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to="/" ><img src={logo} alt="" /></Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
            <div class="navbar-end">
                <Link className='btn btn-primary py-0 text-white' to="/contact" >hire me</Link>
            </div>
        </div>
    );
};

export default Navbar;