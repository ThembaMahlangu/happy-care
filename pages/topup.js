import { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@headlessui/react";
import { BsCreditCard, BsClock } from "react-icons/bs";
import Navbar from "@/components/NavBar";
import DashFooter from "@/components/FooterDash";

export default function TopUp() {
  const [enabled, setEnabled] = useState(false);

  // Add a mock balance for demonstration purposes
  const [balance, setBalance] = useState(1220);
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-2xl px-8 sm:px-12 py-12"
          >
            <div className="max-w-md mx-auto">
              {/* Display the user balance */}
              <div className="mb-6 text-center">
                <h2 className="font-bold text-xl mb-2 text-black">Your Balance</h2>
                <p className="text-blue-500 text-3xl">R{balance.toFixed(2)}</p>
              </div>

              <div className="flex items-center space-x-5">
                <BsCreditCard className="text-blue-500 w-16 h-16" />
                <div>
                  <h1 className="font-bold text-3xl text-black">Top Up Your Account</h1>
                  <p className="text-gray-600">Happy Care Prepaid Medical Aid</p>
                </div>
              </div>

              <div className="mt-8">
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={amount}
                  // show the currency symbol as a prefix
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full text-black p-2 rounded-lg border-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <BsClock className="text-gray-500" />
                  <p className="text-gray-500">Instant Top Up</p>
                </div>
                <Switch.Group as="div" className="flex items-center">
                  <Switch.Label className="mr-2 text-black">Auto Top Up</Switch.Label>
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                      enabled ? "bg-blue-500" : "bg-gray-200"
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
                  >
                    <span
                      className={`${
                        enabled ? "translate-x-6" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </Switch>
                </Switch.Group>
              </div>

              {/* Add the top-up options */}
              <div className="mt-6 mb-3 text-black">
                <h2 className="font-bold text-xl mb-2">Top Up Options</h2>
                <ul className="list-disc list-inside">
                  <li>PayPal</li>
                  <li>Bank Card</li>
                  <li>EFT</li>
                  <li>PayFast</li>
                  <li>Ozow</li>
                </ul>
              </div>

              {/* Add instructions and card details form */}
              <div className="mt-6">
                <h2 className="font-bold text-xl mb-2 text-black">Card Details</h2>
                <p className="text-gray-600 mb-4">Enter your card details below:</p>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="w-full text-black p-2 rounded-lg border-2 focus:outline-none focus:border-blue-500 mb-3"
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  maxLength={19}
                  value={cardNumber}
                  onChange={(e) => {
                        const { value } = e.target;
                        setCardNumber(value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim());
                    }}
                  className="w-full text-black p-2 rounded-lg border-2 focus:outline-none focus:border-blue-500 mb-3"
                />
                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="Exp. Date (MM/YY)"
                    maxLength={5}
                    className="w-1/2 text-black p-2 rounded-lg border-2 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    maxLength={3}
                    className="w-1/2 text-black p-2 rounded-lg border-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <button className="bg-gray-300 text-black px-6 py-2 rounded-full font-semibold text-sm transition-all hover:bg-blue-500 hover:text-white">
                  Cancel
                </button>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all hover:bg-blue-600">
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <DashFooter />
    </>
  );
}