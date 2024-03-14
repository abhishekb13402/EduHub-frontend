// import React from 'react'
import Languagetags from './Languagetags'
import '../../App.css';
import './CourseDisplay.css';

const CoursesDisplay = () => {
  return (
    <>
      <br /><br /><br /><br />
      <div className='container'>
        <h2>Course Display</h2>
        {/* <div className='LanguagetagsComponent'> */}
          <Languagetags />
        {/* </div> */}

        <div className="container">
          <div className="searchsection">
            <button type="button" class="btn btn-outline-primary">Get All Course</button>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search By Course Name" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
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
                <button type="button" className="btn btn-outline-primary btn-sm">Enroll</button>
              </div>
            </div>

            <div className="card">
              <img src="/public_img/carouselimg1.jpg" />
              <div className="card-content">
                <h1>Student Feedback System, Website</h1>
                <p>It is a website built using HTML, CSS, JavaScript, PHP, Sql.</p>
                <button type="button" className="btn btn-outline-primary btn-sm">Enroll</button>
                {/* <!-- <a href="" className="card-button">Github Link</a> --> */}
              </div>
            </div>
            <div className="card">
              <img src="/public_img/carouselimg1.jpg" />
              <div className="card-content">
                <h1>Student Feedback System, Website</h1>
                <p>It is a website built using HTML, CSS, JavaScript, PHP, Sql.</p>
                <button type="button" className="btn btn-outline-primary btn-sm">Enroll</button>
                {/* <!-- <a href="" className="card-button">Github Link</a> --> */}
              </div>
            </div>

            <div className="card">
              <img src="/public_img/carouselimg1.jpg" />
              <div className="card-content">
                <h1>Student Feedback System, Website</h1>
                <p>It is a website built using HTML, CSS, JavaScript, PHP, Sql.</p>
                <button type="button" className="btn btn-outline-primary btn-sm">Enroll</button>
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