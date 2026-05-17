import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { shoesData } from '../shoesData'
import ProductCard from '../components/ProductCard'
import FilterSidebar from '../components/FilterSidebar'
import LoadingSkeleton from '../components/LoadingSkeleton'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    category: 'All',
    brand: 'All',
    size: null,
    maxPrice: 200,
    sort: 'featured'
  })
  const [searchTerm, setSearchTerm] = useState('')
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const categoryParam = params.get('category')
    const searchParam = params.get('search')
    if (categoryParam) setFilters(prev => ({ ...prev, category: categoryParam }))
    if (searchParam) setSearchTerm(searchParam)
  }, [location])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      let filtered = [...shoesData]

      if (filters.category !== 'All') {
        filtered = filtered.filter(p => p.category === filters.category)
      }
      if (filters.brand !== 'All') {
        filtered = filtered.filter(p => p.brand === filters.brand)
      }
      if (filters.size) {
        filtered = filtered.filter(p => p.availableSizes.includes(filters.size))
      }
      filtered = filtered.filter(p => p.price <= filters.maxPrice)
      if (searchTerm) {
        filtered = filtered.filter(p =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }

      switch (filters.sort) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price)
          break
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price)
          break
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating)
          break
        default:
          filtered.sort((a, b) => a.id - b.id)
      }

      setProducts(filtered)
      setLoading(false)
    }, 500)
  }, [filters, searchTerm])

  return (
    <div className="products-page container">
      <div className="products-layout">
        <FilterSidebar filters={filters} setFilters={setFilters} />
        
        <div className="products-main">
          <div className="products-header">
            <p>{products.length} products found</p>
            <select
              value={filters.sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {loading ? (
            <LoadingSkeleton />
          ) : (
            <div className="products-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage