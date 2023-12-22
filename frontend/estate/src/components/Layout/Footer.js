import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          {/* First column */}
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Royalestate</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate"><Link to="#"><i className="fab fa-twitter"></i></Link></li>
  <li className="ftco-animate"><Link to="#"><i className="fab fa-facebook"></i></Link></li>
  <li className="ftco-animate"><Link to="#"><i className="fab fa-instagram"></i></Link></li>
              </ul>
            </div>
          </div>

          {/* Second column */}
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Buy</h2>
              <ul className="list-unstyled">
                <li><Link to="#" className="py-2 d-block">Home For Sale</Link></li>
                <li><Link to="#" className="py-2 d-block">Open Houses</Link></li>
                {/* Add more list items for Buy section */}
              </ul>
            </div>
          </div>

          {/* Third column */}
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Sell</h2>
              <ul className="list-unstyled">
                <li><Link to="#" className="py-2 d-block">Sell Your Home</Link></li>
                <li><Link to="#" className="py-2 d-block">Get A Home Valuation</Link></li>
                {/* Add more list items for Sell section */}
              </ul>
            </div>
          </div>

          {/* Fourth column */}
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li><Link to="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></Link></li>
                  <li><Link to="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0<br />
              &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link><br />
              Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
