import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';
import logo from '../../images/transperent.png'


function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" className='logo' />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link to="/listandkeys" className="nav-link">Listandkeys</Link>
        </li>
        <li className="nav-item">
          <Link to="/complifecycle" className="nav-link">Componentlifecycle</Link>
        </li>
        <li className="nav-item">
          <Link to="/pagination" className="nav-link">Pagination</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactus" className="nav-link">ContactUs</Link>
        </li>
        <li className="nav-item">
          <Link to="/usecontext" className="nav-link">usecontext</Link>
        </li>
        <li className="nav-item">
          <Link to="/paginationhooks" className="nav-link">PaginationHooks</Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus" className="nav-link">AboutUs</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header