import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home';

import Admin from './components/Pages/Admin';
import AdminUser from './components/Admin/Adminpages/AdminUser';

import PageNotFound from './components/Pages/PageNotFound';
import CoursesDisplay from './components/Courses/CoursesDisplay';
import CourseScreen from './components/User/CourseScreen';
import Modules from './components/User/Modules';
import Test from './components/Pages/Test';
// import AssessmentScreen from './components/User/AssessmentScreen';
// import AssessmentQuiz from './components/User/AssessmentQuiz';

const App = () => {

  // const NotFound = () => {
  //   return <>Not Found</>
  // }
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/admin' element={<Admin />} />
            {/* <Route path='/adminuser' element={<AdminUser />} /> */}
            <Route path='/coursesDisplay' element={<CoursesDisplay />} />
            <Route path='/courseScreen/:courseId' element={<CourseScreen />} />
            <Route path='/modules' element={<Modules />} />
            {/* <Route path='/assessmentScreen' element={<AssessmentScreen />} /> */}
            {/* <Route path='/assessmentQuiz' element={<AssessmentQuiz />} /> */}
            <Route path='/test' element={<Test />} />


            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
