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

  // const [addCourseName, setCourseName] = useState('')
  // const [addCourseDesc, setCourseDesc] = useState('')

  // const [editCourseId, seteditCourseId] = useState('')
  // const [editCourseName, setediteCourseName] = useState('')
  // const [editCourseDesc, seteditCourseDesc] = useState('')


  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const [adduname, setuname] = useState('')
  // const [addupassword, setupassword] = useState('')
  // const [addufullname, setufullname] = useState('')
  // const [adduemail, setuemail] = useState('')

  // const [editeId, setediteId] = useState('')
  // const [editeuname, setediteuname] = useState('')
  // const [editeupassword, setediteupassword] = useState('')
  // const [editeufullname, setediteufullname] = useState('')
  // const [editeuemail, setediteuemail] = useState('')


  // const userdata = [
  //   {
  //     "questionId": 1,
  //     "courseId": 1,
  //     "questionText": "string",
  //     "correctAns": "string",
  //     "optA": "string",
  //     "optB": "string",
  //     "optC": "string",
  //     "optD": "string"
  //   },
  //   {
  //     "questionId": 2,
  //     "courseId": 2,
  //     "questionText": "string",
  //     "correctAns": "string",
  //     "optA": "string",
  //     "optB": "string",
  //     "optC": "string",
  //     "optD": "string"
  //   },
  //   {
  //     "questionId": 3,
  //     "courseId": 2,
  //     "questionText": "string",
  //     "correctAns": "string",
  //     "optA": "string",
  //     "optB": "string",
  //     "optC": "string",
  //     "optD": "string"
  //   },
  //   {
  //     "questionId":4,
  //     "courseId": 1,
  //     "questionText": "string",
  //     "correctAns": "string",
  //     "optA": "string",
  //     "optB": "string",
  //     "optC": "string",
  //     "optD": "string"
  //   }

  // ]

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // getData();
  //   handleSearch();
  //   setData(userdata)
  //   // console.log(getData, "getdata");
  // }, [])

  // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkFiaGkiLCJleHAiOjE3MTA5MzQ3MzUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI0NCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI0NCJ9.KcdJ3njmaQ0XnJNpw0IRgBkxHdUNfC27MCEho74nQps';

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
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFiaGlAZ21haWwuY29tIiwiZXhwIjoxNzExMDE4OTk3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcyNDQiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjcyNDQifQ.FWwXF7yxVzbcyN2Qlw0mHmx0TGCmiY6QtJeIy0nyZjI'

useEffect(() => {
  handleSearch();
}, []);

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


return (
  <>
    <div className="container">
      <br /><br />
       {/* <Container>
          
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
        </Container> */}
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
                  <Button variant="outline-primary" onClick={() => handleEdit(item.questionId)}>Edit</Button>{' '}
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
      </Table>
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



