import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (pathname) => {
    return router.pathname === pathname ? "text-blue-500" : "text-white";
  };

  const isActive2 = (pathname) => {
    return router.pathname === pathname ? "text-orange-500" : "text-white";
  };

  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl">
            <a href="/">
            HAPPY CARE
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className={`nav-link hover:text-blue-500 ${isActive('/')}`}>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={`nav-link hover:text-blue-500 ${isActive('/about')}`}>About</a>
          </Link>
          <Link href="/advance" legacyBehavior>
            <a className={`nav-link hover:text-blue-500 ${isActive('/advance')}`}>Advance</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className={`nav-link hover:text-blue-500 ${isActive('/services')}`}>Services</a>
          </Link>
          <Link href="/fees" legacyBehavior>
            <a className={`nav-link hover:text-blue-500 ${isActive('/fees')}`}>Fees</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={`nav-link hover:text-blue-500 ${isActive('/contact')}`}>Contact</a>
          </Link>
          </div>
          <button className="md:hidden flex items-center" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 space-y-2 md:hidden">
            <Link href="/" legacyBehavior>
                <a className={`block nav-link ${isActive('/')}`}>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
                <a className={`block nav-link ${isActive('/about')}`}>About</a>
            </Link>
            <Link href="/advance" legacyBehavior>
                <a className={`block nav-link ${isActive('/advance')}`}>Advance</a>
            </Link>
            <Link href="/services" legacyBehavior>
                <a className={`block nav-link ${isActive('/services')}`}>Services</a>
            </Link>
            <Link href="/fees" legacyBehavior>
                <a className={`block nav-link ${isActive('/fees')}`}>Fees</a>
            </Link>
            <Link href="/contact" legacyBehavior>
                <a className={`block nav-link ${isActive('/contact')}`}>Contact</a>
            </Link>
          </div>
        )}
      </div>
      <div className="bg-secondary py-2 text-center space-x-3">
        <a href="/login" className={`hover:text-orange-500 font-bold nav-links ${isActive2('/login')}`}>Login Now</a>
        <a className='text-white'>|</a>
        <a href="/register" className={`hover:text-orange-500 font-bold nav-links ${isActive2('/register')}`}>Join Now</a>
        <div className="flex justify-center mt-2">
          <Link href="#">
            <FaTwitter className="text-white hover:text-orange-500 mx-2" size={24} />
          </Link>
          <Link href="#">
            <FaFacebook className="text-white mx-2 hover:text-orange-500" size={24} />
          </Link>
          <Link href="#">
            <FaInstagram className="text-white mx-2 hover:text-orange-500" size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
