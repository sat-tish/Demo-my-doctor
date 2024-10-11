
import './Navigation.css';
import React from 'react';

function Navigation() {
  return (
    <>
     <section className="navigation">
    <nav className="navbar navbar-expand-lg bg-main-grey">
      <div className="container-fluid">
        <a className="navbar-brand ms-lg-5" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a
                className="nav-link active text-uppercase"
                aria-current="page"
                href="index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-uppercase dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="about.html">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="blogs.html">
                Blogs
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link text-uppercase" href="contact.html">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
    </>
  )
}

export default Navigation
