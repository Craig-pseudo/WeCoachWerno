'use client'; 
import React from 'react'


const GoogleMap = () => {
return (
  <div className="m-3">
    <div className="mb-4 text-2xl font-semibold text-blue-900">
      WeCoach Cricket Academy - Location
    </div>

    <div className="relative w-full overflow-hidden pb-[56.25%]"> {/* 16:9 aspect ratio */}
      <iframe
        className="absolute inset-0 w-full h-full rounded-md shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.512797372881!2d27.879183374197677!3d-26.114818060337328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e959fa7cc842fdf%3A0x9e3871909487b104!2sTrinityhouse%20Little%20Falls!5e0!3m2!1sen!2sza!4v1744803759188!5m2!1sen!2sza"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);
}

export default GoogleMap