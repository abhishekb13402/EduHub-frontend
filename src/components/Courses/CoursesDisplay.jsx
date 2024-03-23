// import React from 'react'
import Languagetags from './Languagetags'
import '../../App.css';
import './CourseDisplay.css';
import Navbar from '../Navbar/Navbar';

const CoursesDisplay = () => {
  return (
    <>
    <Navbar/>
      <br /><br /><br /><br />
      <div className='container' id='coursesDisplay'>
        <h2>Courses Display</h2>
        {/* <div className='LanguagetagsComponent'> */}
          <Languagetags />
        {/* </div> */}

        <div className="container">
          <div className="searchsection">
            <button type="button" class="btn btn-outline-primary">Get All The Courses</button>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search By Course Name" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search Course</button>
            </form>
          </div>
        </div>

        <div className="Coursecontainer">
        
          <div className="card-container">
            <div className="card">
              <img src="/public_img/carouselimg1.jpg" />
              <div className="card-content">
                <h1>Student Feedback System, Website</h1>
                <p>It is a website built using HTML, CSS, JavaScript, PHP, Sql.</p>
                {/* <!-- <a href="" className="card-button">Github Link</a> --> */}
                <button type="button" className="btn btn-outline-primary btn-sm">View Details</button>
              </div>
            </div>

            <div className="card">
              <img src="/public_img/carouselimg1.jpg" />
              <div className="card-content">
                <h1>Student Feedback System, Website</h1>
                <p>It is a website built using HTML, CSS, JavaScript, PHP, Sql.</p>
                <button type="button" className="btn btn-outline-primary btn-sm">View Details</button>
                {/* <!-- <a href="" className="card-button">Github Link</a> --> */}
              </div>
            </div>
            <div className="card">
              <img src="/public_img/carouselimg1.jpg" />
              <div className="card-content">
                <h1>Student Feedback System, Website</h1>
                <p>It is a website built using HTML, CSS, JavaScript, PHP, Sql.</p>
                <button type="button" className="btn btn-outline-primary btn-sm">View Details</button>
                {/* <!-- <a href="" className="card-button">Github Link</a> --> */}
              </div>
            </div>

            <div className="card">
              <img src="/public_img/carouselimg1.jpg" />
              <div className="card-content">
                <h1>Student Feedback System, Website</h1>
                <p>It is a website built using HTML, CSS, JavaScript, PHP, Sql.</p>
                <button type="button" className="btn btn-outline-primary btn-sm">View Details</button>
                {/* <!-- <a href="" className="card-button">Github Link</a> --> */}
              </div>
            </div>
          </div>




        </div>
      </div>
    </>
  )
}

export default CoursesDisplay