// /components/Contact.js

"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a form submission
    setTimeout(() => {
      setResponseMessage("Thank you for reaching out! I'll get back to you soon.");
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    }, 2000);
  };

  return (
    <section className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8" data-aos="fade-up">Contact Me</h2>
      <p className="text-center text-emerald-500 mb-12" data-aos="fade-up" data-aos-delay="100">
        Have questions or want to connect? Send me a message, and I &apos; ll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-medium text-emerald-500 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-medium text-emerald-500 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-medium text-emerald-500 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            rows={5}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 text-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full hover:scale-105 transition transform duration-300"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {responseMessage && (
          <p className="mt-4 text-center text-emerald-500" data-aos="fade-up" data-aos-delay="300">
            {responseMessage}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;





