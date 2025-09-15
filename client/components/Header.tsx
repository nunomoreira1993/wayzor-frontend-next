import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isFleetPage = location.pathname === "/fleet";

  return (
    <header
      className={`${isFleetPage ? "relative bg-white shadow-md" : "absolute"} top-0 left-0 w-full z-50`}
    >
      <div className="w-full px-5 lg:px-8">
        <nav className="flex items-center justify-between h-[100px] lg:h-[91px] py-8 lg:py-4 lg:px-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b0e7d1ccb17419e1fca78b6997a3ab245bbe3f5b?width=194"
                alt="Wayzor"
                className="h-6 lg:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/fleet"
              className={`font-lato font-bold text-base transition-colors ${
                location.pathname === "/fleet"
                  ? "text-wayzor-green"
                  : isFleetPage
                    ? "text-gray-700 hover:text-wayzor-green"
                    : "text-white hover:text-wayzor-green"
              }`}
            >
              Vehicles
            </Link>
            <a
              href="#"
              className={`font-lato font-bold text-base hover:text-wayzor-green transition-colors ${
                isFleetPage ? "text-gray-700" : "text-white"
              }`}
            >
              Stations
            </a>
            <a
              href="#"
              className={`font-lato font-bold text-base hover:text-wayzor-green transition-colors ${
                isFleetPage ? "text-gray-700" : "text-white"
              }`}
            >
              About us
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Fast Check-in Button */}
            <button
              className={`hidden lg:flex items-center px-6 py-3 border-2 border-wayzor-green rounded-full ${
                isFleetPage
                  ? "bg-white"
                  : "bg-bg-overlay-black-10 backdrop-blur-sm"
              }`}
            >
              <span
                className={`font-lato font-bold text-sm ${
                  isFleetPage ? "text-wayzor-green" : "text-white"
                }`}
              >
                Fast Check-in
              </span>
            </button>

            {/* Phone Number */}
            <span
              className={`hidden lg:block font-lato font-bold text-base ${
                isFleetPage ? "text-gray-700" : "text-white"
              }`}
            >
              +351 296 301 805
            </span>

            {/* User Icon & Login */}
            <div className="hidden lg:flex items-center gap-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.25 15C4.25 12.9289 5.92893 11.25 8 11.25H12C14.0711 11.25 15.75 12.9289 15.75 15V17C15.75 17.4142 15.4142 17.75 15 17.75C14.5858 17.75 14.25 17.4142 14.25 17V15C14.25 13.7574 13.2426 12.75 12 12.75H8C6.75736 12.75 5.75 13.7574 5.75 15V17C5.75 17.4142 5.41421 17.75 5 17.75C4.58579 17.75 4.25 17.4142 4.25 17V15Z"
                  fill={isFleetPage ? "#374151" : "white"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 3.75C8.75736 3.75 7.75 4.75736 7.75 6C7.75 7.24264 8.75736 8.25 10 8.25C11.2426 8.25 12.25 7.24264 12.25 6C12.25 4.75736 11.2426 3.75 10 3.75ZM6.25 6C6.25 3.92893 7.92893 2.25 10 2.25C12.0711 2.25 13.75 3.92893 13.75 6C13.75 8.07107 12.0711 9.75 10 9.75C7.92893 9.75 6.25 8.07107 6.25 6Z"
                  fill={isFleetPage ? "#374151" : "white"}
                />
              </svg>
              <span
                className={`font-lato font-bold text-base ${
                  isFleetPage ? "text-gray-700" : "text-white"
                }`}
              >
                Login / Register
              </span>
            </div>

            {/* Language Selector */}
            <div className="hidden lg:flex items-center gap-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10ZM3.87707 8.73997C3.79375 9.14697 3.75 9.56837 3.75 10C3.75 10.4316 3.79375 10.853 3.87707 11.26C3.91707 11.2534 3.95813 11.25 4 11.25H6.52784C6.44599 10.4187 6.44599 9.58128 6.52784 8.75H4C3.95813 8.75 3.91707 8.74657 3.87707 8.73997ZM4.38595 7.25H6.76646C6.96202 6.36455 7.25319 5.49503 7.63997 4.657L7.89008 4.1151C6.35491 4.66558 5.09771 5.7997 4.38595 7.25ZM9.70469 3.75685C9.69763 3.77615 9.68973 3.79531 9.68097 3.81429L9.00191 5.28559C8.70786 5.92269 8.47644 6.58042 8.30765 7.25H11.6923C11.5236 6.58042 11.2921 5.92269 10.9981 5.28559L10.319 3.81429C10.3103 3.79531 10.3024 3.77615 10.2953 3.75685C10.1974 3.7523 10.099 3.75 10 3.75C9.90101 3.75 9.80256 3.7523 9.70469 3.75685ZM12.1099 4.1151L12.36 4.65701C12.7468 5.49503 13.038 6.36455 13.2335 7.25H15.6141C14.9023 5.7997 13.6451 4.66558 12.1099 4.1151ZM16.1229 8.73997C16.0829 8.74657 16.0419 8.75 16 8.75H13.4722C13.554 9.58128 13.554 10.4187 13.4722 11.25H16C16.0419 11.25 16.0829 11.2534 16.1229 11.26C16.2062 10.853 16.25 10.4316 16.25 10C16.25 9.56837 16.2062 9.14697 16.1229 8.73997ZM15.6141 12.75H13.2335C13.038 13.6354 12.7468 14.505 12.36 15.343L12.1099 15.8849C13.6451 15.3344 14.9023 14.2003 15.6141 12.75ZM10.2953 16.2431C10.3024 16.2239 10.3103 16.2047 10.319 16.1857L10.9981 14.7144C11.2921 14.0773 11.5236 13.4196 11.6923 12.75H8.30765C8.47644 13.4196 8.70786 14.0773 9.00191 14.7144L9.68097 16.1857C9.68973 16.2047 9.69763 16.2239 9.70469 16.2431C9.80255 16.2477 9.90101 16.25 10 16.25C10.099 16.25 10.1974 16.2477 10.2953 16.2431ZM7.89008 15.8849L7.63997 15.343C7.25319 14.505 6.96202 13.6354 6.76646 12.75H4.38595C5.09771 14.2003 6.35491 15.3344 7.89008 15.8849ZM8.03608 11.25H11.9639C12.0568 10.4193 12.0568 9.58069 11.9639 8.75H8.03608C7.94324 9.58069 7.94324 10.4193 8.03608 11.25Z"
                  fill={isFleetPage ? "#374151" : "white"}
                />
              </svg>
              <span
                className={`font-lato font-bold text-base ${
                  isFleetPage ? "text-gray-700" : "text-white"
                }`}
              >
                EN
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.24587 4.39238C1.4779 4.11395 1.89171 4.07633 2.17014 4.30835L7.00002 8.33325L11.8299 4.30835C12.1083 4.07633 12.5221 4.11395 12.7542 4.39238C12.9862 4.67081 12.9486 5.08462 12.6701 5.31665L7.42014 9.69165C7.17677 9.89445 6.82326 9.89445 6.5799 9.69164L1.3299 5.31665C1.05146 5.08462 1.01384 4.67081 1.24587 4.39238Z"
                  fill={isFleetPage ? "#374151" : "white"}
                />
              </svg>
            </div>

            {/* Mobile User Icon */}
            <div className="lg:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.1001 18C5.1001 15.5147 7.11482 13.5 9.6001 13.5H14.4001C16.8854 13.5 18.9001 15.5147 18.9001 18V20.4C18.9001 20.897 18.4972 21.3 18.0001 21.3C17.503 21.3 17.1001 20.897 17.1001 20.4V18C17.1001 16.5088 15.8913 15.3 14.4001 15.3H9.6001C8.10893 15.3 6.9001 16.5088 6.9001 18V20.4C6.9001 20.897 6.49715 21.3 6.0001 21.3C5.50304 21.3 5.1001 20.897 5.1001 20.4V18Z"
                  fill={isFleetPage ? "#374151" : "white"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0001 4.49995C10.5089 4.49995 9.3001 5.70878 9.3001 7.19995C9.3001 8.69112 10.5089 9.89995 12.0001 9.89995C13.4913 9.89995 14.7001 8.69112 14.7001 7.19995C14.7001 5.70878 13.4913 4.49995 12.0001 4.49995ZM7.5001 7.19995C7.5001 4.71467 9.51482 2.69995 12.0001 2.69995C14.4854 2.69995 16.5001 4.71467 16.5001 7.19995C16.5001 9.68523 14.4854 11.7 12.0001 11.7C9.51482 11.7 7.5001 9.68523 7.5001 7.19995Z"
                  fill={isFleetPage ? "#374151" : "white"}
                />
              </svg>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden ${isFleetPage ? "text-gray-700" : "text-white"}`}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 9C2 8.44772 2.44772 8 3 8H26C26.5523 8 27 8.44772 27 9C27 9.55228 26.5523 10 26 10H3C2.44772 10 2 9.55228 2 9ZM2 16C2 15.4477 2.44772 15 3 15H29C29.5523 15 30 15.4477 30 16C30 16.5523 29.5523 17 29 17H3C2.44772 17 2 16.5523 2 16ZM2 23C2 22.4477 2.44772 22 3 22H24C24.5523 22 25 22.4477 25 23C25 23.5523 24.5523 24 24 24H3C2.44772 24 2 23.5523 2 23Z"
                  fill={isFleetPage ? "#374151" : "white"}
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
