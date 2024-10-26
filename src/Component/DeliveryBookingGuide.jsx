import React, { useState } from 'react';
import '../Css/DeliveryBookingGuide.css';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { BsQuestionDiamond } from 'react-icons/bs';

const DeliveryBookingGuide = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Choose Your Delivery Type",
      description: "Select the type of delivery you need, from same-day to scheduled or express delivery.",
      imageUrl: "https://i.postimg.cc/ZqFqkxTq/choose-delivery-type.jpg",
    },
    {
      id: 2,
      title: "Provide Pickup & Drop-off Details",
      description: "Enter the address details of the pickup location and the destination.",
      imageUrl: "https://i.postimg.cc/Sx7JLx91/provide-details.jpg",
    },
    {
      id: 3,
      title: "Select Date & Time",
      description: "Choose a convenient date and time for the pickup and delivery.",
      imageUrl: "https://i.postimg.cc/yYFBCf50/select-date-time.jpg",
    },
    {
      id: 4,
      title: "Confirm and Book",
      description: "Review your details, select payment method, and confirm the booking.",
      imageUrl: "https://i.postimg.cc/V6bTt6g3/confirm-booking.jpg",
    },
  ];

  const toggleGuideVisibility = () => {
    setShowGuide(prevShowGuide => !prevShowGuide);
    setExpandedStep(null); // Collapse any open step when toggling the main guide
  };

  const handleStepClick = (id) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  return (
    <div className="delivery-booking-guide container">
      {/* Main question with expandable animation */}
      <h2 className="guide-title" onClick={toggleGuideVisibility}>
        
       Q.  How to Book a Delivery <BsQuestionDiamond />  {showGuide ? <FaChevronUp /> : <FaChevronDown />}
      </h2>

      {/* Conditionally render the guide steps */}
      {showGuide && (
        <div className="guide-steps">
          {steps.map((step) => (
            <div key={step.id} className={`guide-step ${expandedStep === step.id ? "expanded" : ""}`}>
              <div className="step-header" onClick={() => handleStepClick(step.id)}>
                <div className="step-title">
                  {expandedStep === step.id ? <FaChevronUp /> : <FaChevronDown />} {step.title}
                </div>
              </div>
              {expandedStep === step.id && (
                <div className="step-content">
                  <img src={step.imageUrl} alt={step.title} className="step-image" />
                  <p className="step-description">{step.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeliveryBookingGuide;
