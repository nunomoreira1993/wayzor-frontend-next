import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-[91px] px-4 lg:px-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c0306462bec75412cd241fde2cd6b9540e4b7321?width=301" 
              alt="Wayzor" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-white font-lato font-bold text-base hover:text-wayzor-green transition-colors">
              Vehicles
            </a>
            <a href="#" className="text-white font-lato font-bold text-base hover:text-wayzor-green transition-colors">
              Stations
            </a>
            <a href="#" className="text-white font-lato font-bold text-base hover:text-wayzor-green transition-colors">
              About us
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            {/* Fast Check-in Button */}
            <button className="hidden lg:flex items-center px-6 py-3 border-2 border-wayzor-green rounded-full bg-bg-overlay-black-10 backdrop-blur-sm">
              <span className="text-white font-lato font-bold text-sm">Fast Check-in</span>
            </button>

            {/* Phone Number */}
            <span className="hidden lg:block text-white font-lato font-bold text-base">
              +351 296 301 805
            </span>

            {/* User Icon & Login */}
            <div className="hidden lg:flex items-center gap-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.25 15C4.25 12.9289 5.92893 11.25 8 11.25H12C14.0711 11.25 15.75 12.9289 15.75 15V17C15.75 17.4142 15.4142 17.75 15 17.75C14.5858 17.75 14.25 17.4142 14.25 17V15C14.25 13.7574 13.2426 12.75 12 12.75H8C6.75736 12.75 5.75 13.7574 5.75 15V17C5.75 17.4142 5.41421 17.75 5 17.75C4.58579 17.75 4.25 17.4142 4.25 17V15Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 3.75C8.75736 3.75 7.75 4.75736 7.75 6C7.75 7.24264 8.75736 8.25 10 8.25C11.2426 8.25 12.25 7.24264 12.25 6C12.25 4.75736 11.2426 3.75 10 3.75ZM6.25 6C6.25 3.92893 7.92893 2.25 10 2.25C12.0711 2.25 13.75 3.92893 13.75 6C13.75 8.07107 12.0711 9.75 10 9.75C7.92893 9.75 6.25 8.07107 6.25 6Z" fill="white"/>
              </svg>
              <span className="text-white font-lato font-bold text-base">Login / Register</span>
            </div>

            {/* Language Selector */}
            <div className="hidden lg:flex items-center gap-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10ZM3.87707 8.73997C3.79375 9.14697 3.75 9.56837 3.75 10C3.75 10.4316 3.79375 10.853 3.87707 11.26C3.91707 11.2534 3.95813 11.25 4 11.25H6.52784C6.44599 10.4187 6.44599 9.58128 6.52784 8.75H4C3.95813 8.75 3.91707 8.74657 3.87707 8.73997ZM4.38595 7.25H6.76646C6.96202 6.36455 7.25319 5.49503 7.63997 4.657L7.89008 4.1151C6.35491 4.66558 5.09771 5.7997 4.38595 7.25ZM9.70469 3.75685C9.69763 3.77615 9.68973 3.79531 9.68097 3.81429L9.00191 5.28559C8.70786 5.92269 8.47644 6.58042 8.30765 7.25H11.6923C11.5236 6.58042 11.2921 5.92269 10.9981 5.28559L10.319 3.81429C10.3103 3.79531 10.3024 3.77615 10.2953 3.75685C10.1974 3.7523 10.099 3.75 10 3.75C9.90101 3.75 9.80256 3.7523 9.70469 3.75685ZM12.1099 4.1151L12.36 4.65701C12.7468 5.49503 13.038 6.36455 13.2335 7.25H15.6141C14.9023 5.7997 13.6451 4.66558 12.1099 4.1151ZM16.1229 8.73997C16.0829 8.74657 16.0419 8.75 16 8.75H13.4722C13.554 9.58128 13.554 10.4187 13.4722 11.25H16C16.0419 11.25 16.0829 11.2534 16.1229 11.26C16.2062 10.853 16.25 10.4316 16.25 10C16.25 9.56837 16.2062 9.14697 16.1229 8.73997ZM15.6141 12.75H13.2335C13.038 13.6354 12.7468 14.505 12.36 15.343L12.1099 15.8849C13.6451 15.3344 14.9023 14.2003 15.6141 12.75ZM10.2953 16.2431C10.3024 16.2239 10.3103 16.2047 10.319 16.1857L10.9981 14.7144C11.2921 14.0773 11.5236 13.4196 11.6923 12.75H8.30765C8.47644 13.4196 8.70786 14.0773 9.00191 14.7144L9.68097 16.1857C9.68973 16.2047 9.69763 16.2239 9.70469 16.2431C9.80255 16.2477 9.90101 16.25 10 16.25C10.099 16.25 10.1974 16.2477 10.2953 16.2431ZM7.89008 15.8849L7.63997 15.343C7.25319 14.505 6.96202 13.6354 6.76646 12.75H4.38595C5.09771 14.2003 6.35491 15.3344 7.89008 15.8849ZM8.03608 11.25H11.9639C12.0568 10.4193 12.0568 9.58069 11.9639 8.75H8.03608C7.94324 9.58069 7.94324 10.4193 8.03608 11.25Z" fill="white"/>
              </svg>
              <span className="text-white font-lato font-bold text-base">EN</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.24587 4.39238C1.4779 4.11395 1.89171 4.07633 2.17014 4.30835L7.00002 8.33325L11.8299 4.30835C12.1083 4.07633 12.5221 4.11395 12.7542 4.39238C12.9862 4.67081 12.9486 5.08462 12.6701 5.31665L7.42014 9.69165C7.17677 9.89445 6.82326 9.89445 6.5799 9.69164L1.3299 5.31665C1.05146 5.08462 1.01384 4.67081 1.24587 4.39238Z" fill="white"/>
              </svg>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
