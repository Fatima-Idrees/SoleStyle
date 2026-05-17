import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react'

const Navbar = () => {
  const { getCartCount, setIsCartOpen } = useCart()
  const { user, logout, setShowAuthModal, setIsLogin } = useAuth()
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/products?search=${search}`)
      setSearch('')
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <i className="fas fa-shoe-prints"></i>
            <span>SoleStyle</span>
          </Link>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Shop</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search shoes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>

          <div className="nav-actions">
            {user ? (
              <div className="user-menu">
                <span className="user-name">
                  <i className="fas fa-user-circle"></i>
                  {user.name}
                </span>
                <button onClick={logout} className="logout-btn">Logout</button>
              </div>
            ) : (
              <button
                className="auth-btn"
                onClick={() => {
                  setIsLogin(true)
                  setShowAuthModal(true)
                }}
              >
                <i className="fas fa-user"></i>
                Sign In
              </button>
            )}

            <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
              <i className="fas fa-shopping-cart"></i>
              {getCartCount() > 0 && (
                <span className="cart-badge">{getCartCount()}</span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <AuthModal />
    </>
  )
}

const AuthModal = () => {
  const { showAuthModal, setShowAuthModal, isLogin, setIsLogin, login, signup, continueAsGuest } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  if (!showAuthModal) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (!isLogin && !name.trim()) {
      setError('Please enter your name')
      return
    }
    if (!email.trim()) {
      setError('Please enter your email')
      return
    }
    if (!password.trim()) {
      setError('Please enter your password')
      return
    }
    
    if (isLogin) {
      login(email, password)
    } else {
      signup(email, password, name)
    }
  }

  return (
    <div className="modal-overlay" onClick={() => setShowAuthModal(false)}>
      <div className="modal-content auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setShowAuthModal(false)}>&times;</button>
        <h2>{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '1rem' }}>
          {isLogin ? 'Sign in to continue' : 'Join SoleStyle today'}
        </p>
        {error && <p style={{ color: '#e91e63', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-submit">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
        <button onClick={continueAsGuest} className="guest-btn">
          Continue as Guest
        </button>
        <p className="auth-switch">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => {
            setIsLogin(!isLogin)
            setError('')
          }}>
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Navbar