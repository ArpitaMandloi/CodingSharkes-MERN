import React from "react";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h2>CarRental</h2>
        <p>
          Find your perfect car and enjoy a comfortable and
          hassle-free journey.
        </p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <a href="#">Home</a>
        <a href="#">Cars</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>📍 Indore, India</p>
        <p>📞 +91 9876543210</p>
        <p>✉️ carrental@gmail.com</p>
      </div>

      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 CarRental. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;