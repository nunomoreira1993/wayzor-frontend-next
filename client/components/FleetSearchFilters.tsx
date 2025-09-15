import React from "react";

const FleetSearchFilters = () => {
  return (
    <div className="space-y-6">
      {/* Search Form */}
      <div className="bg-white rounded-2xl p-5 lg:p-6 shadow-lg">
        <div className="space-y-6">
          {/* Pick-up Location */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-wayzor-content-bodytext">
              Pick-up location
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
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
              </div>
              <input
                type="text"
                value="PDL Marina Atlântico"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-wayzor-content-dark-strong font-lato focus:border-wayzor-green focus:outline-none"
                readOnly
              />
            </div>
          </div>

          {/* Drop-off Location */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-wayzor-content-bodytext">
              Drop-off location
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
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
              </div>
              <input
                type="text"
                placeholder="Choose a location"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-wayzor-content-label font-lato placeholder:text-wayzor-content-label focus:border-wayzor-green focus:outline-none"
              />
            </div>
          </div>

          {/* Pick-up Date */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-wayzor-content-bodytext">
              Pick-up date
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
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
                      d="M6.5 1.75C6.91421 1.75 7.25 2.08579 7.25 2.5V3.25H12.75V2.5C12.75 2.08579 13.0858 1.75 13.5 1.75C13.9142 1.75 14.25 2.08579 14.25 2.5V3.25H15C16.5188 3.25 17.75 4.48122 17.75 6V14C17.75 15.5188 16.5188 16.75 15 16.75H5C3.48122 16.75 2.25 15.5188 2.25 14V6C2.25 4.48122 3.48122 3.25 5 3.25H5.75V2.5C5.75 2.08579 6.08579 1.75 6.5 1.75ZM5.75 4.75H5C4.30964 4.75 3.75 5.30964 3.75 6V8.25H16.25V6C16.25 5.30964 15.6904 4.75 15 4.75H14.25V5.5C14.25 5.91421 13.9142 6.25 13.5 6.25C13.0858 6.25 12.75 5.91421 12.75 5.5V4.75H7.25V5.5C7.25 5.91421 6.91421 6.25 6.5 6.25C6.08579 6.25 5.75 5.91421 5.75 5.5V4.75ZM16.25 9.75H3.75V14C3.75 14.6904 4.30964 15.25 5 15.25H15C15.6904 15.25 16.25 14.6904 16.25 14V9.75Z"
                      fill="#528116"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value="Jul 23"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-wayzor-content-label font-lato focus:border-wayzor-green focus:outline-none"
                  readOnly
                />
              </div>
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
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
                      d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10ZM10 5.36111C10.4142 5.36111 10.75 5.6969 10.75 6.11111V9.59861L12.7494 10.9315C13.094 11.1613 13.1871 11.6269 12.9574 11.9716C12.7276 12.3162 12.262 12.4094 11.9173 12.1796L9.58397 10.624C9.37533 10.4849 9.25 10.2508 9.25 10V6.11111C9.25 5.6969 9.58579 5.36111 10 5.36111Z"
                      fill="#528116"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value="12:30 PM"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-wayzor-content-label font-lato focus:border-wayzor-green focus:outline-none"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Return Date */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-wayzor-content-bodytext">
              Return date
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
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
                      d="M6.5 1.75C6.91421 1.75 7.25 2.08579 7.25 2.5V3.25H12.75V2.5C12.75 2.08579 13.0858 1.75 13.5 1.75C13.9142 1.75 14.25 2.08579 14.25 2.5V3.25H15C16.5188 3.25 17.75 4.48122 17.75 6V14C17.75 15.5188 16.5188 16.75 15 16.75H5C3.48122 16.75 2.25 15.5188 2.25 14V6C2.25 4.48122 3.48122 3.25 5 3.25H5.75V2.5C5.75 2.08579 6.08579 1.75 6.5 1.75ZM5.75 4.75H5C4.30964 4.75 3.75 5.30964 3.75 6V8.25H16.25V6C16.25 5.30964 15.6904 4.75 15 4.75H14.25V5.5C14.25 5.91421 13.9142 6.25 13.5 6.25C13.0858 6.25 12.75 5.91421 12.75 5.5V4.75H7.25V5.5C7.25 5.91421 6.91421 6.25 6.5 6.25C6.08579 6.25 5.75 5.91421 5.75 5.5V4.75ZM16.25 9.75H3.75V14C3.75 14.6904 4.30964 15.25 5 15.25H15C15.6904 15.25 16.25 14.6904 16.25 14V9.75Z"
                      fill="#528116"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value="Jul 27"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-wayzor-content-label font-lato focus:border-wayzor-green focus:outline-none"
                  readOnly
                />
              </div>
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
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
                      d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10ZM10 5.36111C10.4142 5.36111 10.75 5.6969 10.75 6.11111V9.59861L12.7494 10.9315C13.094 11.1613 13.1871 11.6269 12.9574 11.9716C12.7276 12.3162 12.262 12.4094 11.9173 12.1796L9.58397 10.624C9.37533 10.4849 9.25 10.2508 9.25 10V6.11111C9.25 5.6969 9.58579 5.36111 10 5.36111Z"
                      fill="#528116"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value="8:30 PM"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-wayzor-content-label font-lato focus:border-wayzor-green focus:outline-none"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Promocode */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-wayzor-content-bodytext">
              Promocode
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
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
                    d="M9.10499 2.53007C9.64028 2.15664 10.3593 2.15664 10.8946 2.53007L12.1921 3.43517C12.1994 3.44032 12.2123 3.4455 12.2288 3.44547L13.8347 3.44255C14.4825 3.44137 15.086 3.8416 15.3003 4.47626L15.7931 5.93625C15.7937 5.93709 15.7953 5.93884 15.7986 5.94107L17.0996 6.84144C17.6438 7.21809 17.8894 7.90706 17.6703 8.548L17.1738 10L17.6703 11.452C17.8894 12.0929 17.6438 12.7819 17.0996 13.1586L15.7986 14.0589C15.7954 14.0612 15.7937 14.0629 15.7931 14.0637L15.3003 15.5237C15.086 16.1584 14.4825 16.5586 13.8347 16.5575L12.2288 16.5545C12.2123 16.5545 12.1994 16.5597 12.1921 16.5648L10.8946 17.4699C10.3593 17.8434 9.64028 17.8434 9.10499 17.4699L7.80756 16.5648C7.80018 16.5597 7.78729 16.5545 7.77081 16.5545L6.16488 16.5575C5.51714 16.5586 4.91359 16.1584 4.69936 15.5237L4.20654 14.0638C4.20588 14.0629 4.20428 14.0612 4.20106 14.0589L2.90004 13.1586C2.35578 12.7819 2.11018 12.0929 2.32936 11.452L2.82587 10L2.32936 8.548C2.11018 7.90706 2.35578 7.21809 2.90004 6.84144L4.20106 5.94107C4.20428 5.93884 4.20588 5.93709 4.20654 5.93625L4.69936 4.47626C4.91359 3.8416 5.51714 3.44137 6.16488 3.44255L7.77081 3.44547C7.78729 3.4455 7.80018 3.44032 7.80756 3.43517L9.10499 2.53007ZM9.99981 3.75C9.98334 3.75 9.97089 3.75493 9.96321 3.7603L8.66578 4.6654C8.40184 4.84953 8.08743 4.94605 7.76808 4.94547L6.16215 4.94254C6.14531 4.94251 6.1329 4.94764 6.12547 4.9528C6.12241 4.95493 6.12081 4.95656 6.1201 4.95742L5.62723 6.41756C5.52264 6.72742 5.31971 6.99108 5.05466 7.1745L3.75364 8.07488C3.75342 8.07503 3.75385 8.07473 3.75364 8.07488L4.24784 9.52242C4.35382 9.83236 4.35382 10.1676 4.24784 10.4776L3.753 11.9247C3.75278 11.9245 3.7532 11.9248 3.753 11.9247L5.05466 12.8255C5.31971 13.0089 5.52263 13.2726 5.62723 13.5824L6.1201 15.0426C6.12081 15.0434 6.12241 15.0451 6.12547 15.0472C6.1329 15.0524 6.14531 15.0575 6.16215 15.0575L7.76808 15.0545C8.08743 15.054 8.40184 15.1505 8.66578 15.3346L9.96321 16.2397C9.97089 16.2451 9.98334 16.25 9.99981 16.25C10.0163 16.25 10.0287 16.2451 10.0364 16.2397L11.3338 15.3346C11.5978 15.1505 11.9122 15.054 12.2315 15.0545L13.8375 15.0575C13.8543 15.0575 13.8667 15.0524 13.8742 15.0472C13.8772 15.0451 13.8788 15.0434 13.8795 15.0426L14.3724 13.5824C14.477 13.2726 14.6799 13.0089 14.945 12.8255L16.246 11.9251C16.2458 11.9253 16.2462 11.925 16.246 11.9251L15.7518 10.4776C15.6458 10.1676 15.6458 9.83236 15.7518 9.52242L16.2466 8.07533C16.2464 8.07518 16.2468 8.07548 16.2466 8.07533L14.945 7.1745C14.6799 6.99108 14.477 6.72742 14.3724 6.41756L13.8795 4.95743C13.8788 4.95656 13.8772 4.95493 13.8742 4.9528C13.8667 4.94764 13.8543 4.94251 13.8375 4.94254L12.2315 4.94547C11.9122 4.94605 11.5978 4.84953 11.3338 4.6654L10.0364 3.7603C10.0287 3.75493 10.0163 3.75 9.99981 3.75Z"
                    fill="#528116"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9479 7.10597C13.2408 7.39887 13.2408 7.87374 12.9479 8.16663L8.25449 12.86C7.96159 13.1529 7.48672 13.1529 7.19383 12.86C6.90093 12.5671 6.90093 12.0923 7.19383 11.7994L11.8872 7.10597C12.1801 6.81308 12.655 6.81308 12.9479 7.10597Z"
                    fill="#528116"
                  />
                  <path
                    d="M8.99981 8C8.99981 8.55228 8.5521 9 7.99981 9C7.44753 9 6.99981 8.55228 6.99981 8C6.99981 7.44772 7.44753 7 7.99981 7C8.5521 7 8.99981 7.44772 8.99981 8Z"
                    fill="#528116"
                  />
                  <path
                    d="M12.9998 12C12.9998 12.5523 12.5521 13 11.9998 13C11.4475 13 10.9998 12.5523 10.9998 12C10.9998 11.4477 11.4475 11 11.9998 11C12.5521 11 12.9998 11.4477 12.9998 12Z"
                    fill="#528116"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Your promocode"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-wayzor-content-label font-lato placeholder:text-wayzor-content-label focus:border-wayzor-green focus:outline-none"
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full bg-wayzor-green text-black font-bold py-3 px-6 rounded-full font-lato text-sm hover:bg-opacity-90 transition-colors">
            Search cars
          </button>
        </div>
      </div>

      {/* Type Filter */}
      <div className="bg-white rounded-2xl p-0 shadow-lg overflow-hidden">
        <div className="p-6 border-b border-wayzor-bg-light-medium">
          <h3 className="text-base font-bold text-wayzor-content-bodytext font-lato">
            Type
          </h3>
        </div>
        <div className="p-6 space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-wayzor-green border-2 border-wayzor-green rounded focus:ring-wayzor-green focus:ring-offset-0"
              />
              <span className="text-xs text-wayzor-content-dark-medium font-lato">
                Passenger vehicles
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-wayzor-green border-2 border-wayzor-green rounded focus:ring-wayzor-green focus:ring-offset-0"
              />
              <span className="text-xs text-wayzor-content-dark-medium font-lato">
                Commercial vehicles
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-wayzor-green border-2 border-wayzor-green rounded focus:ring-wayzor-green focus:ring-offset-0"
              />
              <span className="text-xs text-wayzor-content-dark-medium font-lato">
                Cold Commercial
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Fuel Filter */}
      <div className="bg-white rounded-2xl p-0 shadow-lg overflow-hidden">
        <div className="p-6 border-b border-wayzor-bg-light-medium">
          <h3 className="text-base font-bold text-wayzor-content-bodytext font-lato">
            Fuel
          </h3>
        </div>
        <div className="p-6 space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-wayzor-green border-2 border-wayzor-green rounded focus:ring-wayzor-green focus:ring-offset-0"
              />
              <span className="text-xs text-wayzor-content-dark-medium font-lato">
                Petrol
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-wayzor-green border-2 border-wayzor-green rounded focus:ring-wayzor-green focus:ring-offset-0"
              />
              <span className="text-xs text-wayzor-content-dark-medium font-lato">
                Diesel
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-wayzor-green border-2 border-wayzor-green rounded focus:ring-wayzor-green focus:ring-offset-0"
              />
              <span className="text-xs text-wayzor-content-dark-medium font-lato">
                Plug-in Hybrid
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-wayzor-green border-2 border-wayzor-green rounded focus:ring-wayzor-green focus:ring-offset-0"
              />
              <span className="text-xs text-wayzor-content-dark-medium font-lato">
                Hybrid
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-wayzor-green border-2 border-wayzor-green rounded focus:ring-wayzor-green focus:ring-offset-0"
              />
              <span className="text-xs text-wayzor-content-dark-medium font-lato">
                Electric
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Transmission Filter */}
      <div className="bg-white rounded-2xl p-0 shadow-lg overflow-hidden">
        <div className="p-6 border-b border-wayzor-bg-light-medium">
          <h3 className="text-base font-bold text-wayzor-content-bodytext font-lato">
            Transmission
          </h3>
        </div>
        <div className="p-6 space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-wayzor-green border-2 border-wayzor-green rounded focus:ring-wayzor-green focus:ring-offset-0"
              />
              <span className="text-xs text-wayzor-content-dark-medium font-lato">
                Manual
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-wayzor-green border-2 border-wayzor-green rounded focus:ring-wayzor-green focus:ring-offset-0"
              />
              <span className="text-xs text-wayzor-content-dark-medium font-lato">
                Automatic
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetSearchFilters;
