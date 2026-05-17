import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import { WishlistProvider } from './contexts/WishlistContext'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import CartDrawer from './components/CartDrawer'
import Chatbot from './components/Chatbot'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import WishlistPage from './pages/WishlistPage'
import ContactPage from './pages/ContactPage'
import Toast from './components/Toast'
import './styles/components.css'
import './styles/chatbot.css'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Chatbot />
          <Toast />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App