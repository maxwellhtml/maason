import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResourceHire = () => {
  return (
    <div className="container resource-wrapper py-80">
      <h2 className='resource-title fw-semibold'>Hire Dedicated Resources With Us</h2>
      <p className="resource-description">
        Get access to skilled professionals who work exclusively on your
        projects, ensuring efficiency and quality
      </p>
      <div className="developer-options">
        <a href="#" className="btn medium-peach">
          AngularJS Developers
        </a>
        <a href="#" className="btn light-peach">
          HTML5 Developers
        </a>
        <a href="#" className="btn dark-peach">
          Laravel Developers
        </a>
        <a href="#" className="btn dark-peach">
          PHP Developers
        </a>
        <a href="#" className="btn light-peach">
          Python Developers
        </a>
        <a href="#" className="btn CopperOrange">
          Rust Developers
        </a>
        <a href="#" className="btn light-peach">
          Unity Developers
        </a>
        <a href="#" className="btn medium-peach">
          NodeJS Developers
        </a>
        <a href="#" className="btn dark-peach">
          WordPress Developers
        </a>
      </div>
    </div>
  );
};

export default ResourceHire;