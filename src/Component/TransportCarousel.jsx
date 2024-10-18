import React from 'react';
import Slider from "react-slick";
import { motion } from "framer-motion"; // Import framer-motion
import '../Css/TransportCarousel.css'
const TransportCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  // Create some crazy animation effects
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: 0 },
    visible: {
      opacity: 1,
      scale: [1, 1.3, 1], // Adding a pulse effect
      rotate: [0, 20, -20, 0], // Shake rotation
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  const captionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="carousel-container" style={{ width: '95%', margin: '0 auto' }}>
     
      <Slider {...settings}>
        <div>
          <motion.img 
            src="https://tse3.mm.bing.net/th?id=OIP.qhYx0-uxGUjwHSjl4dY58gHaEK&pid=Api&P=0&h=220" 
            alt="Transport 1" 
            style={{ width: '100%' }}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.p className="caption" variants={captionVariants} initial="hidden" animate="visible">
            Fast and Reliable City Transport
          </motion.p>
        </div>
        <div>
          <motion.img 
            src="https://tse3.mm.bing.net/th?id=OIP.qhYx0-uxGUjwHSjl4dY58gHaEK&pid=Api&P=0&h=220" 
            alt="Transport 2" 
            style={{ width: '100%' }}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.p className="caption" variants={captionVariants} initial="hidden" animate="visible">
            Luxury Vehicle Services
          </motion.p>
        </div>
        <div>
          <motion.img 
            src="transport3.jpg" 
            alt="https://tse3.mm.bing.net/th?id=OIP.qhYx0-uxGUjwHSjl4dY58gHaEK&pid=Api&P=0&h=220" 
            style={{ width: '100%' }}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.p className="caption" variants={captionVariants} initial="hidden" animate="visible">
            Efficient Cargo Transportation
          </motion.p>
        </div>
        <div>
          <motion.img 
            src="https://tse3.mm.bing.net/th?id=OIP.qhYx0-uxGUjwHSjl4dY58gHaEK&pid=Api&P=0&h=220" 
            alt="Transport 4" 
            style={{ width: '100%' }}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.p className="caption" variants={captionVariants} initial="hidden" animate="visible">
            Affordable Cross-country Delivery
          </motion.p>
        </div>
      </Slider>
    </div>
  );
};

export default TransportCarousel;
