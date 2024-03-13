import React from 'react'

// import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Carousel from './components/Pages/Carousel';
import Course from './components/Pages/Course';
import Footer from './components/Pages/Footer';
import About from './components/Pages/About';

const App = () => {
  return (
    <>

      {/* <BrowserRouter>
        <Routes>
          <Route path='./component/Pages/Home' element={<Home />} />
          <Route path='./component/Pages/About' element={<About />} />
          <Route path='./component/Pages/About' element={<Course />} />
          <Route path='./component/Pages/Login' element={<Login />} />

        </Routes>
      </BrowserRouter> */}

      <Navbar />
      <Carousel />
      <Home/>
      <About/>
      <Course />
      <Footer />

    </>
  )
}

export default App
