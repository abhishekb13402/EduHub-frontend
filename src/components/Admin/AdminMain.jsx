// import React from 'react'

import Content from "./Content"
import Sidebar from "./Sidebar"
import './Adminstyle.css';

const AdminMain = () => {
    return (
        <>
            <div className="maincontent">


                <div className="container">
                    <Sidebar />
                </div>
                <div className="content">
                    <Content />
                </div>
            </div>
        </>
    )
}

export default AdminMain