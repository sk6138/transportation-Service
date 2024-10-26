import React, { useState } from 'react';
import '../Css/PageSwitcher.css';
import FreightForm from './FreightForm';

const PageSwitcher = (props) => {
  console.log(props.start);
  const start= (props.start);
  const end = (props.end);
  const [activeButton, setActiveButton] = useState(null);

  const columns = [
    { id: 1, title: "Delivery Booking", imageUrl: "url('https://i.postimg.cc/LXHxgQRZ/cargo-van-delivery-transportation-with-open-container-full-construction-material-barrels-isometric-v.jpg')" },
    { id: 2, title: "Cancelation", imageUrl: "url('https://i.postimg.cc/GmGK7nmy/2150796946.jpg')" },
    { id: 3, title: "All Transactions", imageUrl: "url('https://i.postimg.cc/RFVTZ3Q7/4925394-2575825.jpg')" },
    { id: 4, title: "Delivery Tracking", imageUrl: "url('https://i.postimg.cc/x1n54FJp/1287068-155998-OVWJKP-626.jpg')" },
    { id: 5, title: "Rent a Car", imageUrl: "url('https://i.postimg.cc/8zLMT9Y8/rent-car-service.jpg')" },
    { id: 6, title: "Extend Date", imageUrl: "url('https://i.postimg.cc/J0tFw3ph/extend-date.jpg')" },
    { id: 7, title: "Special Car for Wedding", imageUrl: "url('https://i.postimg.cc/D0sHfMnd/wedding-car.jpg')" },
    { id: 8, title: "Booking Modification", imageUrl: "url('https://i.postimg.cc/7hX4vTqL/booking-modification.jpg')" },
  ];

  // Filter the columns to only include those with IDs 1 through 4
  // const filteredColumns = columns.filter(column => column.id >= 1 && column.id <= 4 );
  const filteredColumns = columns.filter(column => column.id >= start && column.id <= end);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const renderContent = () => {
    switch (activeButton) {
      case 1:
        return <div><FreightForm/></div>;
      case 2:
        return <div>Car for Rent Content</div>;
      case 3:
        return <div>Service Across India Content</div>;
      case 4:
        return <div>Affordable Services Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="page-switcher">
      {/* Grid container */}
      <div className="trust-grid-container">
        {filteredColumns.map(column => (
          <div
            key={column.id}
            onClick={() => handleButtonClick(column.id)}
            className={`trust-grid-item ${activeButton === column.id ? 'active' : ''}`}
            style={{ backgroundImage: activeButton === column.id ? 'none' : column.imageUrl }}
          >
            <div className={`trust-grid-content ${activeButton === column.id ? 'centered' : ''}`}>
              <h3 className="trust-grid-title">{column.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Conditionally render the content section only if an item is active */}
      {activeButton && (
        <div className="page-content">
          {renderContent()}
        </div>
      )}
    </div>
  );
};

export default PageSwitcher;
