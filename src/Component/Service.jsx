import React from 'react'
import '../Css/Service.css'
export default function Service() {
  return (
    <div>
        <div className="grid-container">
      {/* Column 1 */}
      <div className="grid-item" style={{ backgroundImage: `url('https://i.postimg.cc/1zWZd700/20123576-6216857.jpg')` }}>
        <h3>Goods Dilivery</h3>
        <p>Our trusted partners help us ensure seamless <br/> and reliable goods delivery across the India. </p>
       
      </div>
      {/* Column 2 */}
      <div className="grid-item grid-item2" style={{ backgroundImage: `url('https://i.postimg.cc/3RVNsxjZ/40468556-8777117.jpg')` }}>
        <h3>Car Rent</h3>
        <p> make it easy to  get  top-notch car <br/> rental services wherever you need to go. </p>
        
      </div>
    </div>
    </div>
  )
}
