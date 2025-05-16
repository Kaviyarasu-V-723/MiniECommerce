import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Checkout from "./Components/checkout";
import Dashboard from "./Components/Product";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Load cart items and set up listeners
  useEffect(() => {
    // Load cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    setIsInitialLoad(false);

    // Listen for cart updates from other tabs/windows
    const handleStorageChange = (e) => {
      if (e.key === "cart") {
        setCartItems(JSON.parse(e.newValue) || []);
      }
    };

    // Listen for custom events from same tab
    const handleCartUpdated = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(updatedCart);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cartUpdated", handleCartUpdated);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);


  // Add this state and effect to CartPage.js
const [cartVersion, setCartVersion] = useState(0);

useEffect(() => {
  const handleCartUpdated = () => {
    const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(updatedCart);
    setCartVersion(v => v + 1); // Force re-render
  };

  window.addEventListener("cartUpdated", handleCartUpdated);
  return () => window.removeEventListener("cartUpdated", handleCartUpdated);
}, []);

  const updateQuantity = (id, amount) => {
    let updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity + amount, 0) } : item
    );
    updatedCart = updatedCart.filter(item => item.quantity > 0);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    navigate('/checkout', { 
      state: { 
        cartItems: cartItems,
        totalPrice: totalPrice
      } 
    });
    
    // localStorage.removeItem("cart"); // Clear cart after successful order placement
    // window.dispatchEvent(new Event("cartUpdated"));
    
   
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button 
            className="btn btn-primary"
            onClick={() => navigate("/products")} // Adjust the path as needed
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items mb-4">
            {cartItems.map(item => (
              <div 
              key={item.id} 
              className="cart-item d-flex align-items-center justify-content-between border p-3 mb-2"
            >
              <img src={item.image} alt={item.name}  style={{
    width: '10%',
    height: '100px',
   
  }} />
              
              <div className="flex-grow-1 ms-3">
                <p className="mb-1">{item.name}</p>
                <p className="mb-1 fw-bold">₹{item.price}</p>
              </div>
            
              <div className="d-flex align-items-center">
                <button 
                  className="btn btn-sm btn-outline-secondary" 
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={isInitialLoad}
                >
                  -
                </button>
                <span className="mx-2 fw-bold">{item.quantity}</span>
                <button 
                  className="btn btn-sm btn-outline-secondary" 
                  onClick={() => updateQuantity(item.id, 1)}
                  disabled={isInitialLoad}
                >
                  +
                </button>
              </div>
            
              <p className="fw-bold ms-4">₹{item.price * item.quantity}</p>
            
              <button 
                className="btn btn-danger btn-sm ms-3" 
                onClick={() => removeItem(item.id)}
                disabled={isInitialLoad}
              >
                Remove
              </button>
            </div>
            
            ))}
          </div>

          <div className="card mb-3 ms-auto" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">Order Summary</h5>
    <div className="d-flex justify-content-between">
      <span>Subtotal:</span>
      <span>₹{totalPrice}</span>
    </div>
    <div className="d-flex justify-content-between">
      <span>Shipping:</span>
      <span>₹0</span> {/* Adjust as needed */}
    </div>
    <hr />
    <div className="d-flex justify-content-between fw-bold">
      <span>Total:</span>
      <span>₹{totalPrice}</span>
    </div>
  </div>
</div>

          <div className="d-flex justify-content-between">
            <button 
              className="btn btn-outline-primary"
              onClick={() => navigate("/products")} // Adjust the path as needed
            >
              Continue Shopping
            </button>
            <button 
              className="btn btn-primary"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
