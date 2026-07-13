import React from "react";
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="navbar navbar-color">
      <div className="container-fluid">
        <a className="navbar-brand"> Game Library</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
