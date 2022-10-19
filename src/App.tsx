import React from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';

const App:React.FC = () => {
  return (
    <>
    <Nav />
    <Home />
    </>
  );
}

export default App;
