import React from 'react'
import '../../App.css';

const Course = () => {
    return (
        <>
            <div className="container" id='course'>

                <div className="card-container">
                    <div className="card">
                        <img src="/public_img/carouselimg1.jpg" />
                        <div className="card-content">
                            <h1>Student Feedback System, Website</h1>
                            <p>It is a website built using HTML, CSS, JavaScript, PHP, Sql.</p>
                <button type="button" className="btn btn-outline-primary btn-sm">Enroll</button>
                            {/* <!-- <a href="" className="card-button">Github Link</a> --> */}
                        </div>
                    </div>

                    <div className="card">
                        <img src="/public_img/carouselimg1.jpg" />
                        <div className="card-content">
                            <h1>Student Feedback System, Website</h1>
                            <p>It is a website built using HTML, CSS, JavaScript, PHP, Sql.</p>
                <button type="button" className="btn btn-outline-primary btn-sm">Enroll</button>
                            {/* <!-- <a href="" className="card-button">Github Link</a> --> */}
                        </div>
                    </div>

                    <div className="card">
                        <img src="/public_img/carouselimg1.jpg" />
                        <div className="card-content">
                            <h1>Student Feedback System, Website</h1>
                            <p>It is a website built using HTML, CSS, JavaScript, PHP, Sql.</p>
                <button type="button" className="btn btn-outline-primary btn-sm">Enroll</button>
                            {/* <!-- <a href="" className="card-button">Github Link</a> --> */}
                        </div>
                    </div>



                    <span>
                        <br /><br />

                        <a href="#" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'green' }}>🖋️ Login</a>
                        <span className="mx-2">|</span>
                        <a href="#" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'blue' }}>Explore Courses 🔍</a>
                    </span>
                </div>
                
            </div>
        </>
    )
}

export default Course