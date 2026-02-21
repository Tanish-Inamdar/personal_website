import React from 'react';
import Landing from '../components/landing';

/**
 * LandingPage component
 * This acts as a container or a "view" for the Landing component.
 * In a larger application, this page might fetch data or handle
 * other logic before rendering the main component.
 */
const LandingPage: React.FC = () => {
  return (
    <div>
      <Landing />
    </div>
  );
};

export default LandingPage;
