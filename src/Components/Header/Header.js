import './Header.css';
import React from 'react';
import bg1 from '../Images/BackgroundImages/bg6.jpg';

function Header() {
  return (
    <div className="header-main container-fluid" style={{ backgroundImage: `url(${bg1})` }}>
    <div className="h-100 container">
      <div className="h-100 row">
        <div className="col-12 col-lg-10 col xl-9 mx-auto">
          <div className="header-inner d-flex flex-column justify-content-center gap-3 align-items-center">
          <h1>Find Doctors Near You</h1>
            <div className="header-input d-flex flex-wrap ">
            <select name="" id="" className="header-form mb-2">
                <option value="">City</option>
                <option value="">Pune</option>
                <option value="">Mumbai</option>
              </select>
              <select name="" id="" className="header-form mb-2">
                <option value="">Area</option>
                <option value="">Pune</option>
                <option value="">Mumbai</option>
              </select>
              <input
                type="text"
                placeholder="Categories"
                className="header-form2 mb-2" />
                <button className="btn btn-danger btn-search mb-2">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header
