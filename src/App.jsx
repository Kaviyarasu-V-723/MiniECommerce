import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from "./Login";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import About from './Components/About';
import Register from "./Register";
import Header from './Components/Header'; 
import Home from './Components/Home';
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Footer from './Components/Footer';
import CartPage from './CartPage';
import Checkout from './Components/checkout';




function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const [authorized, setAuthorized] = useState(false);
  const location = useLocation();

  // Hide MyList on login and register pages
  const hideHeaderPaths = ['/login', '/register'];

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && < Header/>}
      <Routes>
        <Route path="/login" element={<Login setAuthorized={setAuthorized} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        



      </Routes>
      <Footer />
    </>
  );
}

export default App;
