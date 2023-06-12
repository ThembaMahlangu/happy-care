import React from 'react';
import { IoMdMedkit, IoMdFitness, IoMdHeart } from 'react-icons/io';

const ServicesAndFeatures = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
            Services and Features
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover the wide range of services and features offered by Happy Care to support your health and wellness journey.
          </p>
        </div>
  
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <IoMdMedkit className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Prepaid Medical Aid</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Top up your Happy Care account and conveniently use your card to pay for healthcare services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Service 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <IoMdFitness className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Gym Access</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Enjoy complimentary access to our state-of-the-art gym facilities to stay fit and active.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Service 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <IoMdHeart className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Wellness Treatments</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Indulge in a range of wellness treatments and therapies for complete rejuvenation and relaxation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAndFeatures;
