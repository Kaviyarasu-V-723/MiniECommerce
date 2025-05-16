import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivacyPolicy = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
    
      <div className="container mt-5 text-black flex-grow-1">
        <h2>Privacy Policy</h2>
        <p>We respect your privacy. This policy explains how we collect, use, and protect your data.</p>

        <h4>1. Information We Collect</h4>
        <p>We collect personal information such as name, email, phone number, and payment details when you create an account or make a purchase.</p>

        <h4>2. How We Use Your Information</h4>
        <ul>
          <li>To process and fulfill your orders</li>
          <li>To improve user experience and customer service</li>
          <li>To send promotional emails and updates (you can opt-out anytime)</li>
        </ul>

        <h4>3. Data Protection</h4>
        <p>We implement security measures to protect your personal data from unauthorized access, alteration, or disclosure.</p>

        <h4>4. Cookies and Tracking Technologies</h4>
        <p>We use cookies to enhance your browsing experience and analyze website traffic. You can disable cookies in your browser settings.</p>

        <h4>5. Third-Party Services</h4>
        <p>We may share your data with trusted third-party services for payment processing and order fulfillment. These services are obligated to protect your information.</p>

        <h4>6. Data Retention</h4>
        <p>We retain your personal data as long as necessary to comply with legal obligations and provide our services.</p>

        <h4>7. Your Rights</h4>
        <p>You have the right to access, update, or delete your personal data. Contact us at privacy@shopease.com for assistance.</p>

        <h4>8. Changes to Privacy Policy</h4>
        <p>We may update this Privacy Policy periodically. Continued use of ShopEase signifies your acceptance of the changes.</p>

        <h4>9. Contact Us</h4>
        <p>If you have any questions about our Privacy Policy, please reach out to us at privacy@shopease.com.</p>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
