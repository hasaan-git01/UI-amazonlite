import React, { useState } from 'react'
import { Toastify } from '../Messages/Toastify';

const ContactUs = () => {
      const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    problem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Toastify("Your message has been received. We’ll get back to you soon.")
  };
  return (
    < >
       <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Problem Textarea */}
          <textarea
            name="problem"
            placeholder="Describe the problem you are facing..."
            rows="5"
            value={formData.problem}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
    </ >
  )
}

export default ContactUs
