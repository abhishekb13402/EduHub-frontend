// import React from 'react'
import Languagetags from './Languagetags'
import '../../App.css';
import './CourseDisplay.css';
import Navbar from '../Navbar/Navbar';

import { getRandomImageUrl } from '../../Constant'; // Import the access token
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CoursesDisplay = () => {
  const [courses, setCourses] = useState([]);
  // const [originalCourses, setOriginalCourses] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // Load courses when component mounts
    // getAllCourses();
  }, []);

  const getAllCourses = () => {
    setLoading(true);
    axios.get('https://localhost:7244/api/Course')
      .then(response => {
        const coursesArray = Object.values(response.data);
        setCourses(coursesArray);
        setOriginalCourses(coursesArray);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error fetching courses: ", error);
        setLoading(false);
      });
  }

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   axios.get(`https://localhost:7244/api/Course/CourseName?CourseName=${searchTerm}`)
  //     .then(response => {
  //       const searchResults = Object.values(response.data);
  //       setCourses(searchResults);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.log("Error searching courses: ", error);
  //       setLoading(false);
  //     });
  // }

  // const handleReset = () => {
  //   setCourses(originalCourses);
  //   setSearchTerm('');
  // }

  const truncateDescription = (description) => {
    const words = description.split(' ');
    const truncatedDescription = words.slice(0, 3).join(' ');
    return truncatedDescription;
  }
  

  return (
    <>
      <Navbar />
      <br /><br /><br /><br />
      <div className='container' id='coursesDisplay'>
        <h2>Courses Display</h2>
        <Languagetags />
        <div className="container">
          <div className="searchsection">
            <button type="button" className="btn btn-outline-primary" onClick={getAllCourses}>Get All The Courses</button>
            {/* <form className="d-flex" onSubmit={handleSearch}>
              <input className="form-control me-2" type="search" placeholder="Search By Course Name" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <button className="btn btn-outline-success" type="submit">Search Course</button>
              <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>Reset</button>
            </form> */}
          </div>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="Coursecontainer row">
            {courses.map(course => (
              <div key={course.courseId} className="col-md-4 mb-4">
                <div className="card">
                  <img src={getRandomImageUrl()} alt={course.courseName} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{course.courseName}</h5>
                    <p className="card-text">{truncateDescription(course.description)}</p>
                    <Link to={`/courseScreen/${course.courseId}`} className="btn btn-outline-primary btn-sm">View Details</Link>
                   </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default CoursesDisplay;
