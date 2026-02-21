import React from 'react';

// --- CSS Styles ---
// Because the environment couldn't resolve separate CSS files,
// the styles are now included directly in this component file.
const styles = `
  .homepage {
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  .landing-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    padding: 2rem;
    background-color: #f7fafc;
  }

  .landing-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: white;
    padding: 2.5rem;
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    max-width: 600px;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 768px) {
    .landing-content {
      flex-direction: row;
      text-align: left;
      align-items: flex-start;
    }
  }

  .profile-image-container {
    flex-shrink: 0;
  }

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #e2e8f0;
  }

  .about-me-container h2 {
    margin-top: 0;
    font-size: 1.75rem;
    color: #2d3748;
  }

  .about-me-container p {
    line-height: 1.6;
    color: #4a5568;
  }
`;

// --- Landing Component ---
// This component was previously in a separate file. It is now here
// to resolve the import error.
const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="profile-image-container">
          <img 
            src="https://placehold.co/150x150/7c3aed/ffffff?text=Tu" 
            alt="Profile" 
            className="profile-image" 
          />
        </div>
        <div className="about-me-container">
          <h2>De Me</h2>
          <p>
            Haec est pagina initialis simplex. Hunc textum reponere potes 
            cum summario de te, artibus tuis, aut incepto tuo. Disposita est 
            ut introductio munda et simplex sit visitatoribus.
          </p>
        </div>
      </div>
    </div>
  );
};


// --- HomePage Component ---
// This is the main component for the page.
const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <style>{styles}</style>
      <main>
        <Landing />
      </main>
    </div>
  );
};

export default HomePage;

