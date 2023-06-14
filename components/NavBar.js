import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const getToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  };
  const token = getToken();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (pathname) => {
    return router.pathname === pathname ? 'text-orange-500' && 'bg-transparent' : 'text-white';
  };

  const isActive2 = (pathname) => {
    return router.pathname === pathname ? 'bg-orange-500' && 'bg-transparent' : 'bg-secondary';
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; 
  };

  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl">
            {token ? (
              <Link href="/dashboard" legacyBehavior>
                <Image
                  src="https://pbs.twimg.com/media/FynQGaBWAAEH-ax?format=png&name=small"
                  alt="Happy Care"
                  width={100}
                  height={20}
                />
              </Link>
            ) : (
              <Link href="/" legacyBehavior>
                <Image
                  src="https://pbs.twimg.com/media/FynQGaBWAAEH-ax?format=png&name=small"
                  alt="Happy Care"
                  width={150}
                  height={20}
                />
              </Link>
            )}
          </div>
          <div className="hidden md:flex space-x-4">
            {token ? ( // Only show the following links if there is a valid token
              <>
                <Link href="/dashboard" legacyBehavior>
                  <a className={`nav-link hover:text-orange-500 text-lg pt-5 ${isActive('/dashboard')}`}>Home</a>
                </Link>
                <Link href="/advance" legacyBehavior>
                  <a className={`nav-link hover:text-orange-500 text-lg pt-5 ${isActive('/advance')}`}>Advance</a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/" legacyBehavior>
                  <a className={`nav-link hover:text-orange-500 text-lg pt-5 ${isActive('/')}`}>Home</a>
                </Link>
                <Link href="/about" legacyBehavior>
                  <a className={`nav-link hover:text-orange-500 text-lg pt-5 ${isActive('/about')}`}>About</a>
                </Link>
                <Link href="/services" legacyBehavior>
                  <a className={`nav-link hover:text-orange-500 text-lg pt-5 ${isActive('/services')}`}>Services</a>
                </Link>
                <Link href="/fees" legacyBehavior>
                  <a className={`nav-link hover:text-orange-500 text-lg pt-5 ${isActive('/fees')}`}>Fees</a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <a className={`nav-link hover:text-orange-500 text-lg pt-5 ${isActive('/contact')}`}>Contact</a>
                </Link>
              </>
            )}
          </div>
          <button className="md:hidden flex items-center" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 space-y-2 md:hidden">
            {token ? ( // Only show the following links if there is a valid token
              <>
                <Link href="/dashboard" legacyBehavior>
                  <a className={`block nav-link ${isActive('/dashboard')}`}>Home</a>
                </Link>
                <Link href="/advance" legacyBehavior>
                  <a className={`block nav-link ${isActive('/advance')}`}>Advance</a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/" legacyBehavior>
                  <a className={`block nav-link ${isActive('/')}`}>Home</a>
                </Link>
                <Link href="/about" legacyBehavior>
                  <a className={`block nav-link ${isActive('/about')}`}>About</a>
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
              </>
            )}
          </div>
        )}
      </div>
      <div className="bg-primary py-2 text-center space-x-3">
        {token ? ( // Show "Log out" if there is a valid token
        <>
          <a onClick={handleLogout} className={`hover:text-blue-500 bg-transparent font-bold nav-links ${isActive2('/login')}`}>
            Log Out
          </a>
          <a className='text-white'>|</a>
          <a href='#' className={`hover:text-blue-500 bg-transparent font-bold nav-links ${isActive2('/login')}`}>
            Delete Account
          </a>
        </>
        ) : (
          <>
        <a href="/login" className={`hover:text-blue-500 bg-transparent font-bold nav-links ${isActive2('/login')}`}>Login</a>
        <a className='text-white'>|</a>
        <a href="/register" className={`hover:text-blue-500 bg-transparent font-bold nav-links ${isActive2('/register')}`}>Join Now</a>
          </>
        )}
        <div className="flex justify-center mt-2">
          <Link href="#">
            <FaTwitter className="text-white hover:text-blue-500 mx-2" size={24} />
          </Link>
          <Link href="#">
            <FaFacebook className="text-white mx-2 hover:text-blue-500" size={24} />
          </Link>
          <Link href="#">
            <FaInstagram className="text-white mx-2 hover:text-blue-500" size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
