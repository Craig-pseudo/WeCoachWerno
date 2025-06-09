"use client";
import React from 'react';

const EmailUs = () => {
  // Specify the type for event
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement); // Type cast to HTMLFormElement

    formData.append("access_key", "5ed7c88b-0798-440e-9695-79ab2783ae7e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div>
      <div className="pt-3 w-full max-w-screen-lg mx-auto">
        <div className="pl-8">
          <h1 className="text-2xl font-semibold text-blue-900">Get In Touch</h1>
        </div>

        <section className="px-8 flex justify-start h-auto flex-col md:flex-row">
          <form
            onSubmit={onSubmit}
            className="w-full md:w-1/2 bg-white border-2 border-gray-300 rounded-lg shadow-md text-gray-800 my-[25px] mx-auto overflow-y-auto md:h-auto md:my-0 sm:p-[10px]"
          >
            <h2 className="text-[22px] md:text-[20px] sm:text-[18px]">Contact Form</h2>

            <div className="mt-5">
              <label>Full Name</label>
              <input
                type="text"
                className="w-full h-12 bg-transparent border-2 border-gray-300 outline-none rounded-md px-3 text-gray-800 mt-2"
                placeholder="Enter Your Name"
                name="name"
                required
              />
            </div>

            <div className="mt-5">
              <label>Email Address</label>
              <input
                type="email"
                className="w-full h-12 bg-transparent border-2 border-gray-300 outline-none rounded-md px-3 text-gray-800 mt-2"
                placeholder="Enter Your Email"
                name="email"
                required
              />
            </div>

            <div className="mt-5">
              <label>Your Message</label>
              <textarea
                name="message"
                className="w-full h-30 bg-transparent border-2 border-gray-300 outline-none rounded-md px-3 text-gray-800 mt-2 resize-none"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full h-10 bg-[#b6cae6] border-none rounded-md shadow-md cursor-pointer text-white font-medium text-[16px] mt-5 transition duration-500 hover:bg-gray-500 md:h-[45px] md:text-[14px] sm:h-[40px] sm:text-[13px]"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EmailUs;