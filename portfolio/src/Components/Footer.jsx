import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Logo and About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">STV</h2>
          <p className="text-gray-300">
            STV is committed to delivering top-notch services. We specialize in
            innovative solutions for a better tomorrow.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info and Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">Email: info@stv.com</p>
          <p className="text-gray-300 mb-4">Phone: +123 456 7890</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 text-gray-300 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5 3.66 9.13 8.43 9.87v-6.99h-2.5V12h2.5V9.64c0-2.48 1.49-3.84 3.76-3.84 1.08 0 2.21.18 2.21.18v2.44h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.75l-.44 2.88h-2.31v6.99C18.34 21.13 22 17 22 12z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 text-gray-300 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 19c7.74 0 12-6.41 12-12 0-.18 0-.36-.01-.54A8.65 8.65 0 0022 4.47a8.46 8.46 0 01-2.43.67 4.18 4.18 0 001.84-2.3 8.46 8.46 0 01-2.67 1.02A4.15 4.15 0 0016.75 2c-2.28 0-4.14 1.86-4.14 4.14 0 .32.03.63.1.93A11.76 11.76 0 012.88 3.56 4.14 4.14 0 003.52 9.64a4.11 4.11 0 01-1.88-.52v.05c0 2 1.43 3.69 3.33 4.08a4.16 4.16 0 01-1.86.07c.53 1.65 2.04 2.85 3.84 2.89A8.33 8.33 0 012 17.39a11.72 11.72 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 text-gray-300 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3A2.99 2.99 0 0022 6v12a2.99 2.99 0 01-3 3H6a2.99 2.99 0 01-3-3V6a2.99 2.99 0 013-3h13m0-1H6a4.98 4.98 0 00-5 5v12a4.98 4.98 0 005 5h13a4.98 4.98 0 005-5V6a4.98 4.98 0 00-5-5zm-6.03 9.9H13v5.55h2.56v-5.55h2.15l.25-2.07h-2.4V9.28c0-.51.14-.88.85-.88h1.53V6.84A20.93 20.93 0 0014.33 7c-2.29 0-3.05 1.08-3.05 3.08v1.85zm-4.36-1.9H9.21v7.45H6.65v-7.45h2.32v1.15h.01"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-400 text-sm mt-8">
        &copy; {new Date().getFullYear()} STV. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
