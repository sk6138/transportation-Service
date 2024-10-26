import React, { useState } from 'react';
import '../Css/DeliveryTracking.css';

const trackingData = {
  id: 'DEL001',
  name: 'John Doe',
  estimatedDeliveryTime: '2024-10-28 16:45',
  status: 'Out for Delivery',
  steps: [
    { label: 'Order Placed', completed: true },
    { label: 'Shipped', completed: true },
    { label: 'Out for Delivery', completed: true },
    { label: 'Delivered', completed: false }
  ]
};

const DeliveryTracking = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    if (trackingId === trackingData.id) {
      setTrackingInfo(trackingData);
    } else {
      alert('Tracking ID not found');
    }
  };

  const handleChange = (e) => {
    setTrackingId(e.target.value);
  };

  return (
    <div className="delivery-tracking">
      <h1>Track Your Delivery</h1>
      <form onSubmit={handleTrackingSubmit}>
        <label>Enter Tracking ID:</label>
        <input
          type="text"
          value={trackingId}
          onChange={handleChange}
          placeholder="Tracking ID"
          required
        />
        <button type="submit">Track</button>
      </form>

      {trackingInfo && (
        <div className="tracking-info">
          <h2>Tracking Information</h2>
          <p><strong>Tracking ID:</strong> {trackingInfo.id}</p>
          <p><strong>Customer Name:</strong> {trackingInfo.name}</p>
          <p><strong>Estimated Delivery Time:</strong> {trackingInfo.estimatedDeliveryTime}</p>
          <p><strong>Current Status:</strong> {trackingInfo.status}</p>

          <div className="progress-bar">
            {trackingInfo.steps.map((step, index) => (
              <div
                key={index}
                className={`progress-step ${step.completed ? 'completed' : ''}`}
              >
                <span className="step-label">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryTracking;
