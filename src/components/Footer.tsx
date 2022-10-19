import React, { useRef } from 'react';
import buk from "../images/buk-logo.svg";

const Footer: React.FC = () => {

    const footer = useRef<HTMLElement>(null!);

    window.onscroll = () => {

        const footerHead = footer.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if( footerHead < windowHeight ) {
            footer.current.classList.add("anim");
        } else {
            footer.current.classList.remove("anim");
        }
    }

    return (
        <footer ref={footer} className='mt-48 duration-1000 flex items-center justify-center flex-col'>
            <div>
                <img src={buk} alt="image" />
                <p className='text-xs mt-3 mb-6'>Copyright © Bukrida 2022, Exedox ® | all rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;