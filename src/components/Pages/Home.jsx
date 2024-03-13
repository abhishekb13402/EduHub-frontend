// import React from 'react'
import '../../App.css';
const Home = () => {
    return (
       <div className='container'>
        <div className="homecontent">
        <h3>**Welcome to EduHub: Empowering Your Learning Journey!**</h3>

            <p>
                Discover endless possibilities at EduHub, your ultimate online learning platform. 
                Choose from diverse courses, personalize your learning path, earn certificates, and 
                learn from industry experts. Join us now to unlock a world of knowledge and growth. 
                <br/><br/>
                <span>
                    <a href="#" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Sign Up</a>
                    <a href="#" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Expore Courses</a>
                </span>
                
                </p>
        </div>
       </div>

    )
}

export default Home