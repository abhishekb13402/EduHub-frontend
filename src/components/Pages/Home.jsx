// import React from 'react'
import '../../App.css';
import LoginSignup from '../LoginSignup/LoginSignup';
import Navbar from '../Navbar/Navbar';
import About from './About';
import Carousel from './Carousel';
import Course from './Course';
import Footer from './Footer';
const Home = () => {
    return (

        <>
            <Navbar />
            <Carousel />

            <div className='container' id='home'>
                <div className="homecontent">
                    <h3>🌈Welcome to EduHub: Empowering Your Learning Journey!📚</h3>

                    <h5>
                        🚀🚀Discover endless possibilities at EduHub, your ultimate online learning platform.
                        Choose from diverse courses, personalize your learning path, earn certificates, and
                        learn from industry experts. Join us now to unlock a world of knowledge and growth.
                    </h5>   <br /><br />
                    <br /><br />
                    <span>
                        <a href="#" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'green' }}>🖋️ Login</a>
                        <span className="mx-2">|</span>
                        <a href="#" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'blue' }}>Explore Courses 🔍</a>
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