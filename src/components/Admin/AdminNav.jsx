import React from 'react'

const AdminNav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
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
            </nav>
        </>
    )
}

export default AdminNav
