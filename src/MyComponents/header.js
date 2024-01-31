import React from 'react';
import {Link} from 'react-router-dom';

export default function header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Star Wars Movies</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort by
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/YearSort">Year</Link></li>
            <li><Link className="dropdown-item" to="/EpiSort">Episode</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
