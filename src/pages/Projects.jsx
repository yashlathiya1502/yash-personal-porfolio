// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto p-6">
      <h3 className="text-3xl font-semibold text-gray-800">Projects</h3>
      <p className="mt-4 text-lg text-gray-600">Here are some of my projects:</p>
      <ul className="mt-8 space-y-4">
        <li className="p-4 bg-gray-100 rounded-lg">Project 1</li>
        <li className="p-4 bg-gray-100 rounded-lg">Project 2</li>
        <li className="p-4 bg-gray-100 rounded-lg">Project 3</li>
      </ul>
    </div>
  );
};

export default Projects;
