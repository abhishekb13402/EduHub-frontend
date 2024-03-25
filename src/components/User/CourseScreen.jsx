// import React from 'react'
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Course from '../Pages/Course';
// import { accessToken } from '../../Constant'; // Import the access token


const CourseScreen = () => {
  const { courseId } = useParams(); // Get the courseId from URL parameter
  const [course, setCourse] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate(); 

  useEffect(() => {
    // setLoading(true);
    // https://localhost:7244/api/Course/1
    axios.get(`https://localhost:7244/api/Course/${courseId}`)
      .then(response => {
        setCourse(response.data);
        // setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching course:', error);
        // setLoading(false);
      });
  }, [courseId]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (!course) {
    return <div>Course not found</div>;
  }

  // const config = {
  //   headers: { 'Authorization': `Bearer ${accessToken}` }
  // };
  // const handleEnroll = (courseId) => {
  //   // Implement enrollment functionality
  //   // https://localhost:7244/api/Enrollment
  //   axios.post('https://localhost:7244/api/Enrollment', {
  //     courseId: courseId,
  //     userId: '2', // Replace '123' with the actual user ID
  //   },config)
  //   .then(response => {
  //     toast.success('Enrollment successfull');
  //     console.log('Enrollment successful:', response.data);
  //     // Navigate to the module screen upon successful enrollment
  //     navigate(`/courses/${courseId}/modules`);
  //   })
  //   .catch(error => {
  //     console.error('Error enrolling user:', error);
  //     toast.error('Failed Enrollment. Please try again later.');
  //   });
  // };


  return (
    <>
      <Navbar />
      <br/><br/><br/>
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
          {/* <Button variant="outline-primary" onClick={handleEnroll(course.courseId)}>Enroll</Button> */}
          <Button variant="outline-primary" >Enroll</Button>
        </div>
      </div>
    </>
  );

}

export default CourseScreen