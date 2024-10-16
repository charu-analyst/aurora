import React from 'react';
import Slider from "react-slick";
import './OurTeam.css';

const OurJourney = () => {
  const journeyImages = [
    { src: '/images/memoImg.jpg', alt: 'Journey Image 1' },
    { src: '/images/schoolImg.jpg', alt: 'Journey Image 2' },
    { src: '/images/images.jpeg', alt: 'Journey Image 3' },
    { src: '/logo.png', alt: 'Journey Image 4' },
    // Add more images as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000, // Auto-scroll interval
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show only 1 card on smaller screens
        },
      },
    ],
  };

  return (
    <div className="our-journey">
      <h2>Our Team</h2>
      <Slider {...settings}>
        {journeyImages.map((image, index) => (
          <div key={index} className="journey-card">
            <img src={image.src} alt={image.alt} />
            <div className="journey-info">
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurJourney;