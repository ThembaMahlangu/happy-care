import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { toast, Toaster } from 'react-hot-toast';

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [buttonText, setButtonText] = useState("Register");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setButtonText("Registering...");
    try {
      const response = await fetch(`api/users?action=register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          idNumber,
          email,
          password,
          file,
        }),
      });
      
      const data = await response.json();
  
      setButtonText("Register");
  
      if (response.ok) {
        toast.success(`Registration successful!`);
        localStorage.setItem("token", data.token);
        console.log(data.data);
        window.location.href = "/login";
      } else {
        toast.error(`Registration failed!`);
        console.log(data.message);
        setError(data.message);
      }
    } catch (error) {
      setButtonText("Try again");
      toast.error(`Registration failed!`);
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
      <Head>
        <title>Register - Happy Care</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create a new account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-blue-900 hover:text-indigo-500">
                Log in
              </a>
            </p>
          </div>
          <p className='text-red-700 font-bold text-center'>
              {error}
            </p>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="tel"
                  autoComplete="tel"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="id-passport" className="sr-only">
                  ID/Passport Number
                </label>
                <input
                  id="idNumber"
                  onChange={(e) => setIdNumber(e.target.value)}
                  name="idNumber"
                  value={idNumber}
                  type="text"
                  autoComplete="off"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="ID/Passport Number"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="id-upload" className="sr-only">
                  Upload ID/Passport
                </label>
                <input
                  id="id-upload"
                  onChange={(e) => setFile(e.target.files[0])}
                  name="id-upload"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                <p className="mt-2 text-sm text-gray-500">Upload your ID/Passport (JPG, JPEG, PNG, or PDF)</p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleRegister}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-blue-900 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 11H4a1 1 0 010-2h10.586l-3.293-3.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
