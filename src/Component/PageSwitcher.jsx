import React, { useState } from 'react';
import '../Css/PageSwitcher.css';
import FreightForm from './FreightForm';
import CancelBookingForm from './CancelBookingForm';
import DeliveryTransactionList from './DeliveryTransactionList';
import DeliveryTracking from './DeliveryTracking';
import RentCarForm from './RentCarForm';
import { useNavigate } from 'react-router-dom';

const PageSwitcher = (props) => {
  const navigation = useNavigate();
  console.log(props.start);
  const start= (props.start);
  const end = (props.end);
  const [activeButton, setActiveButton] = useState(null);

  const columns = [
    { id: 1, title: "Delivery Booking", imageUrl: "url('https://i.postimg.cc/LXHxgQRZ/cargo-van-delivery-transportation-with-open-container-full-construction-material-barrels-isometric-v.jpg')" },
    { id: 2, title: "Cancelation", imageUrl: "url('https://i.postimg.cc/GmGK7nmy/2150796946.jpg')" },
    { id: 3, title: "All Transactions", imageUrl: "url('https://i.postimg.cc/RFVTZ3Q7/4925394-2575825.jpg')" },
    { id: 4, title: "Delivery Tracking", imageUrl: "url('https://i.postimg.cc/x1n54FJp/1287068-155998-OVWJKP-626.jpg')" },
    { id: 5, title: "Rent a Car", imageUrl: "url('https://i.postimg.cc/GmGK7nmy/2150796946.jpg')" },
    { id: 6, title: "Cancel Booking", imageUrl: "url('https://i.postimg.cc/GmGK7nmy/2150796946.jpg')" },
    { id: 7, title: "Learn Car Driving", imageUrl: "url('https://i.postimg.cc/GmGK7nmy/2150796946.jpg')" },
    { id: 8, title: "Booking Modification", imageUrl: "url('https://i.postimg.cc/GmGK7nmy/2150796946.jpg')" },
    
    { id: 9, title: "Goods Delivery ", imageUrl: "url('https://i.postimg.cc/GmGK7nmy/2150796946.jpg')" },
    { id: 10, title: "Rent Car", imageUrl: "url('https://i.postimg.cc/GmGK7nmy/2150796946.jpg')" },
    { id: 11, title: "Contact us", imageUrl: "url('https://i.postimg.cc/GmGK7nmy/2150796946.jpg')" },
    { id: 12, title: "About Us", imageUrl: "url('https://i.postimg.cc/GmGK7nmy/2150796946.jpg')" },
  ];

  // Filter the columns to only include those with IDs 1 through 4
  // const filteredColumns = columns.filter(column => column.id >= 1 && column.id <= 4 );
  const filteredColumns = columns.filter(column => column.id >= start && column.id <= end);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const gotoDelivery =() =>{
    setTimeout(() => {
      navigation("/Delivery");
    }, 500); // Delay in milliseconds
  }
  const gotoRent =() =>{
    setTimeout(() => {
      navigation("/Rent");
    }, 500); // Delay in milliseconds
  }
  const gotoContact =() =>{
    setTimeout(() => {
      navigation("/contact");
    }, 500); // Delay in milliseconds
  }
  const gotoAbout =() =>{
    setTimeout(() => {
      navigation("/about");
    }, 500); // Delay in milliseconds
  }

  const renderContent = () => {
    switch (activeButton) {
      case 1:
        return <div><FreightForm/></div>;
      case 2:
        return <div className='Content'> <CancelBookingForm/></div>;
      case 3:
        return  <DeliveryTransactionList/>;
      case 4:
        return <DeliveryTracking/>;
        case 5:
        return <RentCarForm/>;
      case 6:
        return <div className='Content'> <CancelBookingForm/></div>;
      case 7:
        return  null;
      case 8:
        return <DeliveryTracking/>;
      
      case 9:
         gotoDelivery()
         return null;
         case 10:
         gotoRent()
         return null;
         case 11:
         gotoContact()
         return null;
         case 12:
         gotoAbout()
         return null;
      default:
        return null;
    }
  };

  return (
    <>
    <div className="page-switcher ">
      {/* Grid container */}
      <div className="trust-grid-container ">
        {filteredColumns.map(column => (
          <div
            key={column.id}
            onClick={() => handleButtonClick(column.id)}
            className={`trust-grid-item ${activeButton === column.id ? 'active' : ''}`}
            style={{ backgroundImage: activeButton === column.id ? 'none' : column.imageUrl }}
          >
            <div className={`trust-grid-content ${activeButton === column.id ? 'centered' : ''}`}>
              <h3 className="trust-grid-title">{column.title}</h3>
            </div>
          </div>
        ))}
      </div>

     
    </div>
     {/* Conditionally render the content section only if an item is active */}
     {activeButton && (
        <div className="page-content conatianer">
          {renderContent()}
        </div>
      )}
    </>
  );
};

export default PageSwitcher;
