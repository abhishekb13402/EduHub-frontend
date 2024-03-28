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
const AdminModule = () => {

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleAddClose = () => setShowAddModal(false);
  const handleAddShow = () => setShowAddModal(true);

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  //add module
  const [addCourseId, setCourseId] = useState('')
  // const [addModuleId, setModuleId] = useState('')
  // const [addCourseName, setCourseName] = useState('')
  const [addModuleName, setModuleName] = useState('')
  const [addContent, setContent] = useState('')

  //edit module
  const [editModuleId, seteditModuleId] = useState('')
  const [editCourseId, seteditCourseId] = useState('')
  const [editModuleName, seteditModuleName] = useState('')
  const [editContent, seteditContent] = useState('')

  const [data, setData] = useState([]);

  const [searchModule, setsearchModule] = useState('');
  // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkFkbWluQGdtYWlsLmNvbSIsImV4cCI6MTcxMTEwNjU5NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjQ0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo3MjQ0In0.7X47gTB0AAt92RW382TV_hL2PTfTf5K41RgMj1v1tQY'

  useEffect(() => {
    handleSearch();
  }, []);

  //handlesearch code

  const handleSearch = () => {
    if (searchModule.trim() === '') {
      // Fetch all module if searchModule is empty
      axios.get(`https://localhost:7244/api/Module`, { headers: { 'Authorization': `Bearer ${accessToken}` } })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching module:', error);
        });
    } else {
      // Fetch assessment questions by module ID
      // https://localhost:7244/api/Module/JAVA
      axios.get(`https://localhost:7244/api/Module/${searchModule}`, { headers: { 'Authorization': `Bearer ${accessToken}` } })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching module for this course ID ${searchModule}:`, error);
        });
    }
  };

  //handle add code

  const openpopup = () => {
    // handleShow();
    handleAddShow();
  }

  const handleSave = () => {
    const url = 'https://localhost:7244/api/Module';
    const data = {
      courseId: addCourseId,
      moduleName: addModuleName,
      content: addContent
    };
    console.log(data, "data");

    const config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    };
    console.log("accessToken", accessToken);

    axios.post(url, data, config)
      .then((response) => {
        if (response.status === 200) {
          console.log(response, "response");
          // handleClose();
          handleAddClose();
          clear();
          toast.success('Module has been added successfully');
          handleSearch();
        } else {
          // console.log(response,"response");
          throw new Error('Failed to add Module');
          toast.error('Failed to add Question');
          clear();

        }
      }).catch((error) => {
        console.error('Error adding Module:', error);
        toast.error('Failed to add module. Please try again later.');
        // console.log(response,"response");

      });
  };
  const clear = () => {
    setCourseId('');
    setModuleName('');
    setContent('');
  }

  const handleEdit = (id, accessToken) => {
    alert(id);
    // handleShow();
    handleEditShow();
    // https://localhost:7244/api/Module?moduleid=2
    axios.get(`https://localhost:7244/api/Module?moduleid=${id}`, { headers: { 'Authorization': `Bearer ${accessToken}` } })
      .then((result) => {
        const assqData = result.data[0];
        seteditModuleId(assqData.moduleId);
        seteditCourseId(assqData.courseId);
        seteditModuleName(assqData.moduleName);
        seteditContent(assqData.content);

        console.log(result.data[0], "resulssst");

      }).catch((error) => {
        console.log(error)
      });
    // console.log(result, "result");
  }

  const handleUpdate = () => {
    if (!editModuleId) {
      console.error('ModuleId is required for updating');
      return;
    }

    const url = `https://localhost:7244/api/Module`;
    const data = {
      moduleId: editModuleId,
      courseId: editCourseId,
      moduleName: editModuleName,
      content: editContent

    };
    console.log(data, "data");
    const config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    };
    console.log("data", data);

    axios.put(url, data, config)
      .then((response) => {
        // handleClose();
        handleEditClose();
        handleSearch();
        clear();
        console.log(response, "response");
        toast.success('Module has been updated successfully');
      })
      .catch((error) => {
        console.error('Error updating Module:', error);
        toast.error('Failed to update Module. Please try again later.');
      });
  }

  const handleDelete = (id, accessToken) => {
    alert(id)
    if (window.confirm("Are you sure to delete this Question") == true) {
      // alert(id);
      // https://localhost:7244/api/Module?id=9
      axios.delete(`https://localhost:7244/api/Module?id=${id}`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })
        .then((result) => {
          if (result.status === 200) {
            toast.success('Module Deleted Successfully');
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
            <Button variant="outline-primary" onClick={() => openpopup()}>Add Module</Button>
          </Col>
        </Row>
        <br />
        <br />
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search Module By Course Name" aria-label="Search" value={searchModule} onChange={(e) => setsearchModule(e.target.value)} />
          <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search Module</button>

          {/* <input className="form-control me-2" type="search" placeholder="Search Module By Course Name" aria-label="Search"  />
          <button className="btn btn-outline-success" type="button" >Search</button> */}

        </form>
        <br /> <br />

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>ModuleId</th>
              <th>CourseId</th>
              {/* <th>Course Name</th> */}
              <th>Module Name</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.moduleId}</td>
                  <td>{item.courseId}</td>
                  {/* <td>{item.courseName}</td> */}
                  <td>{item.moduleName}</td>
                  <td>{item.content}</td>
                  <td>
                    <Button variant="outline-primary" onClick={() => handleEdit(item.moduleId, accessToken)}>Edit</Button>{' '}
                    <Button variant="outline-danger" onClick={() => handleDelete(item.moduleId, accessToken)}>Delete</Button>
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

        {/* model for add questions */}

        <Modal show={showAddModal} onHide={handleAddClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Module</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <input type='text' className='form-control' value={addCourseId}
                  onChange={(e) => setCourseId(e.target.value)} placeholder='Add Course Id'></input>
              </Col>
            </Row><br />

            {/* <Row>
              <Col>
                <input type='text' className='form-control' value={addCourseName}
                  onChange={(e) => setCourseName(e.target.value)} placeholder='Add Course Name'></input>
              </Col>
            </Row><br /> */}

            <Row>
              <Col>
                <input type='text' className='form-control' value={addModuleName}
                  onChange={(e) => setModuleName(e.target.value)} placeholder='Add Module Name'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <textarea type='text' className='form-control' value={addContent}
                  onChange={(e) => setContent(e.target.value)} placeholder='Add Content'></textarea>
              </Col>
            </Row><br />

            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAddClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Add Module
            </Button>
          </Modal.Footer>
        </Modal>

        {/* model for edit/update questions */}

        <Modal show={showEditModal} onHide={handleEditClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Module</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                {/* {console.log(addCourseId, "addCourseId")} */}
                <input type='text' className='form-control' value={editCourseId}
                  onChange={(e) => seteditCourseId(e.target.value)} placeholder='Edit Course Id'></input>
              </Col>
            </Row><br />
            {/* <Row>
              <Col>
                <input type='text' className='form-control' value={editCourseName}
                  onChange={(e) => seteditCourseName(e.target.value)} placeholder='Edit Course Name'></input>
              </Col>
            </Row><br /> */}
            <Row>
              <Col>
                <input type='text' className='form-control' value={editModuleName}
                  onChange={(e) => seteditModuleName(e.target.value)} placeholder='Edit Module Name'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <textarea type='text' className='form-control' value={editContent}
                  onChange={(e) => seteditContent(e.target.value)} placeholder='Edit Module Content'></textarea>
              </Col>
            </Row><br /><br />
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Edit Module
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
    </>
  )
}

export default AdminModule