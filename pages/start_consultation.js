'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function StartConsultation() {
  const router = useRouter();

 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Consultation booked successfully for ${formData.name}!`);
    // Here you can redirect to a payment gateway or thank-you page.
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Start Your Consultation</h1>
        <p className="text-gray-700 mb-6 text-center">
          Fill in your details below and we’ll get in touch to start your consultation session.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded px-4 py-2 mt-1"
              placeholder="Tell us about your goals or issues..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Proceed to Payment
          </button>
        </form>

        <div className="mt-8 border-t pt-4 text-sm text-gray-600 text-center">
          We’ll email you consultation details and next steps after payment.
        </div>
      </div>
    </div>
  );
}
