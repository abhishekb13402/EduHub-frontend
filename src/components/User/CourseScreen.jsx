// import React from 'react'
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseScreen = () => {
  const { courseId } = useParams(); // Get the courseId from URL parameter
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course details by courseId
    axios.get(`https://localhost:7244/api/Course/${courseId}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching course:', error);
      });
  }, [courseId]); // Fetch data when courseId changes

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mt-5">
        <div className="coursename">
          <h2>{course.courseName}</h2>
        </div>

        <div className="courseimg">
          <img src="/CourseDisplayImg.jpg" className="img-fluid rounded mx-auto d-block" alt="Course Display Image" style={{ Width: '400px', height: '250px' }} />
        </div>

        <div className="coursedescription">
          <p>{course.description}</p>
        </div>

        <div className="courseenrollbtn d-flex justify-content-center mt-3">
          <Button variant="outline-primary">Enroll</Button>{' '}
        </div>

      </div>
    </>
  );

}

export default CourseScreen