"use client"; // Ensures it's a client-side component
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const SocialDots = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle between expanded or collapsed state
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Main Dot that expands/collapses */}
      <div className="fixed bottom-6 right-6">
        <div className="relative">
          {/* Main Circle */}
          <div
            onClick={handleToggle}
            className="bg-gradient-to-r from-green-400 to-blue-400 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
          >
            {/* Icon inside the main dot */}
            <span className="text-white text-lg">+</span>
          </div>

          {/* Expanded Dots for social media links */}
          {isOpen && (
            <div className="absolute bottom-20 right-0 flex flex-col space-y-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-full flex items-center justify-center transition-transform transform hover:scale-110"
              >
                <FaLinkedin className="text-white" size={24} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-full flex items-center justify-center transition-transform transform hover:scale-110"
              >
                <FaInstagram className="text-white" size={24} />
              </a>

              {/* Email */}
              <a
                href="mailto:someone@example.com"
                className="bg-gray-800 p-4 rounded-full flex items-center justify-center transition-transform transform hover:scale-110"
              >
                <FaEnvelope className="text-white" size={24} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialDots;
