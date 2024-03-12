import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

// import Home from './pages/Home';
// import Courses from './pages/Courses';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact Component={Home} />
          <Route path="/courses" Component={Courses} />
          
        </Switch>
      </Router>
    </div>
  )
}

export default App
