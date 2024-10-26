import React, { useState, useEffect } from 'react';
import '../Css/EnhancedDeliveryStatus.css'; // Import the CSS file for styles

const EnhancedDeliveryStatus = () => {
  const [deliveries, setDeliveries] = useState(0);
  const [ordersInProgress, setOrdersInProgress] = useState(0);
  const [Company, setCompany] = useState(0);
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0);

  // Animation function
  const animateValue = (start, end, duration, setValue) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const newValue = Math.floor(progress * (end - start) + start);
      setValue(newValue);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Start animations on component mount
  useEffect(() => {
    animateValue(0, 5000, 3000, setDeliveries); // Successful deliveries
    animateValue(0, 150, 3000, setOrdersInProgress); // Orders in progress
    animateValue(0, 7, 3000, setCompany); // Delivery speed in minutes
    animateValue(0, 98, 3000, setCustomerSatisfaction); // Customer satisfaction percentage
  }, []);

  return (
   
     
     <>
      <h3 className="deliveryHeading">Delivery Status</h3>
      <div className="delivery-metrics container">
       
        {/* Successful Deliveries */}
        <div className="metric">
          <h4 className="metric-title">Successful Deliveries</h4>
          <p className="metric-value">{deliveries}</p>
        </div>

        {/* Orders in Progress */}
        <div className="metric">
          <h4 className="metric-title">Orders in Progress</h4>
          <p className="metric-value">{ordersInProgress}</p>
        </div>

        {/* Average Delivery Speed */}
        <div className="metric">
          <h4 className="metric-title">Partner Company's</h4>
          <p className="metric-value">{Company} </p>
        </div>

        {/* Customer Satisfaction */}
        <div className="metric">
          <h4 className="metric-title">Customer Satisfaction</h4>
          <p className="metric-value">{customerSatisfaction}%</p>
        </div>
      </div>
      </>
    
  );
};

export default EnhancedDeliveryStatus;
