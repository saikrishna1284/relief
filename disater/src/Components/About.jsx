import React, { useEffect, useState } from 'react';
import './About.css';

const slides = [
  {
    url: 'https://cdn.prod.website-files.com/65c1ed46cf6a2e2bc997d209/67ea8b6031de5821dd105935_MNR_Earthquake_1_homepage-banner.webp',
    caption: 'Rapid Response in Crisis Areas',
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/62e895bdf6085938506cc492/1671604469858-0BJY25UE5MM4EVZJLHXN/MicrosoftTeams-image-11-1-1600x800.jpg',
    caption: 'Volunteers on the Ground',
  },
  {
    url: 'https://www.setservices.com.au/wp-content/uploads/2023/06/certificate-ii-in-medical-service-first-response-course-1-scaled.jpg',
    caption: 'Emergency Evacuation Support',
  },
];

const About = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-page">
      {/* Full-screen slideshow */}
      <div className="slideshow">
        <img
          src={slides[current].url}
          alt={slides[current].caption}
          className="slideshow-image"
        />
        <div className="slideshow-caption">{slides[current].caption}</div>
      </div>

      {/* Full-screen content */}
      <div className="about-section">
        <h2 className="about-title">About the Disaster Relief Management</h2>
        <p className="about-text">
          Our Disaster Relief Management System is designed to coordinate rapid, transparent, and effective
          responses to natural and man-made disasters in rural and vulnerable areas. With real-time updates,
          centralized volunteer coordination, and transparent donation tracking, we ensure that aid reaches
          those who need it the most — as quickly and efficiently as possible.
        </p>
        <p className="about-text">
          Through community participation, local administration support, and technological tools, we are able to
          assess needs, distribute resources, and provide recovery assistance within hours of an incident. This
          platform empowers villagers, NGOs, and government bodies to work together in harmony for a resilient future.
        </p>
      </div>
    </div>
  );
};

export default About;