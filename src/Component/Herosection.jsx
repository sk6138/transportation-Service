import React from 'react';
import '../Css/HeroSection.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const navigation = useNavigate();
  const gotoRent = () => {
      
    navigation("/Rent");
  }
  const gotoDelivery = () => {
    navigation("/Delivery");
}
  return (
    <>
   <div className="container-fluid r-crousel">
  <div className="me-5 mx-5 d-flex">
    <div className="d-flex justify-content-center" style={{ width: '50vw' }}>
      <div className="align-items-center h-20 d-flex">
        <div>
          <div>
            <p className="text-centre fs-4 fw-bold text-secondary">Welcome!</p>
            <p className="fs-4 fw-bolder text-secondary">Find best transport services here!</p>
          </div>
          <div className="d-flex">
            <button type="button"  onClick={gotoDelivery} className="btn-service fs-5 me-2">Delivery item</button>
            <button type="button" onClick={gotoRent} className="btn-service fs-5">Rent vehicle</button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-40">
      <img src="https://i.postimg.cc/BnYhPw9y/6195020.jpg" alt="" style={{ width: '55vw' }} />
    </div>
  </div>
</div>

{/* Crousal for small devices */}
<div className="container-fluid c-gradient" style={{ height: '90vh' }}>
  <div className=" d-flex align-items-center justify-content-center crousel-g-i" style={{ height: '100%' }}>
    <div>
      <div>
        <div className="d-flex justify-content-center">
          <p className="text-centre fs-6 fw-bold text-dark">Welcome!</p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <p className="fs-6 fw-bolder text-dark">Find best transport services here!</p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn-service fs-6 mb-2">Deliver item</button>
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn-service fs-6">Rent vehicle</button>
        </div>
      </div>
    </div>
    
  </div>
</div>

    </>
  );
};

export default HeroSection;
