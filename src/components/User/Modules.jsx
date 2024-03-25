import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const Modules = () => {

  const htmlCode = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Simple Form</title>
  </head>
  <body>
    <h2>Simple Form</h2>
    <form action="#" method="POST">
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name"><br><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br><br>
      <label for="message">Message:</label><br>
      <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>
      <input type="submit" value="Submit">
    </form>
  </body>
  </html>`;
  
  return (
    <>
      <div className="container mt-5">

        <div className="coursename">
          <h2>Course Name</h2>
        </div>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>HTML FILE</Accordion.Header>
            <Accordion.Body>
            <pre>{htmlCode}</pre>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>CSS FILE</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>JAVASCRIPT FILE</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>

        <div className="coursesubmitbtn d-flex justify-content-end mt-3">
          <Button variant="outline-primary">Course Submit</Button>{' '}
        </div>
      </div>
    </>
  );
}

export default Modules