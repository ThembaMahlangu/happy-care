// pages/Dashboard.js
import DashFooter from '@/components/FooterDash'
import Navbar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [greeting, setGreeting] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const currentDate = new Date()
    setDate(currentDate.toDateString())

    const hour = currentDate.getHours()
    if (hour < 12) setGreeting('Good morning')
    else if (hour < 18) setGreeting('Good afternoon')
    else setGreeting('Good evening')
  }, [])

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-center text-4xl font-bold text-gray-900 mb-4">Customer Dashboard</h1>
          <p className="text-center text-xl text-gray-700 mb-8">
            {greeting} User, Today is {date}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Balance Card */}
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-xl shadow-md animate-fadeIn">
              <h2 className="text-white font-semibold text-2xl mb-2">Balance</h2>
              <p className="text-white text-lg">R1,234.56</p>
            </div>
            {/* Transactions Card */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-xl shadow-md animate-fadeIn">
              <h2 className="text-white font-semibold text-2xl mb-2">Transactions</h2>
              <p className="text-white text-lg">12</p>
            </div>
            {/* Last Paid Service Card */}
            <div className="bg-gradient-to-r from-pink-400 to-red-500 p-6 rounded-xl shadow-md animate-fadeIn">
              <h2 className="text-white font-semibold text-2xl mb-2">Last Paid Service</h2>
              <p className="text-white text-lg">Healthcare Purchase</p>
            </div>
            {/* Last Login Details Card */}
            <div className="bg-gradient-to-r from-purple-400 to-indigo-500 p-6 rounded-xl shadow-md animate-fadeIn">
              <h2 className="text-white font-semibold text-2xl mb-2">Last Login Details</h2>
              <p className="text-white text-lg">June 30, 2023, 3:45 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DashFooter />
    </>
  )
}

export default Dashboard