
import '../Css/LogisticsServicePage.css'; // Link to the CSS file
import React from 'react';
import { useSpring, animated } from 'react-spring';


const LogisticsServicePage = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

  return (
    <animated.div style={fadeIn} className="page-container">
      {/* Header section */}
      <div className="hero-section">
        <h1 className="hero-title">Our Logistics Services</h1>
        <p className="hero-subtitle">Reliable and efficient solutions tailored for your business.</p>
      </div>

      {/* Services Section with background images */}
      <div className="services-section">
        <ServiceCard
          backgroundImage="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9hZCUyMHdpdGglMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D"
          title="Road Freight"
          description="Deliver goods safely with our trusted road freight services."
        />
        <ServiceCard
          backgroundImage="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9hZCUyMHdpdGglMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D"
        
          title="Sea Freight"
          description="Cost-effective shipping across the seas with our expert solutions."
        />
        <ServiceCard
          backgroundImage="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9hZCUyMHdpdGglMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D"
        
          title="Air Freight"
          description="Fast and reliable air freight services to move your business forward."
        />
        
      </div>
    </animated.div>
  );
};

// Service Card Component with background images
const ServiceCard = ({ backgroundImage, title, description }) => {
  const cardAnimation = useSpring({
    transform: 'translateY(0px)',
    opacity: 1,
    from: { transform: 'translateY(30px)', opacity: 0 },
    delay: 500,
  });

  return (
    <animated.div
      //  style={cardAnimation}
      className="service-card"
      style={{ backgroundImage: `url(${backgroundImage})`, cardAnimation}}
    >
      <h2 className="service-title">{title}</h2>
      <p className="service-description">{description}</p>
    </animated.div>
  );
};

export default LogisticsServicePage;
