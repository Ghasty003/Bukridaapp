import React, { useEffect, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import bukrida from "../images/Bukrida.png";

const Header:React.FC = () => {

    const h3 = useRef<HTMLHeadingElement >(null!);

    useEffect(() => {
        // h3.current?.getBoundingClientRect().top;
    }, [])
    
    setTimeout(() => {
        if( h3.current.classList.contains("w-0")) {
            h3.current.classList.replace("w-0", "w-[100%]");
        }
    }, 2000);

    return (
        <div className='mt-[130px] sm:flex-row flex-col flex items-center justify-center gap-10'>
            <img src={bukrida} alt="header" className='w-60 rounded-2xl bukrida' />
            <div className='flex flex-col items-center sm:items-start gap-5 sm:text-start text-center'>
                <h1 className='sm:text-8xl text-4xl head'>Bukrida</h1>
                
                <h3 ref={h3} className='italic w-0 transition-all duration-1000 whitespace-nowrap overflow-hidden text-sm sm:text-sm'>Harness The Value Of Authentic Contents🚀</h3>
    
                <button className='uppercase p-3 text-xs rounded bg-blue-700 w-fit'><a href="#join">Join the waitlist</a></button>
            </div>
        </div>
    );
}

export default Header;