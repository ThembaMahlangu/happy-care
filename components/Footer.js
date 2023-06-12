import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Happy Care</h2>
            <p className="mt-2">Providing quality medical aid services.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/about" legacyBehavior>
                  <a className="hover:text-white">Fees</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" legacyBehavior>
                  <a className="hover:text-white">Services</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" legacyBehavior>
                  <a className="hover:text-white">Contact Us</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/faqs" legacyBehavior>
                  <a className="hover:text-white">FAQs</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <p className="text-gray-400">
              123 Medical Center <br />
              Johannesburg, South Africa <br />
              Phone: (123) 456-7890 <br />
              Email: info@happycare.co.za
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
