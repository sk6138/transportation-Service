import React, { useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import '../Css/ShippingCalculater.css';

const libraries = ['places'];

const ShippingCalculator = () => {
  const [goodsType, setGoodsType] = useState('general');
  const [weight, setWeight] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [vehicleType, setVehicleType] = useState('truck');
  const [distance, setDistance] = useState(null);
  const [price, setPrice] = useState(null);

  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Function to calculate distance using Google Maps API
  const calculateDistance = () => {
    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === 'OK') {
          const distanceInKm = response.rows[0].elements[0].distance.value / 1000; // meters to km
          setDistance(distanceInKm);
          calculatePrice(distanceInKm);
        } else {
          console.error('Error fetching distance:', status);
        }
      }
    );
  };

  // Function to calculate price based on distance, weight, and vehicle type
  const calculatePrice = (distanceInKm) => {
    const baseRate = vehicleType === 'truck' ? 2 : 1.5; // different rate for vehicle types
    const weightFactor = weight * 0.1; // charge per kg
    const typeFactor = goodsType === 'fragile' ? 1.2 : 1; // additional charge for fragile goods

    const totalPrice = distanceInKm * baseRate + weightFactor * typeFactor;
    setPrice(totalPrice.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateDistance(); // Call the distance calculation function
  };

  return (
    <div className="shipping-calculator">
      <h2>Shipping Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Type of Goods:</label>
          <select value={goodsType} onChange={(e) => setGoodsType(e.target.value)} required>
            <option value="general">General</option>
            <option value="fragile">Fragile</option>
            <option value="perishable">Perishable</option>
          </select>
        </div>

        <div className="form-group">
          <label>Weight (in kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Origin (From):</label>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="Enter city or address"
            required
          />
        </div>

        <div className="form-group">
          <label>Destination (To):</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter city or address"
            required
          />
        </div>

        <div className="form-group">
          <label>Vehicle Type:</label>
          <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
          </select>
        </div>

        <button type="submit">Calculate Shipping</button>
      </form>

      {/* Display the distance and price */}
      {distance && (
        <div className="result">
          <p>Distance: {distance} km</p>
          <p>Estimated Shipping Price: ${price}</p>
        </div>
      )}
    </div>
  );
};

export default ShippingCalculator;
