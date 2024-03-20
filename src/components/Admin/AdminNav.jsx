// import React from 'react'

import React, { useState } from 'react';
import AdminUser from './Adminpages/AdminUser';
import PageNotFound from '../Pages/PageNotFound';
import AdminCourse from './Adminpages/AdminCourse';
import AdminResult from './Adminpages/AdminResult';
import AdminModule from './Adminpages/AdminModule';
import AdminEnrollment from './Adminpages/AdminEnrollment';
import AdminCertificate from './Adminpages/AdminCertificate';
import AdminAssessmentQ from './Adminpages/AdminAssessmentQ';
import AdminUserAPI from './Adminpages/AdminUserAPI';

const AdminNav = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleUserClick = () => {
        setActiveComponent('User');
    };
    const handleCourseClick = () => {
        setActiveComponent('Course');
    };
    const handleModuleClick = () => {
        setActiveComponent('Module');
    };
    const handleEnrollmentClick = () => {
        setActiveComponent('Enrollment');
    };
    const handleAssQClick = () => {
        setActiveComponent('AssessmentQuestion');
    };
    const handleResultClick = () => {
        setActiveComponent('Result');
    };
    const handleCertificateClick = () => {
        setActiveComponent('Certificate');
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'User':
                return <AdminUserAPI />;
            case 'Course':
                return <AdminCourse />;
            case 'Module':
                return <AdminModule />
            case 'Enrollment':
                return <AdminEnrollment />;
            case 'AssessmentQuestion':
                return <AdminAssessmentQ />;
            case 'Result':
                return <AdminResult />;
            case 'Certificate':
                return <AdminCertificate />;
            default:
                return null;
        }
    };

    return (
        <>
            {/* old */}
            {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand pe-3" href="#">EduHub Admin</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">

                            <li className="nav-item dropdown pe-3">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">User</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Get</a></li>
                                    <li><a className="dropdown-item" href="#">Add</a></li>
                                    <li><a className="dropdown-item" href="#">Update</a></li>
                                    <li><a className="dropdown-item" href="#">Delete</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown pe-3">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Course</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Get</a></li>
                                    <li><a className="dropdown-item" href="#">Add</a></li>
                                    <li><a className="dropdown-item" href="#">Update</a></li>
                                    <li><a className="dropdown-item" href="#">Delete</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown pe-3">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Module</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Get</a></li>
                                    <li><a className="dropdown-item" href="#">Add</a></li>
                                    <li><a className="dropdown-item" href="#">Update</a></li>
                                    <li><a className="dropdown-item" href="#">Delete</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown pe-3">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Enrollment</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Get</a></li>
                                    <li><a className="dropdown-item" href="#">Delete</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown pe-3">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Assessment Question</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Get</a></li>
                                    <li><a className="dropdown-item" href="#">Add</a></li>
                                    <li><a className="dropdown-item" href="#">Update</a></li>
                                    <li><a className="dropdown-item" href="#">Delete</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown pe-3">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Result</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Get</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown pe-5">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Certificate</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Get</a></li>
                                </ul>
                            </li>

                            <button type="button" className="btn btn-light">Login</button>

                        </ul>

                    </div>
                </div>
            </nav> */}

            {/* new */}

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/admin">Admin</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item" >
                                <a className="nav-link active" aria-current="page" href="#" onClick={handleUserClick}>User</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={handleCourseClick}>Course</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={handleModuleClick}>Module</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={handleEnrollmentClick}>Enrollment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={handleAssQClick}>Assessment Question</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={handleResultClick}>Result</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={handleCertificateClick}>Certificate</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#" onClick={handleAdminLogout}>Logout</a>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
            {renderComponent()}
        </>
    )
}

export default AdminNav
