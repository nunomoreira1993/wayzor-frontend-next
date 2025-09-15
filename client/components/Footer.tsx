import React, { useState } from "react";

const Footer = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {},
  );

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer
      className="bg-purple-900 text-white pt-20 pb-8 mt-16"
      style={{ backgroundColor: "#332634" }}
    >
      <div className="container mx-auto px-5 lg:px-20">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="border-b border-white/20 pb-10 mb-8">
            {/* Logo */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/027981a6866ea49505a8433cd73308be4f83791d?width=376"
              alt="Wayzor"
              className="h-14 mb-12"
            />

            {/* Collapsible Sections */}
            <div className="space-y-6">
              {/* Site Map */}
              <div className="border-b border-white/10 pb-4">
                <button
                  onClick={() => toggleSection("sitemap")}
                  className="flex items-center justify-between w-full text-white font-bold text-base"
                >
                  <span>Site Map</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-200 ${openSections.sitemap ? "rotate-180" : ""}`}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.42385 5.40463C1.68903 5.08642 2.16195 5.04343 2.48016 5.3086L8.00002 9.90848L13.5199 5.3086C13.8381 5.04343 14.311 5.08642 14.5762 5.40463C14.8414 5.72284 14.7984 6.19576 14.4802 6.46093L8.48016 11.4609C8.20202 11.6927 7.79801 11.6927 7.51988 11.4609L1.51988 6.46093C1.20167 6.19576 1.15868 5.72284 1.42385 5.40463Z"
                      fill="white"
                    />
                  </svg>
                </button>
                {openSections.sitemap && (
                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <div>Booking</div>
                    <div>Personal Area</div>
                    <div>Fast Check-in</div>
                    <div>About Us</div>
                    <div>General Contacts</div>
                  </div>
                )}
              </div>

              {/* More Info */}
              <div className="border-b border-white/10 pb-4">
                <button
                  onClick={() => toggleSection("moreinfo")}
                  className="flex items-center justify-between w-full text-white font-bold text-base"
                >
                  <span>More Info</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-200 ${openSections.moreinfo ? "rotate-180" : ""}`}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.42385 5.40463C1.68903 5.08642 2.16195 5.04343 2.48016 5.3086L8.00002 9.90848L13.5199 5.3086C13.8381 5.04343 14.311 5.08642 14.5762 5.40463C14.8414 5.72284 14.7984 6.19576 14.4802 6.46093L8.48016 11.4609C8.20202 11.6927 7.79801 11.6927 7.51988 11.4609L1.51988 6.46093C1.20167 6.19576 1.15868 5.72284 1.42385 5.40463Z"
                      fill="white"
                    />
                  </svg>
                </button>
                {openSections.moreinfo && (
                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <div>Privacy Policy</div>
                    <div>Cookie Policy</div>
                    <div>Personal Data Opt-Out</div>
                    <div>Terms & Conditions</div>
                    <div>FAQs</div>
                  </div>
                )}
              </div>

              {/* Stations */}
              <div className="border-b border-white/10 pb-4">
                <button
                  onClick={() => toggleSection("stations")}
                  className="flex items-center justify-between w-full text-white font-bold text-base"
                >
                  <span>Stations</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-200 ${openSections.stations ? "rotate-180" : ""}`}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.42385 5.40463C1.68903 5.08642 2.16195 5.04343 2.48016 5.3086L8.00002 9.90848L13.5199 5.3086C13.8381 5.04343 14.311 5.08642 14.5762 5.40463C14.8414 5.72284 14.7984 6.19576 14.4802 6.46093L8.48016 11.4609C8.20202 11.6927 7.79801 11.6927 7.51988 11.4609L1.51988 6.46093C1.20167 6.19576 1.15868 5.72284 1.42385 5.40463Z"
                      fill="white"
                    />
                  </svg>
                </button>
                {openSections.stations && (
                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <div>PDL Marina Atlântico</div>
                    <div>PDL Aeroporto</div>
                    <div>Furnas Terra Nostra</div>
                    <div>Faial Aeroporto</div>
                    <div>PDL SEDE</div>
                  </div>
                )}
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <h4 className="text-white font-bold text-base mb-6">
                Follow us on social media
              </h4>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-2 rounded-full">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 6.40533C8.01576 6.40533 6.40696 8.01413 6.40696 9.99837C6.40696 11.9826 8.01576 13.5914 10 13.5914C11.9842 13.5914 13.593 11.9826 13.593 9.99837C13.593 8.01413 11.9842 6.40533 10 6.40533ZM10 12.3317C8.7123 12.3317 7.66666 11.2877 7.66666 9.99837C7.66666 8.70903 8.71065 7.66504 10 7.66504C11.2893 7.66504 12.3333 8.70903 12.3333 9.99837C12.3333 11.2877 11.2893 12.3317 10 12.3317Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="bg-white p-2 rounded-full">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.4609 18V10.7989H13.6437L14.0038 7.59587H11.4609V6.03563C11.4609 5.2105 11.4834 4.39287 12.631 4.39287H13.7937V2.11252C13.7937 2.11252 12.7886 2 11.7759 2C9.66807 2 8.34037 3.32771 8.34037 5.75809V7.59587H6V10.7989H8.34037V18H11.4609Z"
                      fill="#171C1D"
                    />
                  </svg>
                </div>
                <div className="bg-white p-2 rounded-full">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M2 3.14614C2 2.51331 2.52601 2 3.17491 2H16.8251C17.474 2 18 2.51331 18 3.14614V16.8539C18 17.4869 17.474 18 16.8251 18L3.17491 18C2.52601 18 2 17.4869 2 16.8539V3.14614Z"
                      fill="#212529"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Footer Bottom */}
          <div className="text-center space-y-6">
            <div className="text-white/70 text-xs">
              Copyright 2025 © Wayzor
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-white/70 text-xs">
                Easy and secure payment:
              </span>
              <div className="flex items-center gap-2">
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                  <g clipPath="url(#clip0_2004_326)">
                    <path
                      d="M14.8628 2.75806H9.10938V13.096H14.8628V2.75806Z"
                      fill="#FF5F00"
                    />
                    <path
                      d="M9.47948 7.94522C9.47948 5.84476 10.4658 3.98175 11.9818 2.77627C10.8676 1.89955 9.46121 1.36987 7.92697 1.36987C4.29226 1.36987 1.35162 4.31051 1.35162 7.94522C1.35162 11.5799 4.29226 14.5206 7.92697 14.5206C9.46121 14.5206 10.8676 13.9909 11.9818 13.1142C10.4658 11.9087 9.47948 10.0274 9.47948 7.94522Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M22.6301 7.94522C22.6301 11.5799 19.6895 14.5206 16.0548 14.5206C14.5205 14.5206 13.1142 13.9909 12 13.1142C13.5342 11.9087 14.5023 10.0457 14.5023 7.94522C14.5023 5.84476 13.516 3.98175 12 2.77627C13.1142 1.89955 14.5205 1.36987 16.0548 1.36987C19.6895 1.36987 22.6301 4.31051 22.6301 7.94522Z"
                      fill="#F79E1B"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 6.40533C8.01576 6.40533 6.40696 8.01413 6.40696 9.99837C6.40696 11.9826 8.01576 13.5914 10 13.5914C11.9842 13.5914 13.593 11.9826 13.593 9.99837C13.593 8.01413 11.9842 6.40533 10 6.40533ZM10 12.3317C8.7123 12.3317 7.66666 11.2877 7.66666 9.99837C7.66666 8.70903 8.71065 7.66504 10 7.66504C11.2893 7.66504 12.3333 8.70903 12.3333 9.99837C12.3333 11.2877 11.2893 12.3317 10 12.3317Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="bg-white p-2 rounded-full">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.4609 18V10.7989H13.6437L14.0038 7.59587H11.4609V6.03563C11.4609 5.2105 11.4834 4.39287 12.631 4.39287H13.7937V2.11252C13.7937 2.11252 12.7886 2 11.7759 2C9.66807 2 8.34037 3.32771 8.34037 5.75809V7.59587H6V10.7989H8.34037V18H11.4609Z"
                        fill="#171C1D"
                      />
                    </svg>
                  </div>
                  <div className="bg-white p-2 rounded-full">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M2 3.14614C2 2.51331 2.52601 2 3.17491 2H16.8251C17.474 2 18 2.51331 18 3.14614V16.8539C18 17.4869 17.474 18 16.8251 18L3.17491 18C2.52601 18 2 17.4869 2 16.8539V3.14614Z"
                        fill="#212529"
                      />
                    </svg>
                  </div>
                </div>

                <div className="text-sm text-white/80">
                  Copyright 2025 © Wayzor
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <span className="text-sm text-white/80">
                    Easy and secure payment:
                  </span>
                  <div className="flex items-center gap-2">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                      <g clipPath="url(#clip0_2004_326)">
                        <path
                          d="M14.8628 2.75806H9.10938V13.096H14.8628V2.75806Z"
                          fill="#FF5F00"
                        />
                        <path
                          d="M9.47948 7.94522C9.47948 5.84476 10.4658 3.98175 11.9818 2.77627C10.8676 1.89955 9.46121 1.36987 7.92697 1.36987C4.29226 1.36987 1.35162 4.31051 1.35162 7.94522C1.35162 11.5799 4.29226 14.5206 7.92697 14.5206C9.46121 14.5206 10.8676 13.9909 11.9818 13.1142C10.4658 11.9087 9.47948 10.0274 9.47948 7.94522Z"
                          fill="#EB001B"
                        />
                        <path
                          d="M22.6301 7.94522C22.6301 11.5799 19.6895 14.5206 16.0548 14.5206C14.5205 14.5206 13.1142 13.9909 12 13.1142C13.5342 11.9087 14.5023 10.0457 14.5023 7.94522C14.5023 5.84476 13.516 3.98175 12 2.77627C13.1142 1.89955 14.5205 1.36987 16.0548 1.36987C19.6895 1.36987 22.6301 4.31051 22.6301 7.94522Z"
                          fill="#F79E1B"
                        />
                      </g>
                    </svg>
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
      </div>
    </footer>
  );
};

export default Footer;
