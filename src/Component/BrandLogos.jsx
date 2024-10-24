import React from 'react';
import '../Css/BrandLogos.css'; // Import the CSS file for styles

const BrandLogos = () => {
  const brands = [
    { id: 1, name: "Brand 1", logo: "https://i.postimg.cc/4N9dSdQx/truck-digital-art-illustration.jpg" },
    { id: 2, name: "Brand 2", logo: "https://i.postimg.cc/4N9dSdQx/truck-digital-art-illustration.jpg" },
    { id: 3, name: "Brand 3", logo: "https://i.postimg.cc/4N9dSdQx/truck-digital-art-illustration.jpg" },
    { id: 4, name: "Brand 4", logo: "https://i.postimg.cc/4N9dSdQx/truck-digital-art-illustration.jpg" },
    { id: 5, name: "Brand 5", logo: "https://i.postimg.cc/4N9dSdQx/truck-digital-art-illustration.jpg" },
    { id: 6, name: "Brand 3", logo: "https://i.postimg.cc/4N9dSdQx/truck-digital-art-illustration.jpg" },
    { id: 7, name: "Brand 4", logo: "https://i.postimg.cc/4N9dSdQx/truck-digital-art-illustration.jpg" }
   
  ];

  return (
    <div className="brand-container">
      
      {brands.map((brand) => (
        <div key={brand.id} className="brand-item">
          <img src={brand.logo} alt={brand.name} className="brand-logo" />
        </div>
      ))}
    </div>
  );
};

export default BrandLogos;
