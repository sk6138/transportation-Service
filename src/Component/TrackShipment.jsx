import React, { useState } from 'react';
import '../Css/TrackShipment.css';

const TrackShipment = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [status, setStatus] = useState('');

  const trackShipment = (e) => {
    e.preventDefault();

    // Simulating shipment tracking (replace this with an actual API call)
    if (orderNumber === '12345') {
      setStatus('Your shipment is in transit and will arrive tomorrow.');
    } else {
      setStatus('Order number not found. Please check your order number.');
    }
  };

  return (
    <div className="track-shipment">
      <h2>Track Your Shipment</h2>
      <form onSubmit={trackShipment}>
        <div className="form-group">
          <label>Order Number:</label>
          <input 
            type="text" 
            value={orderNumber} 
            onChange={(e) => setOrderNumber(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Track</button>
      </form>

      {/* Display the status */}
      {status && <div className="status-result">{status}</div>}
    </div>
  );
};

export default TrackShipment;
