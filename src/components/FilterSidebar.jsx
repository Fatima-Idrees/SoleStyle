import { useState } from 'react'
import { categories, brands, sizes } from '../shoesData'

const FilterSidebar = ({ filters, setFilters }) => {
  const [priceRange, setPriceRange] = useState([0, 200])

  const handleCategoryChange = (category) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === category ? 'All' : category
    }))
  }

  const handleBrandChange = (brand) => {
    setFilters(prev => ({
      ...prev,
      brand: prev.brand === brand ? 'All' : brand
    }))
  }

  const handleSizeChange = (size) => {
    setFilters(prev => ({
      ...prev,
      size: prev.size === size ? null : size
    }))
  }

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value)
    setPriceRange([0, value])
    setFilters(prev => ({
      ...prev,
      maxPrice: value
    }))
  }

  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>
      
      <div className="filter-section">
        <h4>Category</h4>
        {categories.map(cat => (
          <label key={cat} className="filter-option">
            <input
              type="radio"
              name="category"
              checked={filters.category === cat}
              onChange={() => handleCategoryChange(cat)}
            />
            <span>{cat}</span>
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Brand</h4>
        {brands.map(brand => (
          <label key={brand} className="filter-option">
            <input
              type="radio"
              name="brand"
              checked={filters.brand === brand}
              onChange={() => handleBrandChange(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-slider">
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange[1]}
            onChange={handlePriceChange}
          />
          <div className="price-labels">
            <span>$0</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4>Size</h4>
        <div className="size-grid">
          {sizes.map(size => (
            <button
              key={size}
              className={`size-btn ${filters.size === size ? 'active' : ''}`}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button
        className="clear-filters"
        onClick={() => setFilters({ category: 'All', brand: 'All', size: null, maxPrice: 200, sort: 'featured' })}
      >
        Clear All Filters
      </button>
    </div>
  )
}

export default FilterSidebar