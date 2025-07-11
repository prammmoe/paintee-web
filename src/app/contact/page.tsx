// src/app/contact/page.tsx
'use client'

import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const encodeEmailData = () => {
    const { name, email, message } = formData;
    return `mailto:contact@paintee.com?subject=Contact Request&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="text-lg mt-4 text-gray-600 dark:text-gray-400">
            Have questions or need assistance? Fill out the form below and we'll get back to you.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            If you need help or want to ask something, feel free to reach out to us via the form below or by using the contact information provided.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">Phone</p>
                <p className="text-gray-600 dark:text-gray-400">+1 (800) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">Email</p>
                <p className="text-gray-600 dark:text-gray-400">contact@paintee.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">Address</p>
                <p className="text-gray-600 dark:text-gray-400">1234 Paint St, Art City, CA 12345</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Contact Form</h2>
          
          <form action={encodeEmailData()} method="get" encType="text/plain">
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-500"
                placeholder="Your Email"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-500"
                placeholder="Enter your message"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
