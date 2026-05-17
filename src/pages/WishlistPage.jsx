import { useWishlist } from '../contexts/WishlistContext'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

const WishlistPage = () => {
  const { wishlist } = useWishlist()

  if (wishlist.length === 0) {
    return (
      <div className="empty-wishlist container">
        <i className="far fa-heart"></i>
        <h2>Your wishlist is empty</h2>
        <p>Save your favorite items here!</p>
        <Link to="/products" className="cta-btn">Start Shopping</Link>
      </div>
    )
  }

  return (
    <div className="wishlist-page container">
      <h1>My Wishlist ({wishlist.length})</h1>
      <div className="products-grid">
        {wishlist.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default WishlistPage