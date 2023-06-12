import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl">
            HAPPY CARE
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-accent">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Advance</a>
            <a href="#" className="text-white">Fees</a>
            <a href="#" className="text-white">FAQ</a>
            <a href="#" className="text-white">Contact Us</a>
          </div>
          <button className="md:hidden flex items-center" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 space-y-2 md:hidden">
            <a href="#" className="block text-accent">Home</a>
            <a href="#" className="block text-white">About</a>
            <a href="#" className="block text-white">Advance</a>
            <a href="#" className="block text-white">Services</a>
            <a href="#" className="block text-white">Fees</a>
            <a href="#" className="block text-white">Contact</a>
          </div>
        )}
      </div>
      <div className="bg-secondary py-2 text-center space-x-3">
        <a href="#" className="text-white font-bold">Login Now</a>
        <a className='text-white'>|</a>
        <a href="#" className="text-white font-bold">Join Now</a>
        <div className="flex justify-center mt-2">
          <FaTwitter className="text-white mx-2" size={24} />
          <FaFacebook className="text-white mx-2" size={24} />
          <FaInstagram className="text-white mx-2" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
