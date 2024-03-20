import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home';

import Admin from './components/Pages/Admin';
import AdminUser from './components/Admin/Adminpages/AdminUser';

import PageNotFound from './components/Pages/PageNotFound';
import CoursesDisplay from './components/Courses/CoursesDisplay';

const App = () => {

  // const NotFound = () => {
  //   return <>Not Found</>
  // }
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/admin' element={<Admin />} />
          {/* <Route path='/adminuser' element={<AdminUser />} /> */}
          <Route path='/coursesDisplay' element={<CoursesDisplay />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
