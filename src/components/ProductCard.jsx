import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { useWishlist } from '../contexts/WishlistContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const { isInWishlist, toggleWishlist } = useWishlist()

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalf = rating % 1 >= 0.5
    const stars = []
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>)
    }
    if (hasHalf) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>)
    }
    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>)
    }
    return stars
  }

  return (
    <div className="product-card fade-in">
      <button
        className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
        onClick={() => toggleWishlist(product)}
      >
        <i className={`${isInWishlist(product.id) ? 'fas' : 'far'} fa-heart`}></i>
      </button>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <div className="brand">{product.brand}</div>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <div className="rating">{renderStars(product.rating)}</div>
        <div className="price">${product.price.toFixed(2)}</div>
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product, product.availableSizes[0], 1)}
        >
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard