import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-purple-900 text-white pt-20 pb-8 mt-16"
      style={{ backgroundColor: "#332634" }}
    >
      <div className="container mx-auto px-4 lg:px-20">
        <div className="max-w-7xl mx-auto border-b border-white/10 pb-12 mb-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-1/3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/57a1d4e29a0f3df2a8258ee43ae52904113a8ca4?width=376"
                alt="Wayzor"
                className="h-14 mb-6"
              />
              <p className="text-sm text-white/80">
                Easy and reliable car rental in the Azores. Explore with
                freedom.
              </p>
            </div>

            <div className="w-full lg:w-1/3 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-bold mb-4">Site Map</h4>
                <ul className="text-sm space-y-2 text-white/80">
                  <li>Booking</li>
                  <li>Personal Area</li>
                  <li>Fast Check-in</li>
                  <li>About Us</li>
                  <li>General Contacts</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">More Info</h4>
                <ul className="text-sm space-y-2 text-white/80">
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                  <li>Personal Data Opt-Out</li>
                  <li>Terms & Conditions</li>
                  <li>FAQs</li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-2 rounded-full">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6.40533C8.01576 6.40533 6.40696 8.01413 6.40696 9.99837C6.40696 11.9826 8.01576 13.5914 10 13.5914C11.9842 13.5914 13.593 11.9826 13.593 9.99837C13.593 8.01413 11.9842 6.40533 10 6.40533ZM10 12.3317C8.7123 12.3317 7.66666 11.2877 7.66666 9.99837C7.66666 8.70903 8.71065 7.66504 10 7.66504C11.2893 7.66504 12.3333 8.70903 12.3333 9.99837C12.3333 11.2877 11.2893 12.3317 10 12.3317Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="bg-white p-2 rounded-full">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4609 18V10.7989H13.6437L14.0038 7.59587H11.4609V6.03563C11.4609 5.2105 11.4834 4.39287 12.631 4.39287H13.7937V2.11252C13.7937 2.11252 12.7886 2 11.7759 2C9.66807 2 8.34037 3.32771 8.34037 5.75809V7.59587H6V10.7989H8.34037V18H11.4609Z"
                      fill="#171C1D"
                    />
                  </svg>
                </div>
                <div className="bg-white p-2 rounded-full">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 3.14614C2 2.51331 2.52601 2 3.17491 2H16.8251C17.474 2 18 2.51331 18 3.14614V16.8539C18 17.4869 17.474 18 16.8251 18L3.17491 18C2.52601 18 2 17.4869 2 16.8539V3.14614ZM6.94338 15.3937V8.16876H4.54196V15.3937H6.94338ZM5.74266 7.18232C6.58008 7.18232 7.10131 6.62753 7.10131 5.9342C7.0857 5.22527 6.58008 4.68587 5.75854 4.68587C4.93709 4.68587 4.4 5.22527 4.4 5.9342C4.4 6.62753 4.92112 7.18232 5.72701 7.18232H5.74266ZM10.6514 15.3937V11.359C10.6514 11.143 10.667 10.9273 10.7304 10.773C10.904 10.3415 11.2991 9.89471 11.9625 9.89471C12.8315 9.89471 13.1791 10.5572 13.1791 11.5285V15.3937H15.5803V11.251C15.5803 9.03184 14.3956 7.99922 12.8156 7.99922C11.5418 7.99922 10.9706 8.69937 10.6515 9.19167V9.21656H10.6354C10.6407 9.20832 10.646 9.20003 10.6515 9.19167V8.16876H8.25007C8.28158 8.8467 8.25007 15.3937 8.25007 15.3937H10.6514Z"
                      fill="#212529"
                    />
                  </svg>
                </div>
              </div>

              <div className="text-sm text-white/80">
                Copyright 2025 © Wayzor
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-white/80">
                  Easy and secure payment:
                </span>
                <div className="flex items-center gap-2">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ma_symbol_1.png"
                    alt="ma1"
                    style={{ width: 24 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-white/70 text-sm">
          <div className="max-w-3xl mx-auto">
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
