import React, { useState } from 'react';
import '../Css/CancelBookingForm.css';

const CancelBookingForm = () => {
  const [formData, setFormData] = useState({
    bookingId: '',
    phoneNumber: '',
    otp: ''
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

  const validateForm = () => {
    if (!formData.bookingId || !formData.phoneNumber) {
      setError('Booking ID and Phone Number are required.');
      return false;
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setError('Please enter a valid 10-digit phone number.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSendOtp = () => {
    if (validateForm()) {
      // Replace with your actual OTP generation logic
      console.log('Sending OTP to', formData.phoneNumber);
      setOtpSent(true);
      alert('OTP has been sent to your phone number.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.otp) {
      setError('Please enter the OTP sent to your phone.');
      return;
    }
    // Replace with your actual cancellation logic
    alert('Booking cancelled successfully');
    setFormData({ bookingId: '', phoneNumber: '', otp: '' });
    setOtpSent(false);
  };

  return (
    <div className="cancel-booking-form">
      <h1>Cancel Booking</h1>
      <form onSubmit={handleSubmit}>
        <label>Booking ID</label>
        <input
          type="text"
          name="bookingId"
          value={formData.bookingId}
          onChange={handleChange}
          placeholder="Enter Booking ID"
          required
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter Phone Number"
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

        {error && <p className="error">{error}</p>}

        {!otpSent ? (
          <button type="button" onClick={handleSendOtp}>
            Send OTP
          </button>
        ) : (
          <button type="submit">Cancel Booking</button>
        )}
      </form>
    </div>
  );
};

export default CancelBookingForm;
