// import React from 'react'

import Content from "./Content"
import AdminNav from "./AdminNav"

const AdminMain = () => {
    return (
        <>
                <div className="container">
                    <AdminNav />

                    <Content />
                </div>
        </>
    )
}

export default AdminMain