import React, { useState, useEffect } from 'react'
import axios from "axios";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const AdminUserAPI = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [adduname, setuname] = useState('')
    const [addupassword, setupassword] = useState('')
    const [addufullname, setufullname] = useState('')
    const [adduemail, setuemail] = useState('')

    const [editeId, setediteId] = useState('')
    const [editeuname, setediteuname] = useState('')
    const [editeupassword, setediteupassword] = useState('')
    const [editeufullname, setediteufullname] = useState('')
    const [editeuemail, setediteuemail] = useState('')


    const userdata = [
        {
            Id: 1,
            UserName: 'Om',
            UserPassword: 'om123',
            FullName: 'Om Bhatt',
            UserEmail: 'omb@gmail.com'
        },
        {
            Id: 2,
            UserName: 'vv',
            UserPassword: 'omvvv123',
            FullName: 'Om Bhdsatt',
            UserEmail: 'omb@dsd.com'
        },
        {
            Id: 3,
            UserName: 'Orttm',
            UserPassword: 'om123',
            FullName: 'Om ddddd',
            UserEmail: 'omb@gmtreail.com'
        }

    ]
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
        // setData(userdata)
        console.log(getData, "getdata");
    }, [])
    
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkFiaGkiLCJleHAiOjE3MTA4NDc3ODgsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI0NCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI0NCJ9.hCjtbW3SasqDF1hbic6sBiOqYSwoI_nfKlCwVqEkUf0'

    const getData = () => {
        axios.get('http://localhost:5146/api/RegisterUser', { headers: { 'Authorization': `Bearer ${accessToken}` } })
            .then((result) => {
                setData(result.data)
            }).catch((error) => {
                console.log(error)
            })
        console.log(data, "result");
    }

    const handleEdit = (id) => {
        // alert(id);
        handleShow();
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete this user") == true) {
            alert(id);
        }
    }

    const handleUpdate = (id) => {

    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <input type='text' className='form-control' onClick={(e) => setuname(e.target.value)} value={adduname} placeholder='Add User Name'></input>
                    </Col>
                </Row><br />
                <Row>
                    <Col>
                        <input type='text' className='form-control' onClick={(e) => setupassword(e.target.value)} value={addupassword} placeholder='Add User Password'></input>
                    </Col>
                </Row><br />
                <Row>
                    <Col>
                        <input type='text' className='form-control' onClick={(e) => setufullname(e.target.value)} value={addufullname} placeholder='Add Full Name'></input>
                    </Col>
                </Row><br />
                <Row>
                    <Col>
                        <input type='text' className='form-control' onClick={(e) => setuemail(e.target.value)} value={adduemail} placeholder='Add User Email'></input>
                    </Col>
                </Row><br />
                <Row>
                    <Col>
                        <Button variant="outline-primary">Add User</Button>
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
                        <th >Id</th>
                        <th >User Name</th>
                        <th >FullName</th>
                        <th >UserEmail</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ? data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.fullName}</td>
                                    <td>{item.userEmail}</td>
                                    <td colSpan={2}>
                                        <Button variant="outline-primary" onClick={() => handleEdit(item.Id)}>Edit</Button> &nbsp;
                                        <Button variant="outline-danger" onClick={() => handleDelete(item.Id)}>Delete</Button>
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

            {/* update user */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <input type='text' className='form-control' onClick={(e) => setediteuname(e.target.value)} value={editeuname} placeholder='Update User Name'></input>
                        </Col>
                    </Row><br />
                    <Row>
                        <Col>
                            <input type='text' className='form-control' onClick={(e) => setediteupassword(e.target.value)} value={editeupassword} placeholder='Update User Password'></input>
                        </Col>
                    </Row><br />
                    <Row>
                        <Col>
                            <input type='text' className='form-control' onClick={(e) => setediteufullname(e.target.value)} value={editeufullname} placeholder='Update Full Name'></input>
                        </Col>
                    </Row><br />
                    <Row>
                        <Col>
                            <input type='text' className='form-control' onClick={(e) => setediteuemail(e.target.value)} value={editeuemail} placeholder='Update User Email'></input>
                        </Col>
                    </Row><br />
                    <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update User
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default AdminUserAPI