import React, { useEffect, useState } from 'react';
import './BookGridShimmer.css';

const shimmerArray = Array.from({ length: 8 }); // Customize as needed

const BookGridShimmer = () => {
  const [showNoResults, setShowNoResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNoResults(true);
    }, 40000); // 40 seconds

    return () => clearTimeout(timer); // Clear on unmount
  }, []);

  return (
    <>
      {showNoResults ? (
        <div style={{ textAlign: "center", fontSize: "20px", color: "#555" }}>
          No results found
        </div>
      ) : (
        <div className="book-grid-shimmer">
          {shimmerArray.map((_, index) => (
            <div key={index} className="grid-card shimmer">
              <div className="grid-image shimmer-box"></div>
              <div className="grid-title shimmer-line short"></div>
              <div className="grid-line shimmer-line"></div>
              <div className="grid-line shimmer-line"></div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BookGridShimmer;
