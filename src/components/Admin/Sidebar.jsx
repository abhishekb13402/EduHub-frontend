// import React from 'react'

const Sidebar = () => {
    return (
        <><br/><br/><br/>
            <div className="flex-shrink-0 p-3" style={{width: "280px"}}>
                <a href="#" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">

                    <span className="fs-5 fw-semibold">Admin</span>
                </a>
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#user-collapse" aria-expanded="false">
                            User
                        </button>
                        <div className="collapse" id="user-collapse" >
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">view</a></li>
                                {/* <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Update</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li> */}
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#courses-collapse" aria-expanded="false">
                            Courses
                        </button>
                        <div className="collapse" id="courses-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Get Courses</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Add Courses</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Update Courses</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Delete Courses</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#modules-collapse" aria-expanded="false">
                            Modules
                        </button>
                        <div className="collapse" id="modules-collapse" >
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Get Modules</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Add Modules</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Update Modules</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Delete Modules</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#enrollments-collapse" aria-expanded="false">
                            Enrollments
                        </button>
                        <div className="collapse" id="enrollments-collapse" >
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Get Enrollments</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Delete Enrollments</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#assessmentquestions-collapse" aria-expanded="false">
                            Assessment Questions
                        </button>
                        <div className="collapse" id="assessmentquestions-collapse" >
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Get</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Add</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Update</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Delete</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#result-collapse" aria-expanded="false">
                             Results
                        </button>
                        <div className="collapse" id="result-collapse" >
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Get</a></li>
                              
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#certificate-collapse" aria-expanded="false">
                             Certificate
                        </button>
                        <div className="collapse" id="certificate-collapse" >
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                {/* <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Get</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Add</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Update</a></li>
                                <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Delete</a></li> */}
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#logout-collapse" aria-expanded="false">
                            Log Out
                        </button>
                        
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar