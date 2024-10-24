import React, { useState } from 'react';
import '../Css/ContactUs.css'; // Import the CSS file for styles

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({}); // To store validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Clear errors on change
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission (e.g., send data to an API)
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-form-container">
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <h2 className="contact-us-title">Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <div className='contactSubmitbtn'>
          <button type="submit" className="submit-button">Submit</button>
          </div>
          
        </form>
      </div>

      <div className="contact-us-image-container">
        <img
          src="https://i.postimg.cc/cCTnVSH1/1069998-104698-OMHUEL-519.jpg"
          alt="Contact Us"
          className="contact-us-image"
        />
      </div>
    </div>
  );
};

export default ContactUs;
