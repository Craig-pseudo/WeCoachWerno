import React from 'react'
import Image from 'next/image'

const Details = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6 max-w-5xl mx-auto rounded-lg mb-4 bg-blue-300">
      <div className="md:w-3/5 mb-6 md:mb-0">
        <h1 className="text-2xl font-semibold text-black mb-4">Our Head Coach</h1>
        <p className="text-lg font-semibold mb-2">Coach Werno Van Wyk</p>
        <ul className="list-disc list-inside text-sm text-black space-y-1">
          <li>High School Head Coach of Cricket at Trinity House Little Falls</li>
          <li>4 years coaching experience</li>
          <li>Cricket South Africa Level II Certificate</li>
          <li>Coach at Spartan Cricket Academy</li>
          <li>District Cricket Coach</li>
          <li>U15 Lions Provincial Coach</li>
          <li>SASCA Designation for Sports Coaching</li>
          <li>Safeguarding Certificate</li>
        </ul>
      </div>

      <div className="md:w-2/5 flex justify-center">
        <img
          src="/images/Werno.jpeg"
          alt="Coach Werno Van Wyk"
          className="w-60 h-60 rounded-md shadow-md" />
      </div>
      
    </div>
  );
};

export default Details;
