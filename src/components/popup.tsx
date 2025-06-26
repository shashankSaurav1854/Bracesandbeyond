'use client';

import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const PopupAd = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 relative">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
        >
          <FaTimes />
        </button>

        {/* Popup content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Special Offer!</h2>
          <div className="mb-4">
            <span className="text-4xl font-bold text-green-500">30% OFF</span>
          </div>
          <Image
            src="/invisalign-popup.jpg"
            alt="Invisalign"
            className="rounded-lg pb-4"
            width={500}
            height={500}
          />
          <h3 className="text-xl font-semibold mb-3">Invisalign Treatment</h3>
          <p className="text-gray-600 mb-6">
            Transform your smile with clear aligners. Limited time offer!
          </p>
          <div className="space-y-3 flex flex-col gap-3">
            <a
              href="https://booking.appointy.com/en-US/bracesandbeyond/bookings/calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Claim Discount
            </a>
            <button
              onClick={closePopup}
              className="w-full text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAd;
