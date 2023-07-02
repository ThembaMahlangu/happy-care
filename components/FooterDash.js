import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const DashFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4">
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

export default DashFooter;
