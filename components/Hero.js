import React, { useState, useEffect } from 'react';

const Hero = () => {
  const descriptions = [
    'Improve your life with a balanced health',
    'Discover the key to a healthier you.',
    'Unlock your full potential with our program.',
    'Experience a new level of vitality and wellness.',
  ];

  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
  const [currentDescription, setCurrentDescription] = useState(descriptions[currentDescriptionIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescriptionIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentDescription(descriptions[currentDescriptionIndex]);
  }, [currentDescriptionIndex]);

  return (
    <div className="relative h-[50vh] md:h-screen">
      <img
        src="https://www.waldenu.edu/media/4413/seo-662-bs-healthcare-people-group-profe-294762073-1200x675"
        alt="Wellness background"
        className="object-cover w-full h-full"
      />
      <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 text-black space-y-4">
        <h1 className="text-2xl md:text-5xl font-bold">Embrace Wellness</h1>
        <p className="text-base md:text-xl sm:max-w-sm md:max-w-md lg:max-w-lg flex-row">
          <span className="typed-text">{currentDescription}</span>
        </p>
        <button className="py-2 px-4 md:py-3 md:px-6 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
