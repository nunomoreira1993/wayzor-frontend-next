import React, { useState } from "react";

const SearchWidget = () => {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [selectedPickupLocation, setSelectedPickupLocation] = useState("");

  const handleMobileToggle = () => {
    setIsMobileExpanded(!isMobileExpanded);
  };

  const handleLocationSelect = (location: string) => {
    setSelectedPickupLocation(location);
  };

  const clearPickupLocation = () => {
    setSelectedPickupLocation("");
  };

  return (
    <section className="relative -mt-32 lg:-mt-32 z-20 px-5 lg:px-20">
      <div className="container mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-xl p-6">
          <div className="space-y-6">
            {/* First Row - Main Fields */}
            <div className="flex items-center justify-between gap-6">
              {/* Pick-up Location */}
              <div className="flex-1">
                <div className="relative h-14 border-[1.5px] border-black/10 rounded-lg bg-white">
                  <div className="absolute -top-2 left-3 px-1 bg-white">
                    <label className="text-sm font-bold text-content-bodytext font-lato">
                      Pick-up location
                    </label>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-3 h-full">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.94444 3.75C7.35177 3.75 5.25 5.85177 5.25 8.44444C5.25 9.6606 5.88883 10.7312 6.65116 11.8027L9.92208 16.2387C9.92732 16.2458 9.93562 16.25 9.94444 16.25C9.95326 16.25 9.96156 16.2458 9.9668 16.2387L13.2377 11.8027C14.0001 10.7312 14.6389 9.66062 14.6389 8.44444C14.6389 5.85177 12.5371 3.75 9.94444 3.75ZM3.75 8.44444C3.75 5.02335 6.52335 2.25 9.94444 2.25C13.3655 2.25 16.1389 5.02335 16.1389 8.44444C16.1389 10.1812 15.2242 11.5987 14.4561 12.6777L14.4488 12.6879L11.1741 17.1289C10.8861 17.5195 10.4297 17.75 9.94444 17.75C9.45918 17.75 9.00278 17.5195 8.71479 17.1289L5.4327 12.6777C4.66462 11.5988 3.75 10.1812 3.75 8.44444Z"
                        fill="#528116"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.94445 10.0556C10.8342 10.0556 11.5556 9.33425 11.5556 8.44445C11.5556 7.55466 10.8342 6.83334 9.94445 6.83334C9.05466 6.83334 8.33334 7.55466 8.33334 8.44445C8.33334 9.33425 9.05466 10.0556 9.94445 10.0556ZM9.94445 11.5556C11.6627 11.5556 13.0556 10.1627 13.0556 8.44445C13.0556 6.72624 11.6627 5.33334 9.94445 5.33334C8.22623 5.33334 6.83334 6.72624 6.83334 8.44445C6.83334 10.1627 8.22623 11.5556 9.94445 11.5556Z"
                        fill="#528116"
                      />
                    </svg>
                    <span className="text-content-label font-lato text-base">
                      Choose a location
                    </span>
                  </div>
                </div>
              </div>

              {/* Drop-off Location */}
              <div className="flex-1">
                <div className="relative h-14 border-[1.5px] border-black/10 rounded-lg bg-white">
                  <div className="absolute -top-2 left-3 px-1 bg-white">
                    <label className="text-sm font-bold text-content-bodytext font-lato">
                      Drop-off location
                    </label>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-3 h-full">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.94444 3.75C7.35177 3.75 5.25 5.85177 5.25 8.44444C5.25 9.6606 5.88883 10.7312 6.65116 11.8027L9.92208 16.2387C9.92732 16.2458 9.93562 16.25 9.94444 16.25C9.95326 16.25 9.96156 16.2458 9.9668 16.2387L13.2377 11.8027C14.0001 10.7312 14.6389 9.66062 14.6389 8.44444C14.6389 5.85177 12.5371 3.75 9.94444 3.75ZM3.75 8.44444C3.75 5.02335 6.52335 2.25 9.94444 2.25C13.3655 2.25 16.1389 5.02335 16.1389 8.44444C16.1389 10.1812 15.2242 11.5987 14.4561 12.6777L14.4488 12.6879L11.1741 17.1289C10.8861 17.5195 10.4297 17.75 9.94444 17.75C9.45918 17.75 9.00278 17.5195 8.71479 17.1289L5.4327 12.6777C4.66462 11.5988 3.75 10.1812 3.75 8.44444Z"
                        fill="#528116"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.94445 10.0556C10.8342 10.0556 11.5556 9.33425 11.5556 8.44445C11.5556 7.55466 10.8342 6.83334 9.94445 6.83334C9.05466 6.83334 8.33334 7.55466 8.33334 8.44445C8.33334 9.33425 9.05466 10.0556 9.94445 10.0556ZM9.94445 11.5556C11.6627 11.5556 13.0556 10.1627 13.0556 8.44445C13.0556 6.72624 11.6627 5.33334 9.94445 5.33334C8.22623 5.33334 6.83334 6.72624 6.83334 8.44445C6.83334 10.1627 8.22623 11.5556 9.94445 11.5556Z"
                        fill="#528116"
                      />
                    </svg>
                    <span className="text-content-label font-lato text-base">
                      Choose a location
                    </span>
                  </div>
                </div>
              </div>

              {/* Pick-up Date */}
              <div className="flex-1">
                <div className="relative h-14 border-[1.5px] border-black/10 rounded-lg bg-white">
                  <div className="absolute -top-2 left-3 px-1 bg-white">
                    <label className="text-sm font-bold text-content-bodytext font-lato">
                      Pick-up date
                    </label>
                  </div>
                  <div className="flex items-center justify-between px-3 py-3 h-full">
                    <div className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.5 1.75C6.91421 1.75 7.25 2.08579 7.25 2.5V3.25H12.75V2.5C12.75 2.08579 13.0858 1.75 13.5 1.75C13.9142 1.75 14.25 2.08579 14.25 2.5V3.25H15C16.5188 3.25 17.75 4.48122 17.75 6V14C17.75 15.5188 16.5188 16.75 15 16.75H5C3.48122 16.75 2.25 15.5188 2.25 14V6C2.25 4.48122 3.48122 3.25 5 3.25H5.75V2.5C5.75 2.08579 6.08579 1.75 6.5 1.75ZM5.75 4.75H5C4.30964 4.75 3.75 5.30964 3.75 6V8.25H16.25V6C16.25 5.30964 15.6904 4.75 15 4.75H14.25V5.5C14.25 5.91421 13.9142 6.25 13.5 6.25C13.0858 6.25 12.75 5.91421 12.75 5.5V4.75H7.25V5.5C7.25 5.91421 6.91421 6.25 6.5 6.25C6.08579 6.25 5.75 5.91421 5.75 5.5V4.75ZM16.25 9.75H3.75V14C3.75 14.6904 4.30964 15.25 5 15.25H15C15.6904 15.25 16.25 14.6904 16.25 14V9.75Z"
                          fill="#528116"
                        />
                      </svg>
                      <span className="text-content-label font-lato text-base">
                        Jul 23
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10ZM10 5.36111C10.4142 5.36111 10.75 5.6969 10.75 6.11111V9.59861L12.7494 10.9315C13.094 11.1613 13.1871 11.6269 12.9574 11.9716C12.7276 12.3162 12.262 12.4094 11.9173 12.1796L9.58397 10.624C9.37533 10.4849 9.25 10.2508 9.25 10V6.11111C9.25 5.6969 9.58579 5.36111 10 5.36111Z"
                          fill="#528116"
                        />
                      </svg>
                      <span className="text-content-label font-lato text-base">
                        12:30 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Return Date */}
              <div className="flex-1">
                <div className="relative h-14 border-[1.5px] border-black/10 rounded-lg bg-white">
                  <div className="absolute -top-2 left-3 px-1 bg-white">
                    <label className="text-sm font-bold text-content-bodytext font-lato">
                      Return date
                    </label>
                  </div>
                  <div className="flex items-center justify-between px-3 py-3 h-full">
                    <div className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.5 1.75C6.91421 1.75 7.25 2.08579 7.25 2.5V3.25H12.75V2.5C12.75 2.08579 13.0858 1.75 13.5 1.75C13.9142 1.75 14.25 2.08579 14.25 2.5V3.25H15C16.5188 3.25 17.75 4.48122 17.75 6V14C17.75 15.5188 16.5188 16.75 15 16.75H5C3.48122 16.75 2.25 15.5188 2.25 14V6C2.25 4.48122 3.48122 3.25 5 3.25H5.75V2.5C5.75 2.08579 6.08579 1.75 6.5 1.75ZM5.75 4.75H5C4.30964 4.75 3.75 5.30964 3.75 6V8.25H16.25V6C16.25 5.30964 15.6904 4.75 15 4.75H14.25V5.5C14.25 5.91421 13.9142 6.25 13.5 6.25C13.0858 6.25 12.75 5.91421 12.75 5.5V4.75H7.25V5.5C7.25 5.91421 6.91421 6.25 6.5 6.25C6.08579 6.25 5.75 5.91421 5.75 5.5V4.75ZM16.25 9.75H3.75V14C3.75 14.6904 4.30964 15.25 5 15.25H15C15.6904 15.25 16.25 14.6904 16.25 14V9.75Z"
                          fill="#528116"
                        />
                      </svg>
                      <span className="text-content-label font-lato text-base">
                        Jul 27
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10ZM10 5.36111C10.4142 5.36111 10.75 5.6969 10.75 6.11111V9.59861L12.7494 10.9315C13.094 11.1613 13.1871 11.6269 12.9574 11.9716C12.7276 12.3162 12.262 12.4094 11.9173 12.1796L9.58397 10.624C9.37533 10.4849 9.25 10.2508 9.25 10V6.11111C9.25 5.6969 9.58579 5.36111 10 5.36111Z"
                          fill="#528116"
                        />
                      </svg>
                      <span className="text-content-label font-lato text-base">
                        8:30 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - Driver Age, Promocode, and Search Button */}
            <div className="flex items-center justify-between gap-6">
              {/* Driver Age */}
              <div className="w-[200px]">
                <div className="relative h-14 border-[1.5px] border-black/10 rounded-lg bg-white">
                  <div className="absolute -top-2 left-3 px-1 bg-white">
                    <label className="text-sm font-bold text-content-bodytext font-lato">
                      Driver Age
                    </label>
                  </div>
                  <div className="flex items-center justify-between px-3 py-3 h-full">
                    <span className="text-content-label font-lato text-base">
                      21 - 80
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.42385 5.01986C1.68903 4.70165 2.16195 4.65866 2.48016 4.92383L8.00002 9.52372L13.5199 4.92383C13.8381 4.65866 14.311 4.70165 14.5762 5.01986C14.8414 5.33807 14.7984 5.81099 14.4802 6.07617L8.48016 11.0762C8.20202 11.3079 7.79801 11.3079 7.51988 11.0762L1.51988 6.07617C1.20167 5.81099 1.15868 5.33807 1.42385 5.01986Z"
                        fill="#6D7679"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Promocode */}
              <div className="w-[200px]">
                <div className="relative h-14 border-[1.5px] border-black/10 rounded-lg bg-white">
                  <div className="absolute -top-2 left-3 px-1 bg-white">
                    <label className="text-sm font-bold text-content-bodytext font-lato">
                      Promocode
                    </label>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-3 h-full">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.10523 2.53007C9.64052 2.15664 10.3596 2.15664 10.8949 2.53007L12.1923 3.43517C12.1997 3.44032 12.2126 3.4455 12.2291 3.44547L13.835 3.44255C14.4827 3.44137 15.0863 3.8416 15.3005 4.47626L15.7933 5.93625C15.794 5.93709 15.7956 5.93884 15.7988 5.94107L17.0998 6.84144C17.6441 7.21809 17.8897 7.90706 17.6705 8.548L17.174 10L17.6705 11.452C17.8897 12.0929 17.6441 12.7819 17.0998 13.1586L15.7988 14.0589C15.7956 14.0612 15.794 14.0629 15.7933 14.0637L15.3005 15.5237C15.0863 16.1584 14.4827 16.5586 13.835 16.5575L12.2291 16.5545C12.2126 16.5545 12.1997 16.5597 12.1923 16.5648L10.8949 17.4699C10.3596 17.8434 9.64052 17.8434 9.10523 17.4699L7.8078 16.5648C7.80043 16.5597 7.78753 16.5545 7.77106 16.5545L6.16513 16.5575C5.51738 16.5586 4.91384 16.1584 4.69961 15.5237L4.20679 14.0638C4.20613 14.0629 4.20452 14.0612 4.20131 14.0589L2.90028 13.1586C2.35603 12.7819 2.11043 12.0929 2.3296 11.452L2.82611 10L2.3296 8.548C2.11043 7.90706 2.35603 7.21809 2.90028 6.84144L4.20131 5.94107C4.20452 5.93884 4.20613 5.93709 4.20679 5.93625L4.69961 4.47626C4.91384 3.8416 5.51738 3.44137 6.16513 3.44255L7.77106 3.44547C7.78753 3.4455 7.80043 3.44032 7.8078 3.43517L9.10523 2.53007ZM10.0001 3.75C9.98359 3.75 9.97114 3.75493 9.96345 3.7603L8.66602 4.6654C8.40208 4.84953 8.08768 4.94605 7.76833 4.94547L6.1624 4.94254C6.14556 4.94251 6.13314 4.94764 6.12571 4.9528C6.12265 4.95493 6.12106 4.95656 6.12034 4.95742L5.62747 6.41756C5.52288 6.72744 5.38133 7.02494 5.20282 7.30993L4.85282 7.30993C4.65568 7.30993 4.49282 7.14708 4.49282 6.94993C4.49282 6.75279 4.65568 6.58993 4.85282 6.58993L5.20282 6.58993C5.38133 6.30494 5.52288 6.00744 5.62747 5.69756L6.12034 4.23742C6.12106 4.23656 6.12265 4.23493 6.12571 4.2328C6.13314 4.22764 6.14556 4.22251 6.1624 4.22254L7.76833 4.22547C8.08768 4.22605 8.40208 4.12953 8.66602 3.9454L9.96345 3.04029C9.97114 3.03493 9.98359 3.03 10.0001 3.03C10.0166 3.03 10.029 3.03493 10.0367 3.04029L11.3341 3.9454C11.5981 4.12953 11.9125 4.22605 12.2318 4.22547L13.8378 4.22254C13.8546 4.22251 13.867 4.22764 13.8745 4.2328C13.8775 4.23493 13.8791 4.23656 13.8798 4.23742L14.3727 5.69756C14.4773 6.00744 14.6188 6.30494 14.7973 6.58993L15.1473 6.58993C15.3445 6.58993 15.5073 6.75279 15.5073 6.94993C15.5073 7.14708 15.3445 7.30993 15.1473 7.30993L14.7973 7.30993C14.6188 7.59494 14.4773 7.89244 14.3727 8.20232L13.8798 9.66246C13.8791 9.66332 13.8775 9.66495 13.8745 9.66708C13.867 9.67224 13.8546 9.67737 13.8378 9.67734L12.2318 9.67441C11.9125 9.67383 11.5981 9.77035 11.3341 9.95448L10.0367 10.8596C10.029 10.865 10.0166 10.8699 10.0001 10.8699C9.98359 10.8699 9.97114 10.865 9.96345 10.8596L8.66602 9.95448C8.40208 9.77035 8.08768 9.67383 7.76833 9.67441L6.1624 9.67734C6.14556 9.67737 6.13314 9.67224 6.12571 9.66708C6.12265 9.66495 6.12106 9.66332 6.12034 9.66246L5.62747 8.20232C5.52288 7.89244 5.38133 7.59494 5.20282 7.30993C5.38133 7.02494 5.52288 6.72744 5.62747 6.41756L6.12034 4.95742C6.12106 4.95656 6.12265 4.95493 6.12571 4.9528C6.13314 4.94764 6.14556 4.94251 6.1624 4.94254L7.76833 4.94547C8.08768 4.94605 8.40208 4.84953 8.66602 4.6654L9.96345 3.7603C9.97114 3.75493 9.98359 3.75 10.0001 3.75Z"
                        fill="#528116"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.9481 7.10597C13.241 7.39887 13.241 7.87374 12.9481 8.16663L8.25473 12.86C7.96184 13.1529 7.48696 13.1529 7.19407 12.86C6.90118 12.5671 6.90118 12.0923 7.19407 11.7994L11.8875 7.10597C12.1804 6.81308 12.6552 6.81308 12.9481 7.10597Z"
                        fill="#528116"
                      />
                      <path
                        d="M9.00006 8C9.00006 8.55228 8.55234 9 8.00006 9C7.44777 9 7.00006 8.55228 7.00006 8C7.00006 7.44772 7.44777 7 8.00006 7C8.55234 7 9.00006 7.44772 9.00006 8Z"
                        fill="#528116"
                      />
                      <path
                        d="M13.0001 12C13.0001 12.5523 12.5523 13 12.0001 13C11.4478 13 11.0001 12.5523 11.0001 12C11.0001 11.4477 11.4478 11 12.0001 11C12.5523 11 13.0001 11.4477 13.0001 12Z"
                        fill="#528116"
                      />
                    </svg>
                    <span className="text-content-label font-lato text-base">
                      Your promocode
                    </span>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button className="flex-1 h-[54px] bg-wayzor-green hover:bg-wayzor-green-dark rounded-full transition-colors duration-300">
                <span className="text-black font-lato font-bold text-base">
                  Search for Cars
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {!isMobileExpanded ? (
            /* Mobile Collapsed */
            <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
              {/* Pick-up Location */}
              <div
                onClick={handleMobileToggle}
                className="relative h-14 border-2 border-wayzor-green rounded-lg bg-white cursor-pointer"
              >
                <div className="absolute -top-2 left-3 px-1 bg-white">
                  <label className="text-sm font-bold text-content-bodytext font-lato">
                    Pick-up location
                  </label>
                </div>
                <div className="flex items-center gap-1 px-3 py-3 h-full">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.94444 3.75C7.35177 3.75 5.25 5.85177 5.25 8.44444C5.25 9.6606 5.88883 10.7312 6.65116 11.8027L9.92208 16.2387C9.92732 16.2458 9.93562 16.25 9.94444 16.25C9.95326 16.25 9.96156 16.2458 9.9668 16.2387L13.2377 11.8027C14.0001 10.7312 14.6389 9.66062 14.6389 8.44444C14.6389 5.85177 12.5371 3.75 9.94444 3.75ZM3.75 8.44444C3.75 5.02335 6.52335 2.25 9.94444 2.25C13.3655 2.25 16.1389 5.02335 16.1389 8.44444C16.1389 10.1812 15.2242 11.5987 14.4561 12.6777L14.4488 12.6879L11.1741 17.1289C10.8861 17.5195 10.4297 17.75 9.94444 17.75C9.45918 17.75 9.00278 17.5195 8.71479 17.1289L5.4327 12.6777C4.66462 11.5988 3.75 10.1812 3.75 8.44444Z"
                      fill="#528116"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.94445 10.0556C10.8342 10.0556 11.5556 9.33425 11.5556 8.44445C11.5556 7.55466 10.8342 6.83334 9.94445 6.83334C9.05466 6.83334 8.33334 7.55466 8.33334 8.44445C8.33334 9.33425 9.05466 10.0556 9.94445 10.0556ZM9.94445 11.5556C11.6627 11.5556 13.0556 10.1627 13.0556 8.44445C13.0556 6.72624 11.6627 5.33334 9.94445 5.33334C8.22623 5.33334 6.83334 6.72624 6.83334 8.44445C6.83334 10.1627 8.22623 11.5556 9.94445 11.5556Z"
                      fill="#528116"
                    />
                  </svg>
                  <span className="text-content-label font-lato text-base">
                    Choose a location
                  </span>
                </div>
              </div>

              {/* Search Button */}
              <button className="w-full h-12 bg-wayzor-green hover:bg-wayzor-green-dark rounded-full transition-colors duration-300">
                <span className="text-black font-lato font-bold text-sm">
                  Search for cars
                </span>
              </button>
            </div>
          ) : (
            /* Mobile Expanded */
            <div className="bg-white rounded-2xl shadow-xl p-4 space-y-5">
              {/* Collapse Arrow */}
              <div className="flex justify-center">
                <button onClick={handleMobileToggle} className="p-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.43057 6.51191C2.70014 6.19741 3.17361 6.16099 3.48811 6.43056L10 12.0122L16.5119 6.43056C16.8264 6.16099 17.2999 6.19741 17.5695 6.51191C17.839 6.8264 17.8026 7.29988 17.4881 7.56944L10.4881 13.5694C10.2072 13.8102 9.79279 13.8102 9.51192 13.5694L2.51192 7.56944C2.19743 7.29988 2.161 6.8264 2.43057 6.51191Z"
                      fill="#4B384C"
                    />
                  </svg>
                </button>
              </div>

              {/* Pick-up Location */}
              <div className="relative h-14 border-2 border-wayzor-green rounded-lg bg-white">
                <div className="absolute -top-2 left-3 px-1 bg-white">
                  <label className="text-sm font-bold text-content-bodytext font-lato">
                    Pick-up location
                  </label>
                </div>
                <div className="flex items-center justify-between px-3 py-3 h-full">
                  <div className="flex items-center gap-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.94444 3.75C7.35177 3.75 5.25 5.85177 5.25 8.44444C5.25 9.6606 5.88883 10.7312 6.65116 11.8027L9.92208 16.2387C9.92732 16.2458 9.93562 16.25 9.94444 16.25C9.95326 16.25 9.96156 16.2458 9.9668 16.2387L13.2377 11.8027C14.0001 10.7312 14.6389 9.66062 14.6389 8.44444C14.6389 5.85177 12.5371 3.75 9.94444 3.75ZM3.75 8.44444C3.75 5.02335 6.52335 2.25 9.94444 2.25C13.3655 2.25 16.1389 5.02335 16.1389 8.44444C16.1389 10.1812 15.2242 11.5987 14.4561 12.6777L14.4488 12.6879L11.1741 17.1289C10.8861 17.5195 10.4297 17.75 9.94444 17.75C9.45918 17.75 9.00278 17.5195 8.71479 17.1289L5.4327 12.6777C4.66462 11.5988 3.75 10.1812 3.75 8.44444Z"
                        fill="#528116"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.94445 10.0556C10.8342 10.0556 11.5556 9.33425 11.5556 8.44445C11.5556 7.55466 10.8342 6.83334 9.94445 6.83334C9.05466 6.83334 8.33334 7.55466 8.33334 8.44445C8.33334 9.33425 9.05466 10.0556 9.94445 10.0556ZM9.94445 11.5556C11.6627 11.5556 13.0556 10.1627 13.0556 8.44445C13.0556 6.72624 11.6627 5.33334 9.94445 5.33334C8.22623 5.33334 6.83334 6.72624 6.83334 8.44445C6.83334 10.1627 8.22623 11.5556 9.94445 11.5556Z"
                        fill="#528116"
                      />
                    </svg>
                    <span className="text-content-dark-strong font-lato text-base">
                      PDL Marina Atlântico
                    </span>
                  </div>
                  <button onClick={clearPickupLocation} className="p-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clipPath="url(#clip0_477_954)">
                        <path
                          d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                          fill="#B9DD8B"
                        />
                        <path
                          d="M13 7L7 13M7 7L13 13"
                          stroke="#262E2F"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_477_954">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Drop-off Location */}
              <div className="relative h-14 border-[1.5px] border-black/10 rounded-lg bg-white">
                <div className="absolute -top-2 left-3 px-1 bg-white">
                  <label className="text-sm font-bold text-content-bodytext font-lato">
                    Drop-off location
                  </label>
                </div>
                <div className="flex items-center gap-1 px-3 py-3 h-full">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.94444 3.75C7.35177 3.75 5.25 5.85177 5.25 8.44444C5.25 9.6606 5.88883 10.7312 6.65116 11.8027L9.92208 16.2387C9.92732 16.2458 9.93562 16.25 9.94444 16.25C9.95326 16.25 9.96156 16.2458 9.9668 16.2387L13.2377 11.8027C14.0001 10.7312 14.6389 9.66062 14.6389 8.44444C14.6389 5.85177 12.5371 3.75 9.94444 3.75ZM3.75 8.44444C3.75 5.02335 6.52335 2.25 9.94444 2.25C13.3655 2.25 16.1389 5.02335 16.1389 8.44444C16.1389 10.1812 15.2242 11.5987 14.4561 12.6777L14.4488 12.6879L11.1741 17.1289C10.8861 17.5195 10.4297 17.75 9.94444 17.75C9.45918 17.75 9.00278 17.5195 8.71479 17.1289L5.4327 12.6777C4.66462 11.5988 3.75 10.1812 3.75 8.44444Z"
                      fill="#528116"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.94445 10.0556C10.8342 10.0556 11.5556 9.33425 11.5556 8.44445C11.5556 7.55466 10.8342 6.83334 9.94445 6.83334C9.05466 6.83334 8.33334 7.55466 8.33334 8.44445C8.33334 9.33425 9.05466 10.0556 9.94445 10.0556ZM9.94445 11.5556C11.6627 11.5556 13.0556 10.1627 13.0556 8.44445C13.0556 6.72624 11.6627 5.33334 9.94445 5.33334C8.22623 5.33334 6.83334 6.72624 6.83334 8.44445C6.83334 10.1627 8.22623 11.5556 9.94445 11.5556Z"
                      fill="#528116"
                    />
                  </svg>
                  <span className="text-content-label font-lato text-base">
                    Choose a location
                  </span>
                </div>
              </div>

              {/* Pick-up Date */}
              <div className="relative h-14 border-[1.5px] border-black/10 rounded-lg bg-white">
                <div className="absolute -top-2 left-3 px-1 bg-white">
                  <label className="text-sm font-bold text-content-bodytext font-lato">
                    Pick-up date
                  </label>
                </div>
                <div className="flex items-center justify-between px-3 py-3 h-full">
                  <div className="flex items-center gap-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.5 1.75C6.91421 1.75 7.25 2.08579 7.25 2.5V3.25H12.75V2.5C12.75 2.08579 13.0858 1.75 13.5 1.75C13.9142 1.75 14.25 2.08579 14.25 2.5V3.25H15C16.5188 3.25 17.75 4.48122 17.75 6V14C17.75 15.5188 16.5188 16.75 15 16.75H5C3.48122 16.75 2.25 15.5188 2.25 14V6C2.25 4.48122 3.48122 3.25 5 3.25H5.75V2.5C5.75 2.08579 6.08579 1.75 6.5 1.75ZM5.75 4.75H5C4.30964 4.75 3.75 5.30964 3.75 6V8.25H16.25V6C16.25 5.30964 15.6904 4.75 15 4.75H14.25V5.5C14.25 5.91421 13.9142 6.25 13.5 6.25C13.0858 6.25 12.75 5.91421 12.75 5.5V4.75H7.25V5.5C7.25 5.91421 6.91421 6.25 6.5 6.25C6.08579 6.25 5.75 5.91421 5.75 5.5V4.75ZM16.25 9.75H3.75V14C3.75 14.6904 4.30964 15.25 5 15.25H15C15.6904 15.25 16.25 14.6904 16.25 14V9.75Z"
                        fill="#528116"
                      />
                    </svg>
                    <span className="text-content-label font-lato text-base">
                      Jul 23
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10ZM10 5.36111C10.4142 5.36111 10.75 5.6969 10.75 6.11111V9.59861L12.7494 10.9315C13.094 11.1613 13.1871 11.6269 12.9574 11.9716C12.7276 12.3162 12.262 12.4094 11.9173 12.1796L9.58397 10.624C9.37533 10.4849 9.25 10.2508 9.25 10V6.11111C9.25 5.6969 9.58579 5.36111 10 5.36111Z"
                        fill="#528116"
                      />
                    </svg>
                    <span className="text-content-label font-lato text-base">
                      12:30 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Return Date */}
              <div className="relative h-14 border-[1.5px] border-black/10 rounded-lg bg-white">
                <div className="absolute -top-2 left-3 px-1 bg-white">
                  <label className="text-sm font-bold text-content-bodytext font-lato">
                    Return date
                  </label>
                </div>
                <div className="flex items-center justify-between px-3 py-3 h-full">
                  <div className="flex items-center gap-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.5 1.75C6.91421 1.75 7.25 2.08579 7.25 2.5V3.25H12.75V2.5C12.75 2.08579 13.0858 1.75 13.5 1.75C13.9142 1.75 14.25 2.08579 14.25 2.5V3.25H15C16.5188 3.25 17.75 4.48122 17.75 6V14C17.75 15.5188 16.5188 16.75 15 16.75H5C3.48122 16.75 2.25 15.5188 2.25 14V6C2.25 4.48122 3.48122 3.25 5 3.25H5.75V2.5C5.75 2.08579 6.08579 1.75 6.5 1.75ZM5.75 4.75H5C4.30964 4.75 3.75 5.30964 3.75 6V8.25H16.25V6C16.25 5.30964 15.6904 4.75 15 4.75H14.25V5.5C14.25 5.91421 13.9142 6.25 13.5 6.25C13.0858 6.25 12.75 5.91421 12.75 5.5V4.75H7.25V5.5C7.25 5.91421 6.91421 6.25 6.5 6.25C6.08579 6.25 5.75 5.91421 5.75 5.5V4.75ZM16.25 9.75H3.75V14C3.75 14.6904 4.30964 15.25 5 15.25H15C15.6904 15.25 16.25 14.6904 16.25 14V9.75Z"
                        fill="#528116"
                      />
                    </svg>
                    <span className="text-content-label font-lato text-base">
                      Jul 27
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10ZM10 5.36111C10.4142 5.36111 10.75 5.6969 10.75 6.11111V9.59861L12.7494 10.9315C13.094 11.1613 13.1871 11.6269 12.9574 11.9716C12.7276 12.3162 12.262 12.4094 11.9173 12.1796L9.58397 10.624C9.37533 10.4849 9.25 10.2508 9.25 10V6.11111C9.25 5.6969 9.58579 5.36111 10 5.36111Z"
                        fill="#528116"
                      />
                    </svg>
                    <span className="text-content-label font-lato text-base">
                      8:30 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Promocode */}
              <div className="relative h-14 border-[1.5px] border-black/10 rounded-lg bg-white">
                <div className="absolute -top-2 left-3 px-1 bg-white">
                  <label className="text-sm font-bold text-content-bodytext font-lato">
                    Promocode
                  </label>
                </div>
                <div className="flex items-center gap-1 px-3 py-3 h-full">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.10523 2.53007C9.64052 2.15664 10.3596 2.15664 10.8949 2.53007L12.1923 3.43517C12.1997 3.44032 12.2126 3.4455 12.2291 3.44547L13.835 3.44255C14.4827 3.44137 15.0863 3.8416 15.3005 4.47626L15.7933 5.93625C15.794 5.93709 15.7956 5.93884 15.7988 5.94107L17.0998 6.84144C17.6441 7.21809 17.8897 7.90706 17.6705 8.548L17.174 10L17.6705 11.452C17.8897 12.0929 17.6441 12.7819 17.0998 13.1586L15.7988 14.0589C15.7956 14.0612 15.794 14.0629 15.7933 14.0637L15.3005 15.5237C15.0863 16.1584 14.4827 16.5586 13.835 16.5575L12.2291 16.5545C12.2126 16.5545 12.1997 16.5597 12.1923 16.5648L10.8949 17.4699C10.3596 17.8434 9.64052 17.8434 9.10523 17.4699L7.8078 16.5648C7.80043 16.5597 7.78753 16.5545 7.77106 16.5545L6.16513 16.5575C5.51738 16.5586 4.91384 16.1584 4.69961 15.5237L4.20679 14.0638C4.20613 14.0629 4.20452 14.0612 4.20131 14.0589L2.90028 13.1586C2.35603 12.7819 2.11043 12.0929 2.3296 11.452L2.82611 10L2.3296 8.548C2.11043 7.90706 2.35603 7.21809 2.90028 6.84144L4.20131 5.94107C4.20452 5.93884 4.20613 5.93709 4.20679 5.93625L4.69961 4.47626C4.91384 3.8416 5.51738 3.44137 6.16513 3.44255L7.77106 3.44547C7.78753 3.4455 7.80043 3.44032 7.8078 3.43517L9.10523 2.53007ZM10.0001 3.75C9.98359 3.75 9.97114 3.75493 9.96345 3.7603L8.66602 4.6654C8.40208 4.84953 8.08768 4.94605 7.76833 4.94547L6.1624 4.94254C6.14556 4.94251 6.13314 4.94764 6.12571 4.9528C6.12265 4.95493 6.12106 4.95656 6.12034 4.95742L5.62747 6.41756C5.52288 6.72744 5.38133 7.02494 5.20282 7.30993L4.85282 7.30993C4.65568 7.30993 4.49282 7.14708 4.49282 6.94993C4.49282 6.75279 4.65568 6.58993 4.85282 6.58993L5.20282 6.58993C5.38133 6.30494 5.52288 6.00744 5.62747 5.69756L6.12034 4.23742C6.12106 4.23656 6.12265 4.23493 6.12571 4.2328C6.13314 4.22764 6.14556 4.22251 6.1624 4.22254L7.76833 4.22547C8.08768 4.22605 8.40208 4.12953 8.66602 3.9454L9.96345 3.04029C9.97114 3.03493 9.98359 3.03 10.0001 3.03C10.0166 3.03 10.029 3.03493 10.0367 3.04029L11.3341 3.9454C11.5981 4.12953 11.9125 4.22605 12.2318 4.22547L13.8378 4.22254C13.8546 4.22251 13.867 4.22764 13.8745 4.2328C13.8775 4.23493 13.8791 4.23656 13.8798 4.23742L14.3727 5.69756C14.4773 6.00744 14.6188 6.30494 14.7973 6.58993L15.1473 6.58993C15.3445 6.58993 15.5073 6.75279 15.5073 6.94993C15.5073 7.14708 15.3445 7.30993 15.1473 7.30993L14.7973 7.30993C14.6188 7.59494 14.4773 7.89244 14.3727 8.20232L13.8798 9.66246C13.8791 9.66332 13.8775 9.66495 13.8745 9.66708C13.867 9.67224 13.8546 9.67737 13.8378 9.67734L12.2318 9.67441C11.9125 9.67383 11.5981 9.77035 11.3341 9.95448L10.0367 10.8596C10.029 10.865 10.0166 10.8699 10.0001 10.8699C9.98359 10.8699 9.97114 10.865 9.96345 10.8596L8.66602 9.95448C8.40208 9.77035 8.08768 9.67383 7.76833 9.67441L6.1624 9.67734C6.14556 9.67737 6.13314 9.67224 6.12571 9.66708C6.12265 9.66495 6.12106 9.66332 6.12034 9.66246L5.62747 8.20232C5.52288 7.89244 5.38133 7.59494 5.20282 7.30993C5.38133 7.02494 5.52288 6.72744 5.62747 6.41756L6.12034 4.95742C6.12106 4.95656 6.12265 4.95493 6.12571 4.9528C6.13314 4.94764 6.14556 4.94251 6.1624 4.94254L7.76833 4.94547C8.08768 4.94605 8.40208 4.84953 8.66602 4.6654L9.96345 3.7603C9.97114 3.75493 9.98359 3.75 10.0001 3.75Z"
                      fill="#528116"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.9481 7.10597C13.241 7.39887 13.241 7.87374 12.9481 8.16663L8.25473 12.86C7.96184 13.1529 7.48696 13.1529 7.19407 12.86C6.90118 12.5671 6.90118 12.0923 7.19407 11.7994L11.8875 7.10597C12.1804 6.81308 12.6552 6.81308 12.9481 7.10597Z"
                      fill="#528116"
                    />
                    <path
                      d="M9.00006 8C9.00006 8.55228 8.55234 9 8.00006 9C7.44777 9 7.00006 8.55228 7.00006 8C7.00006 7.44772 7.44777 7 8.00006 7C8.55234 7 9.00006 7.44772 9.00006 8Z"
                      fill="#528116"
                    />
                    <path
                      d="M13.0001 12C13.0001 12.5523 12.5523 13 12.0001 13C11.4478 13 11.0001 12.5523 11.0001 12C11.0001 11.4477 11.4478 11 12.0001 11C12.5523 11 13.0001 11.4477 13.0001 12Z"
                      fill="#528116"
                    />
                  </svg>
                  <span className="text-content-label font-lato text-base">
                    Your promocode
                  </span>
                </div>
              </div>

              {/* Search Button */}
              <button className="w-full h-12 bg-wayzor-green hover:bg-wayzor-green-dark rounded-full transition-colors duration-300">
                <span className="text-black font-lato font-bold text-sm">
                  Search for cars
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;
