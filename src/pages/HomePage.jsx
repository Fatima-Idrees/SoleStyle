import { Link } from 'react-router-dom'
import { shoesData } from '../shoesData'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

const HomePage = () => {
  const featuredShoes = shoesData.slice(0, 4)

  return (
    <>
      <div className="home-page">
        <section className="hero">
          <div className="hero-content">
            <h1>Step Into Style</h1>
            <p>Discover the perfect pair for every step of your journey</p>
            <Link to="/products" className="cta-btn">Shop Now →</Link>
          </div>
        </section>

        <section className="featured">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Featured Collection</h2>
            <div className="products-grid">
              {featuredShoes.map(shoe => (
                <ProductCard key={shoe.id} product={shoe} />
              ))}
            </div>
          </div>
        </section>

        <section className="categories">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Shop by Category</h2>
            <div className="category-grid">
              <Link to="/products?category=Men" className="category-card men">
                <h3>Men's</h3>
                <p>Shop Collection →</p>
              </Link>
              <Link to="/products?category=Women" className="category-card women">
                <h3>Women's</h3>
                <p>Shop Collection →</p>
              </Link>
              <Link to="/products?category=Kids" className="category-card kids">
                <h3>Kids'</h3>
                <p>Shop Collection →</p>
              </Link>
              <Link to="/products?category=Sports" className="category-card sports">
                <h3>Sports</h3>
                <p>Shop Collection →</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default HomePage