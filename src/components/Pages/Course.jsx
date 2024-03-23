import React, { useState, useEffect } from 'react'
import '../../App.css';
import axios from 'axios';
import { getRandomImageUrl } from '../../Constant'; // Import the access token
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Course = () => {



    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get('https://localhost:7244/api/Course')
            .then(response => {
                const firstThreeCourses = response.data.slice(0, 3);
                setCourses(firstThreeCourses);
            })
            .catch(error => {
                console.log("Error fetching courses: ", error);
            });
    }
    return (
        <>
            <div className="container" id='course'>
                <div className="row">
                    {courses.map(course => (
                        <div key={course.courseId} className="col-md-4 mb-4">

                            <div className="card-container">

                                <div className="card">
                                    <img src={getRandomImageUrl()} />
                                    <div className="card-content">
                                        <h1>{course.courseName}</h1>
                                        <p>{course.description}</p>
                                        <button type="button" className="btn btn-outline-primary btn-sm">View Details</button>
                                        {/* <!-- <a href="" className="card-button">Github Link</a> --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                    <span>
                        <br /><br />

                        <a href="#login" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'green' }}>🖋️ Login</a>
                        <span className="mx-2">|</span>
                        <Link to="/coursesDisplay" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'blue' }}>Explore Courses 🔍</Link>
                    </span>
                </div>

            </div>
        </>
    )
}

export default Course