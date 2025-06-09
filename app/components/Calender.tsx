"use client";
import React from 'react'


const Calender = () => {
  return (
    <div className="bg-blue-100 rounded-lg pt-4 pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">Book With Us</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">

        <div className="flex-1 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://calendly.com/vanwykwerno"
            width="100%"
            height="500px"
            style={{ border: "none" }}
            title="Calendly Booking"
          ></iframe>
        </div>

       <div className="flex-1 bg-white rounded-lg shadow p-4">
  <table className="w-full border border-gray-300 text-sm text-left">
    <thead className="bg-gray-100 font-semibold">
      <tr>
        <th className="border px-3 py-2">Session Type</th>
        <th className="border px-3 py-2">30 Min</th>
        <th className="border px-3 py-2">45 Min</th>
        <th className="border px-3 py-2">1 Hour</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-3 py-2">Private Session</td>
        <td className="border px-3 py-2">R220.00</td>
        <td className="border px-3 py-2">R325.00</td>
        <td className="border px-3 py-2">R425.00</td>
      </tr>
      <tr>
        <td className="border px-3 py-2">Group Session</td>
        <td className="border px-3 py-2">-</td>
        <td className="border px-3 py-2">R200.00</td>
        <td className="border px-3 py-2">R250.00</td>
      </tr>
    </tbody>
  </table>

          <p className="text-center text-xs text-gray-900 mt-3 italic">
            *Available every day (Mon-Fri) from 09:00 to 17:00*
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Session Booking Policies</h2>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              <li>Group sessions include 2 to 3 pupils.</li>
              <li>Cancel at least 24 hours in advance to avoid charges.</li>
              <li>No-shows will be charged in full.</li>
              <li>Reschedule at least 24 hours ahead, subject to coach availability.</li>
              <li>Late arrivals will receive only the remaining session time.</li>
              <li>Coaches wait up to 15 minutes before marking a no-show.</li>
              <li>Weather-related cancellations will be rescheduled for free.</li>
              <li>Final weather decisions are made about 2 hours before the session.</li>
              <li>All sessions to be done at Trinity House - Little Falls</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;