


import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import '../Css/FreightForm.css';


const weightCategories = [
  { label: '200-500 kg', min: 200, max: 500, image: '/images/weight-200-500.png' },
  { label: '500-1000 kg', min: 500, max: 1000, image: '/images/weight-500-1000.png' },
  { label: '1000-2000 kg', min: 1000, max: 2000, image: '/images/weight-1000-2000.png' },
  { label: '2000-5000 kg', min: 2000, max: 5000, image: '/images/weight-2000-5000.png' },
];

const vehicleOptions = [
  { name: 'Van', payload: 800, image: '/images/van.png' },
  { name: 'Small Truck', payload: 1500, image: '/images/small-truck.png' },
  { name: 'Large Truck', payload: 3000, image: '/images/large-truck.png' },
  { name: 'Heavy Duty Truck', payload: 5000, image: '/images/heavy-duty-truck.png' },
];

const FreightForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    weightCategory: '',
    vehicleType: '',
    pickupDate: addDays(new Date(), 1),
    pickupLocation: '',
    pickupCoordinates: { lat: null, lng: null },
    deliveryDate: addDays(new Date(), 1),
    deliveryLocation: '',
    deliveryCoordinates: { lat: null, lng: null },
  });
  const [error, setError] = useState('');
  const [distance, setDistance] = useState(null);

  const handleDateChange = (date, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: date
    }));
  };

  const isFieldValid = (field) => formData[field] !== '';
  const nextStep = () => { if (isStepValid()) setStep(step + 1); };
  const prevStep = () => setStep(step - 1);

  const isStepValid = () => {
    const fieldsToValidate = {
      1: ['weightCategory'],
      2: ['vehicleType'],
      3: ['pickupDate', 'pickupLocation'],
      4: ['deliveryDate', 'deliveryLocation'],
    };
    const fields = fieldsToValidate[step];
    for (let field of fields) {
      if (!isFieldValid(field)) {
        setError('Please fill out all required fields.');
        return false;
      }
    }
    setError('');
    return true;
  };

  const getCoordinates = async (address) => {
    
    const apiKey = process.env.REACT_APP_API_KEY;
    console.log(apiKey);
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return {
        lat: data.results[0].geometry.lat,
        lng: data.results[0].geometry.lng,
      };
    } else {
      setError('Unable to find location .');
      return null;
    }
  };

  const calculateHaversineDistance = (coords1, coords2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (coords2.lat - coords1.lat) * (Math.PI / 180);
    const dLon = (coords2.lng - coords1.lng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(coords1.lat * (Math.PI / 180)) *
        Math.cos(coords2.lat * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  const calculateDistance = async () => {
    try {
      const pickupCoords = await getCoordinates(formData.pickupLocation);
      const deliveryCoords = await getCoordinates(formData.deliveryLocation);
      if (pickupCoords && deliveryCoords) {
        const distanceInKm = calculateHaversineDistance(pickupCoords, deliveryCoords);
        setFormData((prevData) => ({
          ...prevData,
          pickupCoordinates: pickupCoords,
          deliveryCoordinates: deliveryCoords,
        }));
        setDistance(distanceInKm);
      }
    } catch (error) {
      setError('Error calculating distance. Please try again.');
    }
  };

  const handleSubmit = () => {
    if(distance == null || distance<=0){
      alert('Form Submitted is vaild due to your location input please enter valid location or use Nearest LandMark');
    } 
    else{
      alert('Form Submitted');
    }
    
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Select Weight Category</h2>
            <div className="weight-options">
              {weightCategories.map((category) => (
                <div
                  key={category.label}
                  className={`weight-card ${formData.weightCategory === category.label ? 'selected' : ''}`}
                  onClick={() => setFormData((prevData) => ({ ...prevData, weightCategory: category.label }))}
                >
                  <img src={category.image} alt={category.label} className="weight-image" />
                  <h3>{category.label}</h3>
                </div>
              ))}
            </div>
            <button  onClick={nextStep} disabled={!formData.weightCategory}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Select Vehicle Type</h2>
            <div className="vehicle-options">
              {vehicleOptions.map((vehicle) => (
                <div
                  key={vehicle.name}
                  className={`vehicle-card ${formData.vehicleType === vehicle.name ? 'selected' : ''}`}
                  onClick={() => setFormData((prevData) => ({ ...prevData, vehicleType: vehicle.name }))}
                >
                  <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
                  <h3>{vehicle.name}</h3>
                  <p>Max Payload: {vehicle.payload} kg</p>
                </div>
              ))}
            </div>
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep} disabled={!formData.vehicleType}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Enter Pickup Details</h2>
            <label>Pickup Date:</label>
            <DatePicker
              selected={formData.pickupDate}
              onChange={(date) => handleDateChange(date, 'pickupDate')}
              minDate={addDays(new Date(), 1)}
              dateFormat="dd/MM/yyyy"
              className="date-picker"
            />
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={(e) => setFormData((prevData) => ({ ...prevData, pickupLocation: e.target.value }))}
              placeholder="Pickup Address"
              required
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Enter Delivery Details</h2>
            <label>Delivery Date:</label>
            <DatePicker
              selected={formData.deliveryDate}
              onChange={(date) => handleDateChange(date, 'deliveryDate')}
              minDate={addDays(new Date(), 2)}
              dateFormat="dd/MM/yyyy"
              className="date-picker"
            />
            <input
              type="text"
              name="deliveryLocation"
              value={formData.deliveryLocation}
              onChange={(e) => setFormData((prevData) => ({ ...prevData, deliveryLocation: e.target.value }))}
              placeholder="Delivery Address"
              required
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={() => { calculateDistance(); nextStep(); }}>Review</button>
          </div>
        );
      case 5:
        return (
          <div className='review'  >
            <h3>Review Your Details</h3>
            <p><strong>Weight Category:</strong> {formData.weightCategory}</p>
            <p><strong>Vehicle Type:</strong> {formData.vehicleType}</p>
            <p><strong>Pickup Date:</strong> {formData.pickupDate.toLocaleDateString()}</p>
            <p><strong>Pickup Location:</strong> {formData.pickupLocation}</p>
            <p><strong>Delivery Date:</strong> {formData.deliveryDate.toLocaleDateString()}</p>
            <p><strong>Delivery Location:</strong> {formData.deliveryLocation}</p>
            {distance && <p><strong>Distance:</strong> {distance.toFixed(2)} km</p>}
            <button onClick={prevStep}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );
      default:
        return null;
    }

    
  };

  return (
    <div className="freight-form ">
      <h1>Freight Booking Form</h1>
      
       
          <div className="form-step ">{renderStep()}</div>
        
      
      {error && <p className="error">{error}</p>}
      {distance && (
        <p className="distance">
          Distance between pickup and delivery: {distance.toFixed(2)} km
        </p>
      )}
    </div>
  );
};

export default FreightForm;
