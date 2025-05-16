import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const About = () => {
  return (
    <>
      <div className="container py-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold">About Us</h1>
          <p className="lead text-muted">
            Welcome to <strong>React Ecommerce</strong>, your go-to platform for the best online shopping experience.
          </p>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-md-10">
            <p className="fs-5">
              We provide a variety of high-quality products with a seamless and user-friendly interface.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-10">
            <h2 className="mb-3">Our Mission</h2>
            <p className="fs-5">
              Our mission is to deliver the best online shopping experience by offering top-quality products
              with a hassle-free purchasing process.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-10">
            <h2 className="mb-3">Why Choose Us?</h2>
            <ul className="list-group list-group-flush fs-5">
              <li className="list-group-item">✅ Wide range of high-quality products</li>
              <li className="list-group-item">🔒 Secure payment methods</li>
              <li className="list-group-item">🚚 Fast and reliable delivery</li>
              <li className="list-group-item">📞 24/7 customer support</li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="mb-3">Get in Touch</h2>
            <p className="fs-5">
              Have any questions? Visit our <a href="/Contact" className="text-decoration-none">Contact Us</a> page to reach out to us!
            </p>
          </div>
        </div>
      </div> 

    </>
  );
};

export default About;
