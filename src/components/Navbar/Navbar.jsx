// import React from 'react'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#"> <img src="/EduHub_logo.png" alt="EduHub Logo" height="40" /></a> */}
        {/* <a className="navbar-brand" href="#"> <span> EduHub 💡 </span> </a> */}
        <a className="navbar-brand" href="/">
          <span className="fw-bold text-primary" style={{ fontSize: '1.5rem' }}>EduHub💡</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home🏡</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">Aboutℹ️</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/course">Courses📚</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/login">Login🔐</a>
            </li>
            <li className="nav-item">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/admin">Admin🔐</a>
            </li>
            

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
