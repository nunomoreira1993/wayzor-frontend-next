import React, { useState } from "react";

const Footer = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const stations = [
    "PDL Marina Atlântico",
    "PDL Aeroporto", 
    "Furnas Terra Nostra",
    "Faial Aeroporto",
    "PDL SEDE",
    "PDL SM Park Hotel"
  ];

  const stationsColumn2 = [
    "FAIAL Hotel do Canal",
    "TER Aeroporto",
    "PDL Grand Hotel AA", 
    "PDL Neat HOTEL",
    "TER Mar Hotel"
  ];

  return (
    <footer className="bg-wayzor-purple py-20" style={{ backgroundColor: "#332634" }}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="w-full max-w-[1680px] mx-auto px-[184px]">
          <div className="max-w-[1312px] mx-auto">
            {/* Main Content */}
            <div className="flex justify-between items-start pb-14 border-b border-white/10 mb-6">
              {/* Logo Section */}
              <div className="flex flex-col items-start gap-[200px]">
                <div className="w-[192px] h-[205px] flex flex-col items-start gap-10">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/57a1d4e29a0f3df2a8258ee43ae52904113a8ca4?width=376"
                    alt="Wayzor"
                    className="w-[188px] h-[58px] object-contain"
                  />
                </div>
              </div>

              {/* Site Map */}
              <div className="flex flex-col items-start gap-6 pt-1">
                <h3 className="text-white font-lato font-bold text-lg leading-[140%]">
                  Site Map
                </h3>
                <div className="flex flex-col items-start gap-4">
                  <a href="#" className="text-white font-lato text-base font-normal leading-[150%] hover:text-wayzor-green transition-colors">
                    Booking
                  </a>
                  <a href="#" className="text-white font-lato text-base font-normal leading-[150%] hover:text-wayzor-green transition-colors">
                    Personal Area
                  </a>
                  <a href="#" className="text-white font-lato text-base font-normal leading-[150%] hover:text-wayzor-green transition-colors">
                    Fast Check-in
                  </a>
                  <a href="#" className="text-white font-lato text-base font-normal leading-[150%] hover:text-wayzor-green transition-colors">
                    About Us
                  </a>
                  <a href="#" className="text-white font-lato text-base font-normal leading-[150%] hover:text-wayzor-green transition-colors">
                    General Contacts
                  </a>
                </div>
              </div>

              {/* More Info */}
              <div className="flex flex-col items-start gap-6 pt-1">
                <h3 className="text-white font-lato font-bold text-lg leading-[140%]">
                  More Info
                </h3>
                <div className="flex flex-col items-start gap-4">
                  <a href="#" className="text-white font-lato text-base font-normal leading-[150%] hover:text-wayzor-green transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-white font-lato text-base font-normal leading-[150%] hover:text-wayzor-green transition-colors">
                    Cookie Policy
                  </a>
                  <a href="#" className="text-white font-lato text-base font-normal leading-[150%] hover:text-wayzor-green transition-colors">
                    Personal Data Opt-Out
                  </a>
                  <a href="#" className="text-white font-lato text-base font-normal leading-[150%] hover:text-wayzor-green transition-colors">
                    Terms & Conditions
                  </a>
                  <a href="#" className="text-white font-lato text-base font-normal leading-[150%] hover:text-wayzor-green transition-colors">
                    FAQs
                  </a>
                </div>
              </div>

              {/* Stations */}
              <div className="flex items-center gap-16">
                <div className="flex flex-col items-start gap-6 pt-1">
                  <h3 className="text-white font-lato font-bold text-lg leading-[140%]">
                    Stations
                  </h3>
                  <div className="flex items-start gap-10">
                    <div className="flex flex-col items-start gap-4">
                      {stations.map((station, index) => (
                        <a key={index} href="#" className="text-white font-lato text-base font-normal leading-[150%] hover:text-wayzor-green transition-colors">
                          {station}
                        </a>
                      ))}
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      {stationsColumn2.map((station, index) => (
                        <a key={index} href="#" className="text-white font-lato text-base font-normal leading-[150%] hover:text-wayzor-green transition-colors">
                          {station}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              <div className="flex flex-col items-start gap-6">
                <h3 className="text-white font-lato font-bold text-lg leading-[140%]">
                  Follow Us
                </h3>
                <div className="flex items-end gap-4">
                  {/* Instagram */}
                  <div className="flex p-2 items-end gap-2 rounded-full bg-white">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10 6.40533C8.01576 6.40533 6.40696 8.01413 6.40696 9.99837C6.40696 11.9826 8.01576 13.5914 10 13.5914C11.9842 13.5914 13.593 11.9826 13.593 9.99837C13.593 8.01413 11.9842 6.40533 10 6.40533ZM10 12.3317C8.7123 12.3317 7.66666 11.2877 7.66666 9.99837C7.66666 8.70903 8.71065 7.66504 10 7.66504C11.2893 7.66504 12.3333 8.70903 12.3333 9.99837C12.3333 11.2877 11.2893 12.3317 10 12.3317Z" fill="black"/>
                      <path d="M14.5761 6.26204C14.5761 6.72585 14.2001 7.10185 13.7363 7.10185C13.2725 7.10185 12.8965 6.72585 12.8965 6.26204C12.8965 5.79823 13.2725 5.42224 13.7363 5.42224C14.2001 5.42224 14.5761 5.79823 14.5761 6.26204Z" fill="black"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M10 3C8.09974 3 7.86097 3.00823 7.11503 3.04281C6.37074 3.07739 5.86192 3.19431 5.41567 3.36885C4.95625 3.54834 4.56598 3.78711 4.17572 4.17572C3.78711 4.56434 3.54669 4.9546 3.36885 5.41567C3.19595 5.86027 3.07739 6.36909 3.04281 7.11503C3.00823 7.86097 3 8.09974 3 10C3 11.9003 3.00823 12.139 3.04281 12.885C3.07739 13.6293 3.19431 14.1381 3.36885 14.5843C3.54834 15.0438 3.78711 15.434 4.17572 15.8243C4.56434 16.2129 4.9546 16.4533 5.41567 16.6311C5.86027 16.804 6.36909 16.9226 7.11503 16.9572C7.86097 16.9918 8.09974 17 10 17C11.9003 17 12.139 16.9918 12.885 16.9572C13.6293 16.9226 14.1381 16.8057 14.5843 16.6311C15.0438 16.4517 15.434 16.2129 15.8243 15.8243C16.2129 15.4357 16.4533 15.0454 16.6311 14.5843C16.804 14.1397 16.9226 13.6309 16.9572 12.885C16.9918 12.139 17 11.9003 17 10C17 8.09974 16.9918 7.86097 16.9572 7.11503C16.9226 6.37074 16.8057 5.86191 16.6311 5.41567C16.4517 4.95625 16.2129 4.56598 15.8243 4.17572C15.4357 3.78711 15.0454 3.54669 14.5843 3.36885C14.1397 3.19595 13.6309 3.07739 12.885 3.04281C12.139 3.00823 11.9003 3 10 3ZM10 4.26135C11.869 4.26135 12.0896 4.26794 12.8273 4.30252C13.5091 4.3338 13.8796 4.44742 14.1266 4.54293C14.4526 4.66972 14.6864 4.82122 14.9318 5.06657C15.1771 5.31193 15.3286 5.54411 15.4554 5.8718C15.5509 6.1188 15.6646 6.4893 15.6958 7.17102C15.7288 7.90873 15.737 8.13103 15.737 9.99835C15.737 11.8657 15.7304 12.088 15.6958 12.8257C15.6646 13.5074 15.5509 13.8779 15.4554 14.1249C15.3286 14.451 15.1771 14.6848 14.9318 14.9301C14.6864 15.1755 14.4542 15.327 14.1266 15.4538C13.8796 15.5493 13.5091 15.6629 12.8273 15.6942C12.0896 15.7271 11.869 15.7354 10 15.7354C8.13103 15.7354 7.91037 15.7288 7.17267 15.6942C6.49094 15.6629 6.12044 15.5493 5.87344 15.4538C5.5474 15.327 5.31357 15.1755 5.06822 14.9301C4.82287 14.6848 4.67137 14.4526 4.54458 14.1249C4.44907 13.8779 4.33545 13.5074 4.30416 12.8257C4.27123 12.088 4.263 11.8657 4.263 9.99835C4.263 8.13103 4.26958 7.90873 4.30416 7.17102C4.33545 6.4893 4.44907 6.1188 4.54458 5.8718C4.67137 5.54575 4.82287 5.31193 5.06822 5.06657C5.31357 4.82122 5.54575 4.66972 5.87344 4.54293C6.12044 4.44742 6.49094 4.3338 7.17267 4.30252C7.91037 4.26958 8.13268 4.26135 10 4.26135Z" fill="black"/>
                    </svg>
                  </div>

                  {/* Facebook */}
                  <div className="flex p-2 items-end gap-2 rounded-full bg-white">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.4609 18V10.7989H13.6437L14.0038 7.59587H11.4609V6.03563C11.4609 5.2105 11.4834 4.39287 12.631 4.39287H13.7937V2.11252C13.7937 2.11252 12.7886 2 11.7759 2C9.66807 2 8.34037 3.32771 8.34037 5.75809V7.59587H6V10.7989H8.34037V18H11.4609Z" fill="#171C1D"/>
                    </svg>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex p-2 items-end gap-2 rounded-full bg-white">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M2 3.14614C2 2.51331 2.52601 2 3.17491 2H16.8251C17.474 2 18 2.51331 18 3.14614V16.8539C18 17.4869 17.474 18 16.8251 18L3.17491 18C2.52601 18 2 17.4869 2 16.8539V3.14614ZM6.94338 15.3937V8.16876H4.54196V15.3937H6.94338ZM5.74266 7.18232C6.58008 7.18232 7.10131 6.62753 7.10131 5.9342C7.0857 5.22527 6.58008 4.68587 5.75854 4.68587C4.93709 4.68587 4.4 5.22527 4.4 5.9342C4.4 6.62753 4.92112 7.18232 5.72701 7.18232H5.74266ZM10.6514 15.3937V11.359C10.6514 11.143 10.667 10.9273 10.7304 10.773C10.904 10.3415 11.2991 9.89471 11.9625 9.89471C12.8315 9.89471 13.1791 10.5572 13.1791 11.5285V15.3937H15.5803V11.251C15.5803 9.03184 14.3956 7.99922 12.8156 7.99922C11.5418 7.99922 10.9706 8.69937 10.6515 9.19167V9.21656H10.6354C10.6407 9.20832 10.646 9.20003 10.6515 9.19167V8.16876H8.25007C8.28158 8.8467 8.25007 15.3937 8.25007 15.3937H10.6514Z" fill="#212529"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-start">
              <div className="w-[676px] text-bg-light-medium font-lato text-xs font-normal leading-[100%]">
                Copyright 2025 © Wayzor
              </div>
              <div className="flex w-[192px] justify-center items-start gap-1">
                <span className="text-bg-light-medium font-lato text-xs font-normal leading-[100%]">
                  Easy and secure payment:
                </span>
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                  <g clipPath="url(#clip0_2100_326)">
                    <path d="M14.8628 2.75806H9.10938V13.096H14.8628V2.75806Z" fill="#FF5F00"/>
                    <path d="M9.47948 7.94522C9.47948 5.84476 10.4658 3.98175 11.9818 2.77627C10.8676 1.89955 9.46121 1.36987 7.92697 1.36987C4.29226 1.36987 1.35162 4.31051 1.35162 7.94522C1.35162 11.5799 4.29226 14.5206 7.92697 14.5206C9.46121 14.5206 10.8676 13.9909 11.9818 13.1142C10.4658 11.9087 9.47948 10.0274 9.47948 7.94522Z" fill="#EB001B"/>
                    <path d="M22.6301 7.94522C22.6301 11.5799 19.6895 14.5206 16.0548 14.5206C14.5205 14.5206 13.1142 13.9909 12 13.1142C13.5342 11.9087 14.5023 10.0457 14.5023 7.94522C14.5023 5.84476 13.516 3.98175 12 2.77627C13.1142 1.89955 14.5205 1.36987 16.0548 1.36987C19.6895 1.36987 22.6301 4.31051 22.6301 7.94522Z" fill="#F79E1B"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2100_326">
                      <rect width="24" height="15.8721" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                  <g clipPath="url(#clip0_2100_332)">
                    <path d="M-0.5 0.655273V15.346H23.5V0.655273H-0.5ZM5.71046 10.4509L5.1583 6.49336L6.49832 7.33513L4.24289 5.55036H6.41066L6.62997 7.87817C6.65755 8.15463 6.67978 8.42618 6.70073 8.70557C6.81345 8.43812 6.94469 8.14562 7.09653 7.82305L8.17037 5.55036H9.59598L7.06779 10.4508L5.71046 10.4509ZM9.29311 10.4509L10.2242 5.55041H11.5L10.5702 10.4509H9.29311ZM12.726 10.5204C12.1439 10.5204 11.6177 10.3867 11.319 10.1625L11.2313 10.0958L11.6625 9.03228L11.8069 9.11868C12.0966 9.29189 12.4664 9.39312 12.8219 9.39312C13.0934 9.39312 13.4123 9.28779 13.4123 8.99402C13.4123 8.84056 13.323 8.70562 12.8667 8.46986C12.3829 8.20858 11.8304 7.81941 11.8304 7.11794C11.8304 6.15151 12.6384 5.47596 13.7949 5.47596C14.2681 5.47596 14.647 5.55866 14.9514 5.7265L15.0592 5.78577L14.6515 6.87808L14.5058 6.79826C14.4491 6.76658 14.1409 6.61063 13.7414 6.61063C13.3308 6.61063 13.1564 6.7892 13.1564 6.95415C13.1564 7.13105 13.3823 7.27135 13.7558 7.47994C14.4203 7.82882 14.7444 8.26907 14.7444 8.82406C14.7445 9.83868 13.934 10.5204 12.726 10.5204ZM17.7249 10.4509L17.6294 9.25403H16.524L15.9755 10.4509H14.608L16.9934 5.55041H18.4762L19.0505 10.4509H17.7249Z" fill="white"/>
                    <path d="M17.4567 7.05737C17.4057 7.18862 17.3535 7.31328 17.302 7.42352L16.9375 8.21548H17.5579L17.4814 7.37741C17.4752 7.28286 17.4662 7.17384 17.4567 7.05737Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2100_332">
                      <rect width="24" height="15.8721" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full px-5 py-20">
        <div className="flex flex-col items-start gap-6">
          {/* Main Content */}
          <div className="flex flex-col items-start gap-12 self-stretch pb-10 border-b border-white/20">
            {/* Logo */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/027981a6866ea49505a8433cd73308be4f83791d?width=376"
              alt="Wayzor"
              className="w-[188px] h-[58px] object-contain"
            />

            {/* Collapsible Sections */}
            <div className="flex flex-col items-start gap-6 self-stretch">
              {/* Site Map */}
              <div className="pb-4 self-stretch border-b border-white/10">
                <button
                  onClick={() => toggleSection("sitemap")}
                  className="flex items-center justify-between w-full"
                >
                  <span className="text-white font-lato font-bold text-base leading-[140%]">
                    Site Map
                  </span>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    className={`transition-transform duration-200 ${openSections.sitemap ? "rotate-180" : ""}`}
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.42385 5.40463C1.68903 5.08642 2.16195 5.04343 2.48016 5.3086L8.00002 9.90848L13.5199 5.3086C13.8381 5.04343 14.311 5.08642 14.5762 5.40463C14.8414 5.72284 14.7984 6.19576 14.4802 6.46093L8.48016 11.4609C8.20202 11.6927 7.79801 11.6927 7.51988 11.4609L1.51988 6.46093C1.20167 6.19576 1.15868 5.72284 1.42385 5.40463Z" fill="white"/>
                  </svg>
                </button>
                {openSections.sitemap && (
                  <div className="mt-4 space-y-3">
                    <div className="text-white font-lato text-base font-normal leading-[150%]">Booking</div>
                    <div className="text-white font-lato text-base font-normal leading-[150%]">Personal Area</div>
                    <div className="text-white font-lato text-base font-normal leading-[150%]">Fast Check-in</div>
                    <div className="text-white font-lato text-base font-normal leading-[150%]">About Us</div>
                    <div className="text-white font-lato text-base font-normal leading-[150%]">General Contacts</div>
                  </div>
                )}
              </div>

              {/* More Info */}
              <div className="flex pb-4 justify-between items-center self-stretch border-b border-white/10">
                <button
                  onClick={() => toggleSection("moreinfo")}
                  className="flex items-center justify-between w-full"
                >
                  <span className="text-white font-lato font-bold text-base leading-[140%]">
                    More Info
                  </span>
                  <svg 
                    width="16" 
                    height="17" 
                    viewBox="0 0 16 17" 
                    fill="none" 
                    className={`transition-transform duration-200 ${openSections.moreinfo ? "rotate-180" : ""}`}
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.42385 5.40463C1.68903 5.08642 2.16195 5.04343 2.48016 5.3086L8.00002 9.90848L13.5199 5.3086C13.8381 5.04343 14.311 5.08642 14.5762 5.40463C14.8414 5.72284 14.7984 6.19576 14.4802 6.46093L8.48016 11.4609C8.20202 11.6927 7.79801 11.6927 7.51988 11.4609L1.51988 6.46093C1.20167 6.19576 1.15868 5.72284 1.42385 5.40463Z" fill="white"/>
                  </svg>
                </button>
                {openSections.moreinfo && (
                  <div className="mt-4 space-y-3">
                    <div className="text-white font-lato text-base font-normal leading-[150%]">Privacy Policy</div>
                    <div className="text-white font-lato text-base font-normal leading-[150%]">Cookie Policy</div>
                    <div className="text-white font-lato text-base font-normal leading-[150%]">Personal Data Opt-Out</div>
                    <div className="text-white font-lato text-base font-normal leading-[150%]">Terms & Conditions</div>
                    <div className="text-white font-lato text-base font-normal leading-[150%]">FAQs</div>
                  </div>
                )}
              </div>

              {/* Stations */}
              <div className="flex pb-4 justify-between items-center self-stretch border-b border-white/10">
                <button
                  onClick={() => toggleSection("stations")}
                  className="flex items-center justify-between w-full"
                >
                  <span className="text-white font-lato font-bold text-base leading-[140%]">
                    Stations
                  </span>
                  <svg 
                    width="16" 
                    height="17" 
                    viewBox="0 0 16 17" 
                    fill="none" 
                    className={`transition-transform duration-200 ${openSections.stations ? "rotate-180" : ""}`}
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.42385 5.40463C1.68903 5.08642 2.16195 5.04343 2.48016 5.3086L8.00002 9.90848L13.5199 5.3086C13.8381 5.04343 14.311 5.08642 14.5762 5.40463C14.8414 5.72284 14.7984 6.19576 14.4802 6.46093L8.48016 11.4609C8.20202 11.6927 7.79801 11.6927 7.51988 11.4609L1.51988 6.46093C1.20167 6.19576 1.15868 5.72284 1.42385 5.40463Z" fill="white"/>
                  </svg>
                </button>
                {openSections.stations && (
                  <div className="mt-4 space-y-3">
                    {[...stations, ...stationsColumn2].map((station, index) => (
                      <div key={index} className="text-white font-lato text-base font-normal leading-[150%]">
                        {station}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-6">
                <h3 className="text-white font-lato font-bold text-base leading-[140%]">
                  Follow us on social media
                </h3>
                <div className="flex items-end gap-4">
                  {/* Instagram */}
                  <div className="flex p-2 items-end gap-2 rounded-full bg-white">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10 6.7901C8.01576 6.7901 6.40696 8.3989 6.40696 10.3831C6.40696 12.3674 8.01576 13.9762 10 13.9762C11.9842 13.9762 13.593 12.3674 13.593 10.3831C13.593 8.3989 11.9842 6.7901 10 6.7901ZM10 12.7165C8.7123 12.7165 7.66666 11.6725 7.66666 10.3831C7.66666 9.09379 8.71065 8.0498 10 8.0498C11.2893 8.0498 12.3333 9.09379 12.3333 10.3831C12.3333 11.6725 11.2893 12.7165 10 12.7165Z" fill="black"/>
                      <path d="M14.5761 6.64681C14.5761 7.11062 14.2001 7.48661 13.7363 7.48661C13.2725 7.48661 12.8965 7.11062 12.8965 6.64681C12.8965 6.183 13.2725 5.80701 13.7363 5.80701C14.2001 5.80701 14.5761 6.183 14.5761 6.64681Z" fill="black"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M10 3.38477C8.09974 3.38477 7.86097 3.393 7.11503 3.42758C6.37074 3.46216 5.86192 3.57907 5.41567 3.75362C4.95625 3.93311 4.56598 4.17187 4.17572 4.56049C3.78711 4.9491 3.54669 5.33936 3.36885 5.80043C3.19595 6.24503 3.07739 6.75386 3.04281 7.4998C3.00823 8.24574 3 8.48451 3 10.3848C3 12.285 3.00823 12.5238 3.04281 13.2697C3.07739 14.014 3.19431 14.5229 3.36885 14.9691C3.54834 15.4285 3.78711 15.8188 4.17572 16.209C4.56434 16.5977 4.9546 16.8381 5.41567 17.0159C5.86027 17.1888 6.36909 17.3074 7.11503 17.342C7.86097 17.3765 8.09974 17.3848 10 17.3848C11.9003 17.3848 12.139 17.3765 12.885 17.342C13.6293 17.3074 14.1381 17.1905 14.5843 17.0159C15.0438 16.8364 15.434 16.5977 15.8243 16.209C16.2129 15.8204 16.4533 15.4302 16.6311 14.9691C16.804 14.5245 16.9226 14.0157 16.9572 13.2697C16.9918 12.5238 17 12.285 17 10.3848C17 8.48451 16.9918 8.24574 16.9572 7.4998C16.9226 6.7555 16.8057 6.24668 16.6311 5.80043C16.4517 5.34101 16.2129 4.95075 15.8243 4.56049C15.4357 4.17187 15.0454 3.93146 14.5843 3.75362C14.1397 3.58072 13.6309 3.46216 12.885 3.42758C12.139 3.393 11.9003 3.38477 10 3.38477ZM10 4.64612C11.869 4.64612 12.0896 4.6527 12.8273 4.68728C13.5091 4.71857 13.8796 4.83219 14.1266 4.9277C14.4526 5.05449 14.6864 5.20598 14.9318 5.45134C15.1771 5.69669 15.3286 5.92887 15.4554 6.25656C15.5509 6.50356 15.6646 6.87406 15.6958 7.55578C15.7288 8.29349 15.737 8.51579 15.737 10.3831C15.737 12.2504 15.7304 12.4727 15.6958 13.2105C15.6646 13.8922 15.5509 14.2627 15.4554 14.5097C15.3286 14.8357 15.1771 15.0695 14.9318 15.3149C14.6864 15.5603 14.4542 15.7117 14.1266 15.8385C13.8796 15.934 13.5091 16.0477 12.8273 16.079C12.0896 16.1119 11.869 16.1201 10 16.1201C8.13103 16.1201 7.91037 16.1135 7.17267 16.079C6.49094 16.0477 6.12044 15.934 5.87344 15.8385C5.5474 15.7117 5.31357 15.5603 5.06822 15.3149C4.82287 15.0695 4.67137 14.8374 4.54458 14.5097C4.44907 14.2627 4.33545 13.8922 4.30416 13.2105C4.27123 12.4727 4.263 12.2504 4.263 10.3831C4.263 8.51579 4.26958 8.29349 4.30416 7.55578C4.33545 6.87406 4.44907 6.50356 4.54458 6.25656C4.67137 5.93052 4.82287 5.69669 5.06822 5.45134C5.31357 5.20598 5.54575 5.05449 5.87344 4.9277C6.12044 4.83219 6.49094 4.71857 7.17267 4.68728C7.91037 4.65435 8.13268 4.64612 10 4.64612Z" fill="black"/>
                    </svg>
                  </div>

                  {/* Facebook */}
                  <div className="flex p-2 items-end gap-2 rounded-full bg-white">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.4609 18.3848V11.1836H13.6437L14.0038 7.98064H11.4609V6.4204C11.4609 5.59527 11.4834 4.77764 12.631 4.77764H13.7937V2.49728C13.7937 2.49728 12.7886 2.38477 11.7759 2.38477C9.66807 2.38477 8.34037 3.71247 8.34037 6.14285V7.98064H6V11.1836H8.34037V18.3848H11.4609Z" fill="#171C1D"/>
                    </svg>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex p-2 items-end gap-2 rounded-full bg-white">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path d="M2 3.5309C2 2.89808 2.52601 2.38477 3.17491 2.38477H16.8251C17.474 2.38477 18 2.89808 18 3.53091V17.2386C18 17.8717 17.474 18.3848 16.8251 18.3848L3.17491 18.3848C2.52601 18.3848 2 17.8717 2 17.2386V3.5309ZM6.94338 15.7784V8.55353H4.54196V15.7784H6.94338ZM5.74266 7.56709C6.58008 7.56709 7.10131 7.0123 7.10131 6.31897C7.0857 5.61003 6.58008 5.07064 5.75854 5.07064C4.93709 5.07064 4.4 5.61003 4.4 6.31897C4.4 7.0123 4.92112 7.56709 5.72701 7.56709H5.74266ZM10.6514 15.7784V11.7437C10.6514 11.5278 10.667 11.3121 10.7304 11.1577C10.904 10.7263 11.2991 10.2795 11.9625 10.2795C12.8315 10.2795 13.1791 10.942 13.1791 11.9133V15.7784H15.5803V11.6358C15.5803 9.41661 14.3956 8.38399 12.8156 8.38399C11.5418 8.38399 10.9706 9.08413 10.6515 9.57644V9.60132H10.6354C10.6407 9.59309 10.646 9.58479 10.6515 9.57644V8.55353H8.25007C8.28158 9.23146 8.25007 15.7784 8.25007 15.7784H10.6514Z" fill="#212529"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-[350px] flex flex-col justify-center items-start gap-6">
            <div className="text-bg-light-medium font-lato text-xs font-normal leading-[100%]">
              Copyright 2025 © Wayzor
            </div>
            <div className="flex w-[192px] justify-center items-start gap-1">
              <span className="text-bg-light-medium font-lato text-xs font-normal leading-[100%]">
                Easy and secure payment:
              </span>
              <svg width="24" height="17" viewBox="0 0 24 17" fill="none">
                <g clipPath="url(#clip0_2100_1511)">
                  <path d="M14.8667 3.14258H9.11328V13.4805H14.8667V3.14258Z" fill="#FF5F00"/>
                  <path d="M9.47942 8.32974C9.47942 6.22928 10.4657 4.36627 11.9817 3.16079C10.8675 2.28407 9.46115 1.75439 7.92691 1.75439C4.2922 1.75439 1.35156 4.69503 1.35156 8.32974C1.35156 11.9644 4.2922 14.9051 7.92691 14.9051C9.46115 14.9051 10.8675 14.3754 11.9817 13.4987C10.4657 12.2932 9.47942 10.4119 9.47942 8.32974Z" fill="#EB001B"/>
                  <path d="M22.6301 8.32974C22.6301 11.9644 19.6895 14.9051 16.0548 14.9051C14.5205 14.9051 13.1142 14.3754 12 13.4987C13.5342 12.2932 14.5023 10.4302 14.5023 8.32974C14.5023 6.22928 13.516 4.36627 12 3.16079C13.1142 2.28407 14.5205 1.75439 16.0548 1.75439C19.6895 1.75439 22.6301 4.69503 22.6301 8.32974Z" fill="#F79E1B"/>
                </g>
                <defs>
                  <clipPath id="clip0_2100_1511">
                    <rect width="24" height="15.8721" fill="white" transform="translate(0 0.384766)"/>
                  </clipPath>
                </defs>
              </svg>
              <svg width="24" height="17" viewBox="0 0 24 17" fill="none">
                <g clipPath="url(#clip0_2100_1517)">
                  <path d="M-0.5 1.04004V15.7308H23.5V1.04004H-0.5ZM5.71046 10.8356L5.1583 6.87812L6.49832 7.71989L4.24289 5.93512H6.41066L6.62997 8.26294C6.65755 8.53939 6.67978 8.81094 6.70073 9.09033C6.81345 8.82289 6.94469 8.53039 7.09653 8.20782L8.17037 5.93512H9.59598L7.06779 10.8356L5.71046 10.8356ZM9.29311 10.8356L10.2242 5.93517H11.5L10.5702 10.8356H9.29311ZM12.726 10.9052C12.1439 10.9052 11.6177 10.7714 11.319 10.5472L11.2313 10.4806L11.6625 9.41705L11.8069 9.50345C12.0966 9.67665 12.4664 9.77788 12.8219 9.77788C13.0934 9.77788 13.4123 9.67255 13.4123 9.37879C13.4123 9.22532 13.323 9.09038 12.8667 8.85462C12.3829 8.59335 11.8304 8.20417 11.8304 7.50271C11.8304 6.53627 12.6384 5.86072 13.7949 5.86072C14.2681 5.86072 14.647 5.94343 14.9514 6.11126L15.0592 6.17053L14.6515 7.26285L14.5058 7.18303C14.4491 7.15134 14.1409 6.9954 13.7414 6.9954C13.3308 6.9954 13.1564 7.17397 13.1564 7.33892C13.1564 7.51582 13.3823 7.65612 13.7558 7.8647C14.4203 8.21359 14.7444 8.65383 14.7444 9.20882C14.7445 10.2234 13.934 10.9052 12.726 10.9052ZM17.7249 10.8356L17.6294 9.63879H16.524L15.9755 10.8356H14.608L16.9934 5.93517H18.4762L19.0505 10.8356H17.7249Z" fill="white"/>
                  <path d="M17.4606 7.44238C17.4096 7.57363 17.3574 7.69829 17.3059 7.80853L16.9414 8.60049H17.5618L17.4853 7.76242C17.4791 7.66787 17.4701 7.55885 17.4606 7.44238Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_2100_1517">
                    <rect width="24" height="15.8721" fill="white" transform="translate(0 0.384766)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
