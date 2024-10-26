import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Css/RentCarForm.css';

const RentCarForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    otp: '',
    license: '',
    aadhar: '',
    startDate: null,
    endDate: null,
    deliveryAddress: ''
  });
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDateChange = (date, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: date
    }));
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        if (!formData.name || !formData.phone) {
          setError('Name and Phone are required.');
          return false;
        }
        if (!/^\d{10}$/.test(formData.phone)) {
          setError('Please enter a valid 10-digit phone number.');
          return false;
        }
        setError('');
        return true;
      case 2:
        if (!formData.otp || !formData.license || !formData.aadhar) {
          setError('OTP, License, and Aadhar Card Number are required.');
          return false;
        }
        setError('');
        return true;
      case 3:
        if (!formData.startDate || !formData.endDate) {
          setError('Please select both start and end dates.');
          return false;
        }
        setError('');
        return true;
      case 4:
        if (!formData.deliveryAddress) {
          setError('Delivery Address is required.');
          return false;
        }
        setError('');
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSendOtp = () => {
    if (validateStep()) {
      setOtpSent(true);
      alert('OTP has been sent to your phone.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      alert('Booking Submitted Successfully!');
      setFormData({
        name: '',
        phone: '',
        otp: '',
        license: '',
        aadhar: '',
        startDate: null,
        endDate: null,
        deliveryAddress: ''
      });
      setStep(1);
      setOtpSent(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Customer Information</h2>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
            {otpSent && (
              <>
                <label>OTP</label>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="Enter OTP"
                  required
                />
              </>
            )}
            {!otpSent ? (
              <button onClick={handleSendOtp}>Send OTP</button>
            ) : (
              <button onClick={nextStep}>Next</button>
            )}
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Verification Details</h2>
            <label>Driving License Number</label>
            <input
              type="text"
              name="license"
              value={formData.license}
              onChange={handleChange}
              placeholder="Enter Driving License Number"
              required
            />
            <label>Aadhar Card Number</label>
            <input
              type="text"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              placeholder="Enter Aadhar Card Number"
              required
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Select Rental Dates</h2>
            <label>Start Date</label>
            <DatePicker
              selected={formData.startDate}
              onChange={(date) => handleDateChange(date, 'startDate')}
              minDate={new Date()}
              placeholderText="Select start date"
              dateFormat="dd/MM/yyyy"
            />
            <label>End Date</label>
            <DatePicker
              selected={formData.endDate}
              onChange={(date) => handleDateChange(date, 'endDate')}
              minDate={formData.startDate || new Date()}
              placeholderText="Select end date"
              dateFormat="dd/MM/yyyy"
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Step 4: Delivery Address</h2>
            <label>Car Delivery Address</label>
            <input
              type="text"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
              placeholder="Enter delivery address"
              required
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={handleSubmit}>Submit Booking</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="rent-car-form">
      <h1>Rent a Car</h1>
      <SwitchTransition>
        <CSSTransition key={step} classNames="fade" timeout={300}>
          <div className="form-step">{renderStep()}</div>
        </CSSTransition>
      </SwitchTransition>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default RentCarForm;
