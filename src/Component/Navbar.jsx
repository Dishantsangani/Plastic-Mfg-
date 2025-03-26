import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route location

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-2 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a href="#">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                Yogi Plastic
              </h1>
            </a>
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                aria-label="toggle menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out 
            ${
              isOpen ? "block" : "hidden"
            } md:relative md:flex md:items-center md:bg-transparent md:w-auto`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                to={"/"}
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                About
              </Link>

              <Link
                to={"/contact"}
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
