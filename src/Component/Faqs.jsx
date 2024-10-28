import React, { useState } from 'react';
import '../Css/Faqs.css';

const faqsData = [
  {
    question: "What services do you offer?",
    answer: "We offer a variety of services, including product delivery, vehicle rentals, and much more to make your life easier."
  },
  {
    question: "How can I create an account?",
    answer: "Creating an account is simple! Click on the Sign-up button at the top right corner, fill in your details, and you're ready to go."
  },
  {
    question: "What is your return policy?",
    answer: "Our return policy allows you to return items within 30 days of purchase. Please refer to our return policy page for more details."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we offer 24/7 customer support through chat, email, and phone to assist you with any issues."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is dispatched, you’ll receive a tracking link via email. You can use it to track your order in real-time."
  }
];

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faqs-list">
        {faqsData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
