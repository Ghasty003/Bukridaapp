import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Home: React.FC = () => {
    return (
        <>
           <Header />
           <Content />
           <Footer />
        </>
    );
}

export default Home;