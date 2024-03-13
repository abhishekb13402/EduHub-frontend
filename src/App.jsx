import React from 'react'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Carousel from './components/Pages/Carousel';
import Course from './components/Pages/Course';

const App = () => {
  return (
    <>
      
        <Navbar/>
        <Carousel/>
        {/* <Home/> */}
        <Course/>
       
    </>
  )
}

export default App
