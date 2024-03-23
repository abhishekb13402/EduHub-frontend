// import React from 'react'
import '../../App.css';
import LoginSignup from '../LoginSignup/LoginSignup';
import Navbar from '../Navbar/Navbar';
import About from './About';
import Carousel from './Carousel';
import Course from './Course';
import Footer from './Footer';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
    return (

        <>
            <Navbar />
            <Carousel />

            <div className='container' id='home'>
                <div className="homecontent">
                    <h3>🌈Welcome to EduHub: Empowering Your Learning Journey!📚</h3>

                    <h5>
                        🚀🚀Discover endless possibilities at EduHub, your ultimate online Project based learning platform.
                        Choose from diverse short courses, personalize your learning path . Join us now to unlock a world of knowledge and growth.
                    </h5>   <br /><br />
                    <br /><br />
                    <span>
                        <a href="#login" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'green' }}>🖋️ Login</a>
                        <span className="mx-2">|</span>
                        
                        {/* <a href=" {navigate('/coursesDisplay')}" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'blue' }}>Explore Courses 🔍</a> */}
                        <Link to="/coursesDisplay" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'blue' }}>Explore Courses 🔍</Link>
                    </span>
                </div>
            </div>

            <About />
            <Course />
            <LoginSignup />
            <Footer />

        </>
    )
}

export default Home