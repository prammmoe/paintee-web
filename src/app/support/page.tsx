// src/app/support/page.tsx
'use client'
// src/app/support/page.tsx

import React, { useState } from 'react';

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    return `mailto:support@paintee.com?subject=Support Request&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Paintee Support Center
          </h1>
          <p className="text-lg mt-4 text-gray-600 dark:text-gray-400">
            Need help? Fill in the form below and our support team will get back to you.
          </p>
        </div>

        {/* Tutorial Video Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Tutorial Videos</h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            Watch these videos to get started quickly and learn the ins and outs of the app.
          </p>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Video */}
            <div className="flex-1 max-w-full">
              <iframe
                className="w-full h-56 md:h-72 rounded-lg shadow-xl dark:shadow-gray-800"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Tutorial Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Description */}
            <div className="flex-1 max-w-full space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Getting Started with Paintee
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                In this tutorial, we walk you through the process of using Paintee. From selecting a design to applying the face painting, you'll learn everything step by step.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                This video covers:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>How to navigate the app</li>
                <li>Selecting your desired design</li>
                <li>Applying face paint with AR technology</li>
                <li>Saving your masterpiece</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support Form Section */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Contact Support</h2>
          
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

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-xl text-gray-900 dark:text-white">How do I start using Paintee?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To get started, download the app, choose your favorite design, and follow the on-screen instructions to apply the face painting.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-xl text-gray-900 dark:text-white">What if the app isn't working properly?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Please ensure that you are using the latest version of the app. If you continue to face issues, our support team will assist you in troubleshooting.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-xl text-gray-900 dark:text-white">How can I contact support?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can contact support by filling out the form above. Our team is available 24/7 to assist you with any queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;

