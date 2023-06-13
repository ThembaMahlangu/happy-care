import React from 'react';
import { FiUsers, FiHeart, FiActivity } from 'react-icons/fi';
import Image from 'next/image';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center bg-gray-100 text-black">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center">About Happy Care</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://static.wixstatic.com/media/b0fc85_6e3fbf9c9ed44653858f50e7db0ad998~mv2_d_2500_1478_s_2.jpg/v1/crop/x_157,y_0,w_1066,h_1478/fill/w_950,h_1310,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cover%20image%20.jpg" // Add your logo image path here
              alt="Happy Care Logo"
              width={400}
              height={200}
              className="rounded-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 text-black">
            <p className="text-lg mb-4">
              Happy Care is a leading medical aid company located in Johannesburg, South Africa. We provide comprehensive medical coverage and support to individuals and families, ensuring that they have access to the best healthcare services when they need it the most.
            </p>
            <p className="text-lg mb-4">
              Our mission is to improve the overall well-being of our members and the communities we serve. We believe in personalized care and work closely with healthcare professionals to ensure that our members receive the highest quality of medical care.
            </p>
            <p className="text-lg">
              At Happy Care, we prioritize our members' happiness and strive to create a positive impact on their lives. We offer a wide range of medical aid plans tailored to meet the unique needs of each individual or family. Our plans cover hospitalization, doctor visits, preventive care, and more.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose Happy Care?</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <FiUsers className="text-3xl mr-4 text-blue-500" />
                <p className="text-lg">Personalized Care</p>
              </div>
              <p>
                We believe in providing personalized care to our members, ensuring that they receive the attention and support they need throughout their healthcare journey.
              </p>
            </div>
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <FiHeart className="text-3xl mr-4 text-blue-500" />
                <p className="text-lg">High-Quality Services</p>
              </div>
              <p>
                We work with a network of top-notch healthcare professionals and facilities to deliver high-quality medical services to our members.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="flex items-center mb-4">
                <FiActivity className="text-3xl mr-4 text-blue-500" />
                <p className="text-lg">Comprehensive Coverage</p>
              </div>
              <p>
                Our medical aid plans offer comprehensive coverage, including hospitalization, doctor visits, medication, and preventive care, ensuring that our members are protected in all aspects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;
