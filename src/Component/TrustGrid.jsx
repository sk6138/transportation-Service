import React from 'react';
import '../Css/TrustGrid.css'; // Import the CSS file for styles

const TrustGrid = () => {
  const columns = [
    {
      id: 1,
      // title: "Fast Delivery",
      // description: "We ensure timely delivery of your goods with utmost care.",
      imageUrl: "url('https://i.postimg.cc/8PVPM3Zs/6821436-60537.jpg')", // Change this to your image URL
    },
    {
      id: 2,
      // title: "Reliable Service",
      // description: "Our service is trusted by thousands of customers worldwide.",
      imageUrl: "url('https://i.postimg.cc/sggzJR7f/28695080-onlinesupport-1.jpg')", // Change this to your image URL
    },
    {
      id: 3,
      // title: "Affordable Pricing",
      // description: "Get the best value for your money with our competitive rates.",
      imageUrl: "url('https://i.postimg.cc/6q6K1sgh/2324793-307721-P8-CY5-X-486.jpg')", // Change this to your image URL
    },
    {
      id: 4,
      // title: "24/7 Support",
      // description: "We are here to assist you anytime, anywhere.",
      imageUrl: "url('https://i.postimg.cc/0ysTt1SK/rb-82225.png')", // Change this to your image URL
    },
  ];

  return (
    <div className="trust-grid-container">
      {columns.map((column) => (
        <div
          key={column.id}
          className="trust-grid-item"
          style={{ backgroundImage: column.imageUrl }}
        >
          <div className="trust-grid-content">
            <h3 className="trust-grid-title">{column.title}</h3>
            <p className="trust-grid-description">{column.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustGrid;
