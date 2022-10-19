import React, { useRef } from 'react';
import buk1 from "../images/buk-1.svg";
import buk2 from "../images/buk-2.svg";
import buk3 from "../images/buk-3.svg";
import buk4 from "../images/buk-4.svg";

interface Props {
    text: string;
    img: string;
    description: string;
}


const Div: React.FC<Props> = ({ text, img, description }) => {

    const div = useRef<HTMLDivElement>(null!);

    window.addEventListener("scroll", () => {
        const divHead = div.current.getBoundingClientRect().top;
        const winHeight = window.innerHeight;

        if( divHead < winHeight - 100 ) {
            div.current.classList.add("animate");
        } else {
            div.current.classList.remove("animate");
        }
    })

    return (
       <>
            <div ref={div} className='glass transition-all duration-1000 transform translate-y-36 opacity-0 w-[350px] m-4 p-4 rounded-2xl flex flex-col justify-center items-center'>
                <img src={img} alt="image" className='w-28' />
                <h1 className='text-2xl my-2'>{text}</h1>
                <p className='text-sm'>{ description }</p>
            </div>
       </>

    )
}


const Content:React.FC = () => {

    const div = useRef<HTMLDivElement>(null!);

    window.onscroll = () => {

        const divHead = div.current.getBoundingClientRect().top;
        const winHeight = window.innerHeight - 100;

        if( divHead < winHeight ) {
            div.current.classList.add("anim")
        } else {
            div.current.classList.remove("anim");
        }
    }

    return (
        <div className='mt-[150px]'>

           <div className='flex sm:flex-row flex-col justify-evenly items-center'>
                <h1 className='text-3xl mb-8 sm:my-0'>What is Bukrida?</h1>
                <p className='glass rounded-2xl w-[300px] sm:w-[350px] p-4'>
                    Bukrida is a value-based content engine that offers users access to thousands of books,
                    magazines, article and videos from any internet connected device.
                </p>
           </div>

            <main className='mt-36'>
                <h1 className='text-center text-2xl mb-10'>What do we have for you?</h1>
                <div className='flex justify-around flex-wrap'>

                    <Div text="Creativity🚀" img={buk1} description="Their Are Thousands Of Creative Writers On The Internet Who Needs A Ladder To Climb To Their Peak. Bukrida Looks To Be The Birth Place Of Great Minds & Enlightened Geniuses By Creating A Platform That Entertains Educational Development." />

                    <Div text="Productivity" img={buk2} description="Bukrida Promotes Productivity And Propels Productive And Creative People To The Frontline For Value Based Opportunities . This Enables Young People On Our Platform To More Gigs. Writers Are Ranked Based On Reviews." />

                    <Div text="Finance" img={buk3} description="You Can make Money For Being A Bukrida Writer . Just Like On YouTube You Are To Reach A Certain Threshold And You Can Monetize Your Books." />

                    <Div text="Read Amazing Books For Free" img={buk4} description="As A Reader you have access to thousands of free enlightening & entertaining contents . You can also Purchase Premium Contents On Our Platform From Authors You Love." />

                </div>
            </main>

            <main id='join' className='flex justify-center mt-48'>
                <div ref={div} className='relative anim duration-1000 -translate-x-40 opacity-0'>
                    <div className='bg-blue-600 w-[200px] h-[200px] rounded-full top-0 -left-2 absolute -z-10'></div>
                    <div className='glass w-[300px] p-[30px] rounded-2xl'>
                        <h1 className='mb-4 text-2xl text-center'>Join the Waitlist</h1>
                        <div className='relative w-[250px]'>
                            <input className='my-4 outline-none w-[100%] text-sm text-black rounded p-3' type="Email" placeholder='Enter your email' />
                            <button className='uppercase outline-none btn transition-all duration-500 text-center p-3 text-xs rounded-full right-[1px] top-[18px] absolute bg-blue-700 w-fit active:scale-50 active:shadow'>Go</button>
                        </div>
                        <p className='text-center my-4'>You will be notified when we launch.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Content;