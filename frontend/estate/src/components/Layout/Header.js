import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Header = () => {
  return (
    <>
      <div className="top">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col">
              <p className="social d-flex">
              <Link to="#"><i className="fab fa-facebook"></i></Link>
<Link to="#"><i className="fab fa-twitter"></i></Link>
<Link to="#"><i className="fab fa-google"></i></Link>
<Link to="#"><i className="fab fa-pinterest"></i></Link>
              </p>
            </div>
            <div className="col d-flex justify-content-end">
              <p className="num"><span className="icon-phone"></span> +1700 12345 6789</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">MY <span>ESTATE</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/property" className="nav-link">Property</Link></li>
              <li className="nav-item"><Link to="/agents" className="nav-link">Agents</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
              <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
              <li className="nav-item cta"><Link to="/login" className="nav-link ml-lg-2"><span className="icon-user"></span> Sign-In</Link></li>
              <li className="nav-item cta cta-colored"><Link to="/register" className="nav-link"><span className="icon-pencil"></span> Sign-Up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
