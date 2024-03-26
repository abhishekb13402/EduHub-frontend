import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { accessToken } from '../../Constant'; // Import the access token
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

const Modules = () => {

  const { courseName } = useParams(); // Get the coursename from URL parameter
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // https://localhost:7244/api/Module/JAVA
    console.log("coursename", courseName);
    axios.get(`https://localhost:7244/api/Module/${courseName}`, { headers: { 'Authorization': `Bearer ${accessToken}` } })
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching course:', error);
      });
  }, [courseName]);

  if (!course) {
    return <div>module not found</div>;
  }

  // const htmlCode = `<!DOCTYPE html>
  // <html lang="en">
  // <head>
  //   <title>Simple Form</title>
  // </head>
  // <body>
  //   <h2>Simple Form</h2>
  //   <form action="#" method="POST">
  //     <label for="name">Name:</label><br>
  //     <input type="text" id="name" name="name"><br><br>
  //     <label for="email">Email:</label><br>
  //     <input type="email" id="email" name="email"><br><br>
  //     <label for="message">Message:</label><br>
  //     <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>
  //     <input type="submit" value="Submit">
  //   </form>
  // </body>
  // </html>`;

  return (
    <>
      <Navbar />
      <br /><br /><br />
      <div className="container mt-5">

        <div className="coursename">
          <h2>{courseName}</h2>
        </div>

        <Accordion>
          {course.map((course, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>{course.moduleName}</Accordion.Header>
              <Accordion.Body>
                <pre>{course.content}</pre>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="coursesubmitbtn d-flex justify-content-end mt-3">
          <Button variant="outline-primary">Course Submit</Button>{' '}
        </div>
      </div>
    </>
  );
}

export default Modules