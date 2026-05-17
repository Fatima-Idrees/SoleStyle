import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3><i className="fas fa-shoe-prints"></i> SoleStyle</h3>
          <p>Your premier destination for premium footwear. Quality shoes for every step of your journey.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Shop All</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li><i className="fas fa-envelope"></i> support@solestyle.com</li>
            <li><i className="fas fa-phone"></i> +92 300 1234567</li>
            <li><i className="fas fa-map-marker-alt"></i> Main Boulevard, Gulberg,Lahore</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 SoleStyle. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer