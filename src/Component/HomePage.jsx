
// import '../Css/HomePage.css'

// import React, { useRef, useEffect } from 'react';
// import { Canvas, extend } from '@react-three/fiber';
// import { BoxGeometry } from 'three'; // Import BoxGeometry from Three.js
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import LocomotiveScroll from 'locomotive-scroll';
// // Extend Three.js components to be used in React-Three-Fiber
// extend({ BoxGeometry });

// const HomePage = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     // Initialize Locomotive Scroll for smooth parallax effect
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//     });
//     return () => {
//       if (scroll) scroll.destroy();
//     };
//   }, []);

//   useEffect(() => {
//     // GSAP animation for the text and elements
//     gsap.from('.hero-text', { y: 100, opacity: 0, duration: 1.5, ease: 'power3.out' });
//   }, []);

//   return (
//     <div  ref={scrollRef} className='root1'>
//       {/* Hero Section with a 3D Box */}
//       <section className="hero-section" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
//         <Canvas>
//           {/* 3D Box Model (using BoxGeometry) */}
//           <ambientLight />
//           <pointLight position={[10, 10, 10]} />
//           <mesh>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color="orange" />
//           </mesh>
//         </Canvas>
//         {/* Hero Text */}
//         <motion.div className="hero-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//           <h1>Welcome to the Future of Transport Services</h1>
//           <p>Find the best transport services here with advanced technology.</p>
//           <motion.button whileHover={{ scale: 1.1 }} className="cta-button">Deliver Item</motion.button>
//           <motion.button whileHover={{ scale: 1.1 }} className="cta-button">Rent Vehicle</motion.button>
//         </motion.div>
//       </section>
//       {/* Services Section with Scroll Animations */}
//       <section className="services-section" style={{ height: '100vh' }}>
//         <motion.h2 className="section-title">Our Services</motion.h2>
//         <div className="service-cards">
//           <motion.div
//             className="service-card"
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3>Fast Delivery</h3>
//             <p>We deliver your items quickly and efficiently.</p>
//           </motion.div>
//           <motion.div
//             className="service-card"
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h3>Vehicle Rentals</h3>
//             <p>Rent a vehicle that fits your needs with our wide selection.</p>
//           </motion.div>
//         </div>
//       </section>
//       {/* Footer with Light/Dark Mode */}
//       <footer className="footer">
//         <motion.div className="footer-content">
//           <h3>Get in Touch</h3>
//           <p>Contact us for any inquiries or questions.</p>
//         </motion.div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
import React from 'react'

export default function homepage() {
  return (
    <div>
      hi
    </div>
  )
}
