import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home';
import Course from './components/Pages/Course';
import Login from './components/Pages/Login';
import About from './components/Pages/About';
import Admin from './components/Pages/Admin';
import PageNotFound from './components/Pages/PageNotFound';
import CoursesDisplay from './components/Courses/CoursesDisplay';
import AdminMain from './components/Admin/AdminMain';

const App = () => {

  // const NotFound = () => {
  //   return <>Not Found</>
  // }
  return (
    <>

      {/* <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Course />} />

          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter> */}

      {/* <Home /> */}
      {/* <Admin/> */}
      {/* <CoursesDisplay/> */}
      <AdminMain/>
    </>
  )
}

export default App
