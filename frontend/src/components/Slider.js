import React, { useState } from "react";
import "./Slider.css";

const testimonials = [
  {
    text: `"Security Council transformed our cybersecurity posture, providing invaluable insights and support that exceeded our expectations."`,
    name: "John Doe",
    title: "CISO, TechCorp",
  },
  {
    text: `"Working with Security Council gave us unmatched confidence in our systems."`,
    name: "Jane Smith",
    title: "CTO, InnovateX",
  },
  {
    text: `"They truly care about our security needs and deliver excellent solutions."`,
    name: "Robert Brown",
    title: "CEO, SafeNet",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="slider">
      <h2 className="slider-logo"> Webflow</h2>
      <p className="slider-text">{testimonials[index].text}</p>

      <div className="slider-profile">
        <div className="avatar">{testimonials[index].name[0]}</div>
        <p className="name">{testimonials[index].name}</p>
        <p className="title">{testimonials[index].title}</p>
      </div>

      {/* Dots */}
      <div className="dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

     
      <button className="arrow left" onClick={prevSlide}>
        &#8592;
      </button>
      <button className="arrow right" onClick={nextSlide}>
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
