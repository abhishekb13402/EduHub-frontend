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

const AdminAssessmentQ = () => {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleAddClose = () => setShowAddModal(false);
  const handleAddShow = () => setShowAddModal(true);

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);


  // const [addQuestionId, setQuestionId] = useState('')
  const [addCourseId, setCourseId] = useState('')
  const [addCourseName, setCourseName] = useState('')
  const [addQuestionText, setQuestionText] = useState('')
  const [addCorrectAns, setCorrectAns] = useState('')
  const [addOptA, setOptA] = useState('')
  const [addOptB, setOptB] = useState('')
  const [addOptC, setOptC] = useState('')
  const [addOptD, setOptD] = useState('')


  //edit
  const [editQuestionId, seteditQuestionId] = useState('')
  const [editCourseId, seteditCourseId] = useState('')
  const [editCourseName, seteditCourseName] = useState('')
  const [editQuestionText, seteditQuestionText] = useState('')
  const [editCorrectAns, seteditCorrectAns] = useState('')
  const [editOptA, seteditOptA] = useState('')
  const [editOptB, seteditOptB] = useState('')
  const [editOptC, seteditOptC] = useState('')
  const [editOptD, seteditOptD] = useState('')



  // const [editCourseId, seteditCourseId] = useState('')
  // const [editCourseName, setediteCourseName] = useState('')
  // const [editCourseDesc, seteditCourseDesc] = useState('')

  // const [data, setData] = useState([]);

  // useEffect(() => {

  //   handleSearch();
  //   setData(userdata)
  //   // console.log(getData, "getdata");
  // }, [])

  // const getData = (cid,accessToken) => {
  //   const url = `https://localhost:7244/api/AssessmentQuestion/${cid}`;
  //   axios.get(url, { headers: { 'Authorization': `Bearer ${accessToken}` } })
  //     .then((result) => {
  //       setData(result.data)
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  //   console.log(data, "result");
  // }

  //  const handleSearch = (cid,accessToken) =>{

  //  }


  const [data, setData] = useState([]);

  const [searchCourseName, setsearchCourseName] = useState('');
  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkFkbWluQGdtYWlsLmNvbSIsImV4cCI6MTcxMTEwNjU5NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjQ0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo3MjQ0In0.7X47gTB0AAt92RW382TV_hL2PTfTf5K41RgMj1v1tQY'

  useEffect(() => {
    handleSearch();
  }, []);

  //handlesearch code

  const handleSearch = () => {
    if (searchCourseName.trim() === '') {
      // Fetch all assessment questions if searchCourseName is empty
      axios.get(`https://localhost:7244/api/AssessmentQuestion`, { headers: { 'Authorization': `Bearer ${accessToken}` } })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching assessment questions:', error);
        });
    } else {
      // Fetch assessment questions by course ID
      axios.get(`https://localhost:7244/api/AssessmentQuestion/${searchCourseName}`, { headers: { 'Authorization': `Bearer ${accessToken}` } })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching assessment questions for course ID ${searchCourseName}:`, error);
        });
    }
  };

  //handle add code

  const openpopup = () => {
    // handleShow();
    handleAddShow();
  }

  const handleSave = () => {
    const url = 'https://localhost:7244/api/AssessmentQuestion';
    const data = {
      CourseId: addCourseId,
      CourseName: addCourseName,
      QuestionText: addQuestionText,
      CorrectAns: addCorrectAns,
      OptA: addOptA,
      OptB: addOptB,
      OptC: addOptC,
      OptD: addOptD
    };
    // console.log(data,"data");

    const config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    };
    // console.log("accessToken", accessToken);

    axios.post(url, data, config)
      .then((response) => {
        if (response.status === 200) {
          // console.log(response,"response");
          // handleClose();
          handleAddClose();
          clear();
          toast.success('Question has been added successfully');
          handleSearch();
        } else {
          // console.log(response,"response");
          throw new Error('Failed to add Question');
          toast.error('Failed to add Question');
          clear();

        }
      }).catch((error) => {
        console.error('Error adding Question:', error);
        toast.error('Failed to add Question. Please try again later.');
        // console.log(response,"response");

      });
  };
  const clear = () => {
    setCourseId('');
    setCourseName('');
    setQuestionText('');
    setCorrectAns('');
    setOptA('');
    setOptB('');
    setOptC('');
    setOptD('');
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this Question") == true) {
      // alert(id);
      //https://localhost:7244/api/AssessmentQuestion/18
      axios.delete(`https://localhost:7244/api/AssessmentQuestion/${id}`, {
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


  const handleEdit = (id, accessToken) => {
    alert(id);
    // handleShow();
    handleEditShow();
    //https://localhost:7244/api/AssessmentQuestion?questionid=19
    axios.get(`https://localhost:7244/api/AssessmentQuestion?questionid=${id}`, { headers: { 'Authorization': `Bearer ${accessToken}` } })
      .then((result) => {
        const assqData = result.data[0];
        seteditQuestionId(id);
        seteditCourseId(assqData.courseId);
        seteditCourseName(assqData.CourseName);
        seteditQuestionText(assqData.questionText);
        seteditCorrectAns(assqData.correctAns);
        seteditOptA(assqData.optA);
        seteditOptB(assqData.optB);
        seteditOptC(assqData.optC);
        seteditOptD(assqData.optD);

        console.log(result.data[0], "resulssst");

      }).catch((error) => {
        console.log(error)
      });
    // console.log(result, "result");
  };

  const handleUpdate = () => {
    if (!editQuestionId) {
      console.error('QuestionId is required for updating');
      return;
    }

    const url = `https://localhost:7244/api/AssessmentQuestion`;
    const data = {
      QuestionId: editQuestionId,
      CourseId: editCourseId,
      CourseName: editCourseName,
      QuestionText: editQuestionText,
      CorrectAns: editCorrectAns,
      OptA: editOptA,
      OptB: editOptB,
      OptC: editOptC,
      OptD: editOptD

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
        toast.success('Course has been updated successfully');
      })
      .catch((error) => {
        console.error('Error updating course:', error);
        toast.error('Failed to update Course. Please try again later.');
      });
  }

  return (
    <>
      <div className="container">
        <ToastContainer />
        <br /><br />
        <Row>
          <Col>
            <Button variant="outline-primary" onClick={() => openpopup()}>Add Assessment Question</Button>
          </Col>
        </Row>
        <br />
        <br />
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search Assessment Questions By Course Name" aria-label="Search" value={searchCourseName} onChange={(e) => setsearchCourseName(e.target.value)} />
          <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>
        </form>
        <br /> <br />

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>QuestionId</th>
              <th>CourseId</th>
              <th>QuestionText</th>
              <th>CorrectAns</th>
              <th>OptA</th>
              <th>OptB</th>
              <th>OptC</th>
              <th>OptD</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.questionId}</td>
                  <td>{item.courseId}</td>
                  <td>{item.questionText}</td>
                  <td>{item.correctAns}</td>
                  <td>{item.optA}</td>
                  <td>{item.optB}</td>
                  <td>{item.optC}</td>
                  <td>{item.optD}</td>
                  <td>
                    <Button variant="outline-primary" onClick={() => handleEdit(item.questionId, accessToken)}>Edit</Button>{' '}
                    <Button variant="outline-danger" onClick={() => handleDelete(item.questionId)}>Delete</Button>
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
            <Modal.Title>Add Assessment Question</Modal.Title>
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
                  onChange={(e) => setCourseName(e.target.value)} placeholder='Enter Course Name'></input>
              </Col>
            </Row><br /> */}
            <Row>
              <Col>
                <input type='text' className='form-control' value={addQuestionText}
                  onChange={(e) => setQuestionText(e.target.value)} placeholder='Add Question Text'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <input type='text' className='form-control' value={addCorrectAns}
                  onChange={(e) => setCorrectAns(e.target.value)} placeholder='Add Correct Ans'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <input type='text' className='form-control' value={addOptA}
                  onChange={(e) => setOptA(e.target.value)} placeholder='Add Opt-A'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <input type='text' className='form-control' value={addOptB}
                  onChange={(e) => setOptB(e.target.value)} placeholder='Add Opt-B'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <input type='text' className='form-control' value={addOptC}
                  onChange={(e) => setOptC(e.target.value)} placeholder='Add Opt-C'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <input type='text' className='form-control' value={addOptD}
                  onChange={(e) => setOptD(e.target.value)} placeholder='Add Opt-D'></input>
              </Col>
            </Row><br />
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAddClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Add Question
            </Button>
          </Modal.Footer>
        </Modal>


        {/* model for edit/update questions */}

        <Modal show={showEditModal} onHide={handleEditClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Assessment Question</Modal.Title>
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
                <input type='text' className='form-control' value={editQuestionText}
                  onChange={(e) => seteditQuestionText(e.target.value)} placeholder='Edit Question Text'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <input type='text' className='form-control' value={editCorrectAns}
                  onChange={(e) => seteditCorrectAns(e.target.value)} placeholder='Edit Correct Ans'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <input type='text' className='form-control' value={editOptA}
                  onChange={(e) => seteditOptA(e.target.value)} placeholder='Edit Opt-A'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <input type='text' className='form-control' value={editOptB}
                  onChange={(e) => seteditOptB(e.target.value)} placeholder='Edit Opt-B'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <input type='text' className='form-control' value={editOptC}
                  onChange={(e) => seteditOptC(e.target.value)} placeholder='Edit Opt-C'></input>
              </Col>
            </Row><br />
            <Row>
              <Col>
                <input type='text' className='form-control' value={editOptD}
                  onChange={(e) => seteditOptD(e.target.value)} placeholder='Edit Opt-D'></input>
              </Col>
            </Row><br />
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Edit Question
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </>
  );
};

export default AdminAssessmentQ;



//   return (
//     <>
//       <div className="container">
//         <br /><br />
//         <form className="d-flex" role="search">

//           <input className="form-control me-2" type="search" placeholder="Search Assessment Questions By Course Id" aria-label="Search" />
//           <button className="btn btn-outline-success" type="submit" onClick={() => handleSearch(courseId, accessToken)}>Search</button>
//         </form>

//         <br /> <br />

//         <Table striped bordered hover size="sm">
//           <thead>
//             <tr>
//               <th >#</th>
//               <th>ID</th>
//               <th>QuestionId</th>
//               <th >CourseId</th>
//               <th >QuestionText</th>
//               <th >CorrectAns</th>
//               <th >OptA</th>
//               <th >OptB</th>
//               <th >OptC</th>
//               <th >OptD</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               data && data.length > 0 ? data.map((item, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{item.id}</td>
//                     <td>{item.questionId}</td>
//                     <td>{item.courseId}</td>
//                     <td>{item.questionText}</td>
//                     <td>{item.correctAns}</td>
//                     <td>{item.optA}</td>
//                     <td>{item.optB}</td>
//                     <td>{item.optC}</td>
//                     <td>{item.optD}</td>

//                     <td colSpan={2}>
//                       <Button variant="outline-primary" onClick={() => handleEdit(item.id, accessToken)}>Edit</Button> &nbsp;
//                       <Button variant="outline-danger" onClick={() => handleDelete(item.id, accessToken)}>Delete</Button>
//                     </td>
//                   </tr>
//                 )
//               })
//                 :
//                 'Loading...'
//             }

//           </tbody>
//         </Table>

//       </div>
//     </>
//   )
// }

// export default AdminAssessmentQ



