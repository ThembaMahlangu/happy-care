import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Image
              src="https://pbs.twimg.com/media/FynQGaBWAAEH-ax?format=png&name=small"
              alt="Happy Care"
              width={150}
              height={20}
            />
            <p className="mt-4">
              Happy Care is a prepaid medical aid company based in Johannesburg, South Africa. We provide comprehensive healthcare solutions to our members.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Happy Street</p>
            <p>Johannesburg, South Africa</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Email: info@happycare.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services">Services</a>
              </li>
              <li className="mb-2">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Happy Care. All rights reserved.
        </p>
        <p className="text-center text-sm">
          Powered by <a href="https://wa.me/+27769360246">AsyncFam</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
