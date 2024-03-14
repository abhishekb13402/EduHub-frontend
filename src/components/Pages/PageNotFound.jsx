import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './Footer'
import '../../App.css';
const PageNotFound = () => {
    return (
        <div>
            <Navbar />
            <div className="pagenotfound">
                <h1>404 Page Not Found</h1>
            </div>

            <Footer />
        </div>
    )
}

export default PageNotFound