import React, { useState, useEffect } from "react";
import "../Css/Testimonial.css";

const testimonialsData = [
  {
    id: 1,
    text: "This product has completely transformed our workflow. Highly recommend it to everyone!",
    name: "John Doe",
    position: "CEO, Example Corp",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    text: "Exceptional service and a user-friendly interface. Couldn't be happier with the results!",
    name: "Jane Smith",
    position: "Marketing Director, ABC Ltd",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    text: "The best tool we've used this year. It's worth every penny and has boosted our productivity!",
    name: "Emily Johnson",
    position: "CTO, XYZ Inc",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const { text, name, position, image } = testimonialsData[currentIndex];

  return (
    <>
    <h3 className="testimonial-containerh3">Client Reviews</h3>
    <div className="testimonial-container">
      <div className="testimonial-content">
        <div className="testimonial-text">
          <p>"{text}"</p>
        </div>
        <div className="testimonial-profile">
          <img src={image} alt={name} className="testimonial-image" />
          <div className="testimonial-name">
            <h4>{name}</h4>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Testimonial;
