import React, { useState, useEffect } from 'react'
import axios from "axios";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminCourse = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addCourseName, setCourseName] = useState('')
  const [addCourseDesc, setCourseDesc] = useState('')

  const [editCourseId, seteditCourseId] = useState('')
  const [editCourseName, setediteCourseName] = useState('')
  const [editCourseDesc, seteditCourseDesc] = useState('')

  const userdata = [
    {
      CourseId: 1,
      CourseName: 'C-sharp',
      Description: 'basics of c#',
    },
    {
      CourseId: 2,
      CourseName: 'C',
      Description: 'basics of C',
    },
    {
      CourseId: 3,
      CourseName: 'dot net',
      Description: 'basics of dot net',
    },

  ]
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
    // setData(userdata)
    // console.log(getData, "getdata");
  }, [])

  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkFiaGkiLCJleHAiOjE3MTA5MzQ3MzUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI0NCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI0NCJ9.KcdJ3njmaQ0XnJNpw0IRgBkxHdUNfC27MCEho74nQps'

  const getData = () => {
    axios.get('https://localhost:7244/api/Course', { headers: { 'Authorization': `Bearer ${accessToken}` } })
      .then((result) => {
        setData(result.data)
      }).catch((error) => {
        console.log(error)
      })
    console.log(data, "result");
  }

  const handleEdit = (id, accessToken) => {
    alert(id);
    handleShow();
    // axios.get(`https://localhost:7244/api/Course${id}`, { headers: { 'Authorization': `Bearer ${accessToken}` } })
    //   .then((result) => {
    //     const courseData = result.data;
    //     setediteCourseName(courseData.courseName);
    //     seteditCourseDesc(courseData.description);
    //     setediteId(id);
    //     console.log(result.data, "result");

    //   }).catch((error) => {
    //     console.log(error)
    //   });
  };

  const handleUpdate = () => {
    // const url = `https://localhost:7244/api/Course`;
    // const data = {
    //   CourseId: editCourseId,
    //   CourseName: editCourseName,
    //   Description: editCourseDesc
   
    // };
    // const config = {
    //   headers: { 'Authorization': `Bearer ${accessToken}` }
    // };
    // console.log("data", data);

    // axios.put(url, data, config)
    //   .then((response) => {
    //     handleClose();
    //     getData();
    //     clear();
    //     toast.success('User has been updated successfully');
    //   })
    //   .catch((error) => {
    //     console.error('Error updating user:', error);
    //     toast.error('Failed to update user. Please try again later.');
    //   });
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this course") == true) {
      alert(id);
      axios.delete(`https://localhost:7244/api/Course?courseId=${id}`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })
        .then((result) => {
          if (result.status === 200) {
            toast.success('Course Deleted Successfully');
            getData();
          }
        }).catch((error) => {
          toast.error(error);
        });
    }
  }

  const handleSave = () => {
    const url = 'https://localhost:7244/api/Course';
    const data = {
      courseName: addCourseName,
      description: addCourseDesc
    };

    axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    })
      .then((response) => {
        if (response.status === 200) {
          getData();
          clear();
          toast.success('Course has been added successfully');
        } else {
          throw new Error('Failed to add course');
          clear();
        }
      })
      .catch((error) => {
        console.error('Error adding course:', error);
        toast.error('Failed to add course. Please try again later.');
      });
  };


  const clear = () => {
    setCourseName('');
    setCourseDesc('');
    seteditCourseId('');
    setediteCourseName('');
    seteditCourseDesc('');
  }

  return (
    <>
      <div className="container">
        <h1>Course Details</h1>
        <ToastContainer />
        <Container>
          <Row>
            <Col>
              <input type='text' className='form-control' onChange={(e) => setCourseName(e.target.value)} value={addCourseName} placeholder='Add Course Name'></input>
            </Col>
          </Row><br />

          <Row>
            <Col>
              <input type='text' className='form-control' onChange={(e) => setCourseDesc(e.target.value)} value={addCourseDesc} placeholder='Course Description'></input>
            </Col>
          </Row><br />

          <Row>
            <Col>
              <Button variant="outline-primary" onClick={() => handleSave(accessToken)}>Add Course</Button>
            </Col>
          </Row>
          <br />
        </Container>
        <br />
        <br />
        <br />


        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th >#</th>
              <th>ID</th>
              <th >Course Name</th>
              <th >Course Description</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.length > 0 ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.courseId}</td>
                    <td>{item.courseName}</td>
                    <td>{item.description}</td>
                    <td colSpan={2}>
                      <Button variant="outline-primary" onClick={() => handleEdit(item.courseName, accessToken)}>Edit</Button> &nbsp;
                      <Button variant="outline-danger" onClick={() => handleDelete(item.courseId, accessToken)}>Delete</Button>
                    </td>
                  </tr>
                )
              })
                :
                'Loading...'
            }

          </tbody>
        </Table>

        <br /> <br /><br /><br /> <br /> <br />

        {/* update course */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <input type='text' className='form-control' onChange={(e) => setediteCourseName(e.target.value)} value={editCourseName} placeholder='Add Course Name'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <input type='text' className='form-control' onChange={(e) => seteditCourseDesc(e.target.value)} value={editCourseDesc} placeholder='Course Description'></input>
              </Col>
            </Row><br />

            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Update Course
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default AdminCourse