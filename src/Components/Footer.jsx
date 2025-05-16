import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaGoogle, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-3 pb-3 w-100">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-2">
            <h5 className="fw-bold">Happy Shopping </h5>
            <p className="text-muted small">Get monthly updates and free resources.</p>
            <div className="input-group">
              {/* <input type="email" className="form-control" placeholder="Enter your email" /> */}
              {/* <button className="btn btn-primary">Subscribe</button> */}
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="small mb-1"><strong>Phone:</strong> +1 (0) 000 0000 001</p>
            <p className="small mb-1"><strong>Email:</strong> yourmail@example.com</p>
            <p className="small"><strong>Address:</strong> 1234 Street Name, City, AA 99999</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled small">
              {/* <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/products" className="text-white text-decoration-none">Products</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Get in Touch</Link></li>
              <li><Link to="/terms" className="text-white text-decoration-none">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link></li> */}
                    <li><Link to="/" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Products</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Get in Touch</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Terms & Conditions</Link></li>
              {/* <li><Link to="/" className="text-white text-decoration-none">Privacy Policy</Link></li> */}
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="text-center mt-2">
          <a href="#" className="text-white mx-2"><FaFacebookF size={20} /></a>
          <a href="#" className="text-white mx-2"><FaInstagram size={20} /></a>
          <a href="#" className="text-white mx-2"><FaTwitter size={20} /></a>
          <a href="#" className="text-white mx-2"><FaYoutube size={20} /></a>
          {/* <a href="#" className="text-white mx-2"><FaGoogle size={20} /></a>
          <a href="#" className="text-white mx-2"><FaBehance size={20} /></a> */}
        </div>

        <div className="text-center border-top mt-3 pt-2">
          <p className="small text-white mb-0">&copy; 2025 ShopEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
