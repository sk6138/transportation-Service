import React from 'react';
import { FaTruck, FaWarehouse, FaGlobe, FaClock } from 'react-icons/fa'; // Importing icons
import '../Css/ServicesOverview.css'; // Import CSS for styling

const services = [
  {
    icon: <FaTruck />,
    title: 'Freight Shipping',
    description: 'Fast and reliable freight shipping services across all major routes, ensuring timely delivery of your goods.',
  },
  {
    icon: <FaWarehouse />,
    title: 'Warehousing',
    description: 'Secure and organized warehousing solutions for your cargo, ensuring everything is stored safely.',
  },
  {
    icon: <FaGlobe />,
    title: 'Cross-country Delivery',
    description: 'Efficient cross-country delivery services to ensure your cargo reaches anywhere in the nation on time.',
  },
  {
    icon: <FaClock />,
    title: '24/7 Cargo Tracking',
    description: 'Real-time cargo tracking so you can monitor the status of your goods at any hour, every day.',
  },
];

const ServicesOverview = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card animate-card">
            <div className="icon-container">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
