// import React, { useState } from 'react';
// import '../Css/TrustGrid.css'; // Import the CSS file for styles
// import { Link } from 'react-router-dom';


// const TrustGrid = () => {
  
//   const [showAll, setShowAll] = useState(false); // State to control visibility

//   const columns = [
//     { id: 1, title: "Goods Delivery", imageUrl: "url('https://i.postimg.cc/LXHxgQRZ/cargo-van-delivery-transportation-with-open-container-full-construction-material-barrels-isometric-v.jpg')" },
//     { id: 2, title: "Car for Rent", imageUrl: "url('https://i.postimg.cc/GmGK7nmy/2150796946.jpg')" },
//     { id: 3, title: "Contact US", imageUrl: "url('https://i.postimg.cc/RFVTZ3Q7/4925394-2575825.jpg')" },
//     { id: 4, title: "About Us", imageUrl: "url('https://i.postimg.cc/x1n54FJp/1287068-155998-OVWJKP-626.jpg')" },
 
//   ];

//   // Decide which columns to display based on the state
//   const visibleColumns = showAll ? columns : columns.filter(column => column.id < 5);
//  const goto = (key) =>{
//  if(key===1){
    
//  }
//  }
//   return (
//     <div className="trust-grid-container">
//       {visibleColumns.map(column => (
//         <div
//           key={column.id}
//           onClick={goto(column.id)}
//           className="trust-grid-item"
//           style={{ backgroundImage: column.imageUrl }}
//         >
//           <div className="trust-grid-content">
//             <h3 className="trust-grid-title">{column.title}</h3>
//           </div>
//         </div>
//       ))}

     
//     </div>
//   );
// };

// export default TrustGrid;

import React from 'react'
import PageSwitcher from './PageSwitcher'

const start =9;
const end =12;

export default function TrustGrid() {
  return (
    <div>
      <PageSwitcher start={start} end={end}  />
    </div>
  )
}
