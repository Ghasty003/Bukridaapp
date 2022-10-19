import React from 'react';
import logo from "../images/buk-logo.svg";

const Nav: React.FC = () => {
    return (
        <div className='ml-10 mt-4 nav'>
            <a href="#" className='flex gap-1 items-end text-2xl'>
            <img src={logo} alt="logo" className='w-10' />
            <span>Bukrida</span>
            </a>
        </div>
    );
}

export default Nav;