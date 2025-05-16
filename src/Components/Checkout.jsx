import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Checkout = () => {
  const location = useLocation();
  // Get cart items from location state or fallback to empty array
  const cartItems = location.state?.cartItems || [];
  const baseTotalPrice = location.state?.totalPrice || cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    dispatchOption: '',
    shippingCost: 0,  // Add shipping cost to formData
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Show QR modal instead of final alert and redirect
      setShowQRModal(true);
      // Now clear the cart only after successful order placement
      // localStorage.removeItem("cart");
      // window.dispatchEvent(new Event("cartUpdated"));
      // navigate('/products');
  
     
    }
  };
const [showBillingDetails, setShowBillingDetails] = useState(false);

  // Calculate the total price including shipping cost
  const updatedTotalPrice = baseTotalPrice + formData.shippingCost;

  return (
    <div className="container mt-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/cart">View Cart</Link></li>
          <li className="breadcrumb-item active" aria-current="page"><Link to="/checkout">Checkout</Link></li>
        </ol>
      </nav>

      {/* Checkout Steps Header */}
      <div className="checkout-steps mb-4">
        <div className="row justify-content-between">
          <div className={`col step ${step >= 1 ? 'active' : ''} text-center py-3`}>
            <div className="step-number">1</div>
            <div className="step-title">Address</div>
          </div>
          <div className={`col step ${step >= 2 ? 'active' : ''} text-center py-3`}>
            <div className="step-number">2</div>
            <div className="step-title">Dispatch</div>
          </div>
          <div className={`col step ${step >= 3 ? 'active' : ''} text-center py-3`}>
            <div className="step-number">3</div>
            <div className="step-title">Review & Payment</div>
          </div>
        </div>
      </div>
{/* Progress Bar */}
<div className="progress mb-4" style={{ height: '20px' }}>
  <div
    className="progress-bar"
    role="progressbar"
    style={{
      width: `${(step / 3) * 100}%`,
      backgroundColor: "#007bff",
    }}
    aria-valuenow={(step / 3) * 100}
    aria-valuemin="0"
    aria-valuemax="100"
  >
    Step {step} of 3
  </div>
</div>


      <div className="row">
        <div className="col-md-8">
          {step === 1 && (
            <div className="address-form">
              <h4 className="mb-4">Shipping Address</h4>
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address *</label>
                  <textarea
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="3"
                  />
                </div>

                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="dispatch-options">
              <h4 className="mb-4">Shipping Methods</h4>

              <div className="card mb-3">
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="dispatchOption"
                      id="postal"
                      value="India Postal"
                      checked={formData.dispatchOption === "India Postal"}
                      onChange={(e) => setFormData(prev => ({ ...prev, dispatchOption: e.target.value, shippingCost: 70 }))}
                    />
                    <label className="form-check-label" htmlFor="postal">
                      South India - India Postal (₹70.00, Estimated delivery 2-3 days)
                    </label>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="dispatchOption"
                      id="professional"
                      value="Professional Courier"
                      checked={formData.dispatchOption === "Professional Courier"}
                      onChange={(e) => setFormData(prev => ({ ...prev, dispatchOption: e.target.value, shippingCost: 70 }))}
                    />
                    <label className="form-check-label" htmlFor="professional">
                      South India - Professional Courier (₹70.00, Estimated delivery 2-3 working days)
                    </label>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => setStep(3)}
                  disabled={!formData.dispatchOption}  // Disable button if no option is selected
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="review-payment">
              <h4 className="mb-4">Review Order & Make Payment</h4>
              <div className="card mb-3">
                <div className="card-body">
                  <h5>Shipping Address</h5>
                  <p>{formData.firstName} {formData.lastName}</p>
                  <p>{formData.address}</p>
                  <p>{formData.email}</p>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <h5>Dispatch Method</h5>
                  <p>{formData.dispatchOption}</p>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
                <button
                  className="btn btn-success"
                  onClick={handleSubmit}
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>

        {showQRModal && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1050,
      animation: "fadeIn 0.3s",
    }}
  >
    <div
      style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "15px",
        width: "90%",
        maxWidth: "500px",
        textAlign: "center",
        position: "relative",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Close Button */}
      <button
        onClick={() => setShowQRModal(false)}
        style={{
          position: "absolute",
          top: "10px",
          right: "15px",
          background: "none",
          border: "none",
          fontSize: "26px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        aria-label="Close"
      >
        &times;
      </button>

      <h3 style={{ marginBottom: "20px", fontSize: "22px", fontWeight: "500" }}>
        Choose Your Payment Method
      </h3>
       {/* Billing Details Section */}
<div
  style={{
    textAlign: "left",
    marginTop: "25px",
    background: "#f5f5f5",
    padding: "15px",
    borderRadius: "10px",
  }}
>
<div style={{ 
    padding: '16px',
    border: '1px solid #eee',
    borderRadius: '6px',
    fontSize: '14px'
}}>
    <h4 style={{
        margin: '0 0 12px 0',
        fontSize: '15px',
        fontWeight: '600',
        color: '#333'
    }}>
        Billing Summary
    </h4>
    
    <div style={{ marginBottom: '10px' }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '6px'
        }}>
            <span>Subtotal ({cartItems.length} items)</span>
            <span>₹{baseTotalPrice.toFixed(2)}</span>
        </div>
        
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '6px'
        }}>
            <span>Shipping</span>
            <span>₹{formData.shippingCost.toFixed(2)}</span>
        </div>
    </div>
    
    <div style={{ 
        borderTop: '1px dashed #e0e0e0',
        paddingTop: '10px',
        marginTop: '10px',
        fontWeight: '500'
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <span>Total</span>
            <span>₹{updatedTotalPrice.toFixed(2)}</span>
        </div>
    </div>
</div>
</div>



      {/* Payment Method Dropdown */}
      <select
        className="form-select mb-4"
        style={{
          fontSize: "14px",
          padding: "12px",
          width: "100%",
          marginTop:"15px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          outline: "none",
        }}
        value={selectedMethod}
        onChange={(e) => setSelectedMethod(e.target.value)}
      >
        <option value="">-- Select Payment Method --</option>
        <option value="PhonePe">PhonePe</option>
        <option value="Google Pay">Google Pay</option>
        <option value="Paytm">Paytm</option>
        <option value="Cash on Delivery">Cash on Delivery</option>
      </select>

      {selectedMethod && selectedMethod !== "Cash on Delivery" && (
        <>
          <p style={{ fontSize: "16px", marginBottom: "15px" }}>
            
          </p>
         
          {/* Display QR code */}
          
          {/* UPI Payment Button */}
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "5px",
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              width: "100%",
              marginTop: "10px",
            }}
            onClick={() => {
              alert("Order placed successfully!");
              localStorage.removeItem("cart");
              window.dispatchEvent(new Event("cartUpdated"));
              setShowQRModal(false);
              navigate("/");
            }}
            
          >
            Proceed with Payment
          </button>
        </>
      )}

      {/* Cash on Delivery Button */}
      {selectedMethod === "Cash on Delivery" && (
        
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
            width: "100%",
            marginTop: "20px",
          }}
          onClick={() => {
            alert("Order placed successfully!");
            localStorage.removeItem("cart");
            window.dispatchEvent(new Event("cartUpdated"));
            setShowQRModal(false);
            navigate("/");
          }}
          
        >
          Confirm Cash on Delivery
        </button>
      )}
    </div>
  </div>
)}

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              
              {/* Display actual cart items count */}
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal ({cartItems.length} Items)</span>
                <span>₹{baseTotalPrice.toFixed(2)}</span>
              </div>
              
              <hr />

              {/* Display shipping cost */}
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>₹{formData.shippingCost.toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>₹{updatedTotalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
