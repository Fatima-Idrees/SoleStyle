import { useCart } from '../contexts/CartContext'
import { useState } from 'react'

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  if (!isCartOpen) return null

  const handleCheckout = () => {
    setShowCheckout(true)
  }

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>&times;</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <i className="fas fa-shopping-bag"></i>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}`} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>Size: {item.size}</p>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="cart-item-actions">
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, item.size, parseInt(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                      <button onClick={() => removeFromCart(item.id, item.size)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
              <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </div>

      {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}
    </>
  )
}

const CheckoutModal = ({ onClose }) => {
  const { cart, getCartTotal, clearCart, setIsCartOpen, showToast } = useCart()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  })
  const [isPlacing, setIsPlacing] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsPlacing(true)
    setTimeout(() => {
      setIsPlacing(false)
      showToast('Order placed successfully! Thank you for shopping with us!')
      clearCart()
      setIsCartOpen(false)
      onClose()
    }, 1500)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content checkout-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Checkout</h2>
        
        <div className="checkout-layout">
          <form onSubmit={handleSubmit} className="checkout-form">
            <h3>Shipping Information</h3>
            <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
            <input type="text" name="city" placeholder="City" required onChange={handleChange} />
            <input type="text" name="zipCode" placeholder="Zip Code" required onChange={handleChange} />
            
            <h3>Payment Information</h3>
            <input type="text" name="cardNumber" placeholder="Card Number" required onChange={handleChange} />
            <div className="row">
              <input type="text" name="expiry" placeholder="MM/YY" required onChange={handleChange} />
              <input type="text" name="cvv" placeholder="CVV" required onChange={handleChange} />
            </div>
            
            <button type="submit" disabled={isPlacing} className="place-order-btn">
              {isPlacing ? 'Placing Order...' : `Place Order - $${getCartTotal().toFixed(2)}`}
            </button>
          </form>
          
          <div className="order-summary">
            <h3>Order Summary</h3>
            {cart.map(item => (
              <div key={`${item.id}-${item.size}`} className="summary-item">
                <span>{item.name} (Size {item.size}) x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="summary-total">
              <strong>Total:</strong>
              <strong>${getCartTotal().toFixed(2)}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDrawer