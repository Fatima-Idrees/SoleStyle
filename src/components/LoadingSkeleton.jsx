const LoadingSkeleton = () => {
  return (
    <div className="skeleton-grid">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="skeleton-card">
          <div className="skeleton image-skeleton"></div>
          <div className="skeleton title-skeleton"></div>
          <div className="skeleton price-skeleton"></div>
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton