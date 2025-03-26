import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 space-y-4 lg:flex-row lg:space-y-0">
        {/* Left: Brand Name */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white lg:order-1">
          Yogi Plastic
        </h1>

        {/* Center: Copyright Text */}
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center lg:order-2">
          © {new Date().getFullYear()} Yogi Plastic PVT LTD. All rights
          reserved.
        </p>

        {/* Right: Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:order-3">
          <Link
            to={"/"}
            className="text-sm text-gray-600 dark:text-gray-200 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-sm text-gray-600 dark:text-gray-200 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-sm text-gray-600 dark:text-gray-200 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
