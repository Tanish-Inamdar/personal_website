import React from 'react';
import './landing.css';

const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="profile-image-container">
          <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
        </div>
        <div className="about-me-container">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna quis, feugiat maximus sem. Morbi
            tincidunt, sem id pellentesque vulputate, mi nunc ullamcorper
            lorem, ut finibus ex sem ut quam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
