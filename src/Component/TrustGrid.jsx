import React, { useState } from 'react';
import '../Css/TrustGrid.css'; // Import the CSS file for styles

const TrustGrid = () => {
  const [showAll, setShowAll] = useState(false); // State to control visibility

  const columns = [
    { id: 1, title: "Goods Delivery", imageUrl: "url('https://i.postimg.cc/LXHxgQRZ/cargo-van-delivery-transportation-with-open-container-full-construction-material-barrels-isometric-v.jpg')" },
    { id: 2, title: "Car for Rent", imageUrl: "url('https://i.postimg.cc/GmGK7nmy/2150796946.jpg')" },
    { id: 3, title: "All Over India", imageUrl: "url('https://i.postimg.cc/RFVTZ3Q7/4925394-2575825.jpg')" },
    { id: 4, title: "On Low Cost", imageUrl: "url('https://i.postimg.cc/x1n54FJp/1287068-155998-OVWJKP-626.jpg')" },
    { id: 5, title: "Fast Delivery", imageUrl: "url('https://i.postimg.cc/8PVPM3Zs/6821436-60537.jpg')" },
    { id: 6, title: "Reliable Service", imageUrl: "url('https://i.postimg.cc/sggzJR7f/28695080-onlinesupport-1.jpg')" },
    { id: 7, title: "Affordable Pricing", imageUrl: "url('https://i.postimg.cc/6q6K1sgh/2324793-307721-P8-CY5-X-486.jpg')" },
    { id: 8, title: "24/7 Support", imageUrl: "url('https://i.postimg.cc/0ysTt1SK/rb-82225.png')" },
  ];

  // Decide which columns to display based on the state
  const visibleColumns = showAll ? columns : columns.filter(column => column.id < 5);

  return (
    <div className="trust-grid-container">
      {visibleColumns.map(column => (
        <div
          key={column.id}
          className="trust-grid-item"
          style={{ backgroundImage: column.imageUrl }}
        >
          <div className="trust-grid-content">
            <h3 className="trust-grid-title">{column.title}</h3>
          </div>
        </div>
      ))}

      {/* Show More button */}
      <button onClick={() => setShowAll(!showAll)} className="show-more-button">
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default TrustGrid;
