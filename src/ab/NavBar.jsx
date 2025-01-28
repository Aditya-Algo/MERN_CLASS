import React from 'react';

export default function NavBar() {
  const navbarStyle = {
    backgroundColor: 'yellow',
    color: 'white',
  };

  const inputStyle = {
    borderRadius: '25px',
    backgroundColor: '#444',
    color: 'white',
  };

  const buttonStyle = {
    borderColor: '#28a745',
    color: '#28a745',
  };

  return (
    
    <nav className="navbar navbar-light" style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ fontSize: '24px', fontWeight: 'bold', color: 'red'}}>
          AD
        </a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={inputStyle}
          />
          <button className="btn btn-outline-success" type="submit" style={buttonStyle}>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
