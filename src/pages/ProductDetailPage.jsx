import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { shoesData } from '../shoesData'
import { useCart } from '../contexts/CartContext'
import ProductCard from '../components/ProductCard'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState('')
  const { addToCart } = useCart()

  useEffect(() => {
    const found = shoesData.find(p => p.id === parseInt(id))
    setProduct(found)
    if (found) {
      setMainImage(found.image)
      setSelectedSize(found.availableSizes[0])
    }
  }, [id])

  if (!product) {
    return <div className="container">Loading...</div>
  }

  const relatedProducts = shoesData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(<i key={i} className={i < rating ? 'fas fa-star' : 'far fa-star'}></i>)
    }
    return stars
  }

  return (
    <div className="product-detail-page container">
      <div className="product-detail">
        <div className="product-gallery">
          <img src={mainImage} alt={product.name} className="main-image" />
          <div className="thumbnail-list">
            {product.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} view ${idx + 1}`}
                className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="product-info-detail">
          <h1>{product.name}</h1>
          <p className="brand">{product.brand}</p>
          <div className="rating">{renderStars(product.rating)}</div>
          <div className="price">${product.price.toFixed(2)}</div>
          <p className="description">{product.description}</p>
          <p className="material"><strong>Material:</strong> {product.material}</p>

          <div className="size-selector">
            <h3>Select Size: <span>{selectedSize || ''}</span></h3>
            <div className="size-buttons">
              {product.availableSizes.map(size => (
                <button
                  key={size}
                  className={`size-option ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  US {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <h3>Quantity:</h3>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button
            className="add-to-cart-btn large"
            onClick={() => addToCart(product, selectedSize, quantity)}
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>
        </div>
      </div>

      <div className="related-products">
        <h2>You May Also Like</h2>
        <div className="products-grid">
          {relatedProducts.map(related => (
            <ProductCard key={related.id} product={related} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage