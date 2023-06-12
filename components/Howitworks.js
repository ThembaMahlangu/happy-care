import { FaUser, FaCreditCard, FaWallet, FaHospital } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="bg-orange-400 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-semibold mb-8">
          How Happy Care Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-4">
              <FaUser className="text-3xl text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Register an Account</h3>
            <p className="text-center text-gray-600">
              Sign up for a Happy Care account to get started.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-4">
              <FaCreditCard className="text-3xl text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Order Your Card</h3>
            <p className="text-center text-gray-600">
              Request a Happy Care card to pay for healthcare services.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-4">
              <FaWallet className="text-3xl text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Top Up Your Wallet</h3>
            <p className="text-center text-gray-600">
              Add funds to your Happy Care wallet for healthcare expenses.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-4">
              <FaHospital className="text-3xl text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Pay for Healthcare</h3>
            <p className="text-center text-gray-600">
              Use your Happy Care card to pay for medical services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
