import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import Navbar from '@/components/NavBar';
import DashFooter from '@/components/FooterDash';

const Advance = () => {
  return (
    <>
      <Navbar />
      <div className="h-50 bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <ExclamationCircleIcon className="h-8 w-8 text-red-500" />
              <div className="flex-1">
                <h1 className="text-xl font-semibold text-gray-700">Advance</h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-gray-600 text-center"
            >
              The Advance feature is available only to customers who have been on the platform for more than 7 months. With Advance, you can borrow money when your medical aid wallet is empty and pay it back within 2 months.
            </motion.div>
          </div>
        </div>
      </div>
      <DashFooter />
    </>
  );
};

export default Advance;