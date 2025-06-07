import React from 'react'
//import Image from 'next/image'; 
const WhoWeAre = () => {
  return (
    <div className="rounded-lg mt-4 bg-white flex flex-col md:flex-row items-center justify-evenly pt-3 pb-3 mb-4">
      <div className="mb-6 md:mb-0">
        <img
          className="h-60 w-60 rounded-md "
          src={`${process.env.PUBLIC_URL}/images/image.png`}
          alt="Coach Werno"
          width={240}
          height={240}
        />
      </div>

      <div className="max-w-xl text-center md:text-left px-4">
        <p className="font-semibold text-2xl text-blue-900 mb-2">
          Welcome to WeCoach Cricket Academy!
        </p>
        <p className="text-sm text-black leading-relaxed ">
          At WeCoach, we{'\' '}re passionate about building skill, discipline, and a lasting love for cricket. Whether you{'\' '}re picking up a bat for the first time or perfecting your technique, our dedicated coaches are here to guide you every step of the way.
          <br className="mb-2" />
          <br/>
          Join us to train, grow, and compete — as we shape confident cricketers through expert coaching, smart strategy, and true sportsmanship.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;