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

import { accessToken } from '../../../Constant'; // Import the access token

const AdminEnrollment = () => {

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleAddClose = () => setShowAddModal(false);
  const handleAddShow = () => setShowAddModal(true);

  // const handleEditClose = () => setShowEditModal(false);
  // const handleEditShow = () => setShowEditModal(true);

  //add module
  const [addUsereId, setUserId] = useState('')
  const [addCourseId, setCourseId] = useState('')

  //edit module
  // const [editCourseId, seteditCourseId] = useState('')
  // const [editModuleId, seteditModuleId] = useState('')
  // const [editCourseName, seteditCourseName] = useState('')
  // const [editModuleName, seteditModuleName] = useState('')
  // const [editContent, seteditContent] = useState('')

  const [data, setData] = useState([]);

  const [searchEnrollment, setsearchEnrollment] = useState('');
  // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkFkbWluQGdtYWlsLmNvbSIsImV4cCI6MTcxMTEwNjU5NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjQ0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo3MjQ0In0.7X47gTB0AAt92RW382TV_hL2PTfTf5K41RgMj1v1tQY'

  useEffect(() => {
    handleSearch();
  }, []);

  //handlesearch code

  const handleSearch = () => {
    if (searchEnrollment.trim() === '') {
      // Fetch all module if searchEnrollment is empty
      axios.get(`https://localhost:7244/api/Enrollment`, { headers: { 'Authorization': `Bearer ${accessToken}` } })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching module:', error);
        });
    } else {
      // Fetch enrollment by course name
      // https://localhost:7244/api/Enrollment?Coursename=
      axios.get(`https://localhost:7244/api/Enrollment?Coursename=${searchEnrollment}`, { headers: { 'Authorization': `Bearer ${accessToken}` } })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching Enrollments for this course Name ${searchEnrollment}:`, error);
        });
    }
  };


  //handle add code

  const openpopup = () => {
    // handleShow();
    handleAddShow();
  }

  const handleSave = () => {
    const url = 'https://localhost:7244/api/Enrollment';
    const data = {
      userId: addUsereId,
      courseId: addCourseId
    };
    // console.log(data, "data");

    const config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    };
    // console.log("accessToken", accessToken);

    axios.post(url, data, config)
      .then((response) => {
        if (response.status === 200) {
          // console.log(response, "response");
          // handleClose();
          handleAddClose();
          clear();
          toast.success('Enrollment has been added successfully');
          handleSearch();
        } else {
          // console.log(response,"response");
          throw new Error('Failed to add Enrollment');
          toast.error('Failed to add Enrollment');
          clear();

        }
      }).catch((error) => {
        console.error('Error adding Enrollment:', error);
        toast.error('Failed to add Enrollment. Please try again later.');
        // console.log(response,"response");

      });
  };
  const clear = () => {
    setUserId('');
    setCourseId('');
  }

  const handleEdit = (id, accessToken) => {
    alert(id)
  }
  const handleDelete = (id, accessToken) => {
    alert(id)
    if (window.confirm("Are you sure to delete this Question") == true) {
      // alert(id);
      // https://localhost:7244/api/Enrollment?id=9
      axios.delete(`https://localhost:7244/api/Enrollment?id=${id}`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })
        .then((result) => {
          if (result.status === 200) {
            toast.success('Course Deleted Successfully');
            handleSearch();
          }
        }).catch((error) => {
          toast.error(error);
        });
    }

  }


  return (
    <>
      <div className="container">
        <ToastContainer />
        <br /><br />
        <Row>
          <Col>
            <Button variant="outline-primary" onClick={() => openpopup()}>Add Enrollment</Button>
          </Col>
        </Row>
        <br />
        <br />
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search Module By Course Name" aria-label="Search" value={searchEnrollment} onChange={(e) => setsearchEnrollment(e.target.value)} />
          <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search Enrollments</button>
        </form>
        <br /> <br />

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Enrollment Id</th>
              <th>User Id</th>
              <th>Course Id</th>
              <th>Course Name</th>
              <th>User Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.enrollmentId}</td>
                  <td>{item.userId}</td>
                  <td>{item.courseId}</td>
                  <td>{item.coursename}</td>
                  <td>{item.username}</td>
                  <td>
                    {/* <Button variant="outline-primary" onClick={() => handleEdit(item.enrollmentId, accessToken)}>Edit</Button>{' '} */}
                    <Button variant="outline-danger" onClick={() => handleDelete(item.enrollmentId,accessToken )}>Delete</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No data available</td>
              </tr>
            )}
          </tbody>
        </Table><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />


   {/* model for add enrollment */}

   <Modal show={showAddModal} onHide={handleAddClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Module</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <input type='text' className='form-control' value={addUsereId}
                  onChange={(e) => setUserId(e.target.value)} placeholder='Add User Id'></input>
              </Col>
            </Row><br />

            <Row>
              <Col>
                <input type='text' className='form-control' value={addCourseId}
                  onChange={(e) => setCourseId(e.target.value)} placeholder='Add Course Id'></input>
              </Col>
            </Row><br />

            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAddClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Add Enrollment
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
    </>
  )
}

export default AdminEnrollment