import React from "react";

interface CarCardProps {
  car: {
    id: number;
    class: string;
    name: string;
    similar: string;
    image: string;
    price: string;
    currency: string;
    priceColor: string;
    dailyPrice: string;
    passengers: string;
    doors: string;
    transmission: string;
    fuel: string;
    description: string;
  };
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="relative group bg-white rounded-xl border border-[rgba(75,56,76,0.2)] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden w-full max-w-[303px] mx-auto">
      {/* Header Section with Class and Name */}
      <div className="relative px-6 pt-5 pb-0">
        {/* Background Graphics - Corner Accent */}
        <div className="absolute top-0 right-0 w-[62px] h-[180px] overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[226px] h-[193px] rounded-[8.956px] bg-[#D9D9D9] transform translate-x-[165px]"></div>
          <div className="absolute top-0 right-0 w-[62px] h-[180px] bg-[rgba(75,56,76,0.1)] group-hover:bg-[rgba(120,190,32,0.22)] transition-colors duration-200"></div>
        </div>

        {/* Class Label */}
        <div className="relative z-10 mb-1">
          <span className="text-xs font-bold text-[#363F41] uppercase tracking-wider font-lato">
            {car.class}
          </span>
        </div>

        {/* Car Name */}
        <div className="relative z-10 flex items-center gap-2 mb-4">
          <h3 className="text-xl font-bold text-[#262E2F] font-lato leading-[140%]">
            {car.name}
          </h3>
          <div className="flex pt-1 justify-center items-center">
            <span className="text-xs text-[#363F41] font-lato leading-[100%]">
              {car.similar}
            </span>
          </div>
        </div>
      </div>

      {/* Car Image Section */}
      <div className="flex h-[116px] items-start content-start flex-shrink-0 flex-wrap">
        <div className="flex justify-center items-center flex-1">
          <img
            src={car.image}
            alt={car.name}
            className="w-[298px] h-[134px] object-contain"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 pt-1 pb-4">
        {/* Price Section */}
        <div className="flex h-[60px] pt-1 items-start flex-wrap">
          <div className="flex flex-col items-start flex-1">
            <div className="flex items-start w-full">
              <span className="text-2xl font-bold font-lato leading-[130%] text-[#363F41] group-hover:text-[#528116] transition-colors duration-200">
                {car.price} {car.currency}
              </span>
              <div className="flex w-[94px] h-[25px] flex-col justify-center ml-1">
                <span className="text-xs text-[#6D7679] font-lato leading-[150%]">
                  / total with VAT
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start w-full">
              <span className="text-sm text-[#363F41] font-lato leading-[150%]">
                {car.dailyPrice}
              </span>
            </div>
          </div>
        </div>

        {/* Included Services Badge */}
        <div className="flex h-[50.69px] items-center">
          <div className="flex h-[24.69px] items-center rounded-[3.43px]">
            <div className="flex items-center">
              <div className="flex h-[24.69px] px-2 items-center rounded-[3.43px] bg-[#4B384C]">
                <div className="flex items-center gap-3">
                  <span className="text-white text-sm font-lato leading-[150%]">
                    Included Services
                  </span>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.25 8.345C1.25 4.61708 4.27208 1.595 8 1.595C11.7279 1.595 14.75 4.61708 14.75 8.345C14.75 12.0729 11.7279 15.095 8 15.095C4.27208 15.095 1.25 12.0729 1.25 8.345ZM8 3.095C5.10051 3.095 2.75 5.44551 2.75 8.345C2.75 11.2445 5.1005 13.595 8 13.595C10.8995 13.595 13.25 11.2445 13.25 8.345C13.25 5.44551 10.8995 3.095 8 3.095ZM5.89369 4.84581C6.33012 4.44472 7.01173 4.095 8.0059 4.095C8.74241 4.095 9.36236 4.29153 9.83522 4.6543C10.3071 5.01629 10.5846 5.50781 10.6944 6.01085C10.8977 6.94256 10.528 8.14516 9.45878 8.52204C8.91663 8.71314 8.81537 8.85975 8.79896 8.88701C8.77393 8.92861 8.7559 8.98559 8.7559 9.345C8.7559 9.75922 8.42012 10.095 8.0059 10.095C7.59169 10.095 7.2559 9.75922 7.2559 9.345C7.2559 9.32962 7.25585 9.31357 7.25579 9.29688C7.25481 9.01308 7.25319 8.54655 7.51373 8.1136C7.79821 7.64086 8.29872 7.34049 8.96011 7.10736C9.09446 7.06 9.32647 6.77774 9.22891 6.33066C9.18824 6.14432 9.08972 5.97295 8.92217 5.84441C8.75565 5.71666 8.47294 5.595 8.0059 5.595C7.39535 5.595 7.07401 5.79831 6.90868 5.95025C6.81923 6.03246 6.76213 6.11242 6.72959 6.16624C6.71346 6.19294 6.70398 6.21219 6.70009 6.22052C6.69968 6.22141 6.69933 6.22217 6.69905 6.22279C6.55197 6.60167 6.12829 6.79541 5.74427 6.65612C5.35488 6.51488 5.15371 6.08472 5.29495 5.69533L6 5.95106C5.29495 5.69533 5.29478 5.69578 5.29495 5.69533L5.29561 5.69351L5.29632 5.69158L5.29787 5.68739L5.30154 5.67774C5.30424 5.67075 5.30746 5.66264 5.31122 5.65349C5.31874 5.6352 5.32847 5.61268 5.34065 5.58655C5.36498 5.53439 5.39937 5.46724 5.44592 5.39024C5.53875 5.23667 5.68225 5.04012 5.89369 4.84581Z"
                      fill="#A3D367"
                    />
                    <path
                      d="M8.75 11.595C8.75 12.0092 8.41421 12.345 8 12.345C7.58579 12.345 7.25 12.0092 7.25 11.595C7.25 11.1808 7.58579 10.845 8 10.845C8.41421 10.845 8.75 11.1808 8.75 11.595Z"
                      fill="#A3D367"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Car Specifications */}
        <div className="flex h-[27px] pb-4 flex-col justify-center items-start">
          <div className="flex items-center content-center flex-1 flex-wrap">
            <div className="flex h-[10px] pr-1 justify-center items-center">
              <span className="text-xs text-[#363F41] text-center font-lato leading-[100%]">
                {car.passengers}
              </span>
            </div>
            <div className="flex h-[10px] px-1 pl-[6px] justify-center items-center border-l border-[rgba(75,56,76,0.4)]">
              <span className="text-xs text-[#363F41] text-center font-lato leading-[100%]">
                {car.doors}
              </span>
            </div>
            <div className="flex h-[10px] px-1 pl-[6px] justify-center items-center border-l border-[rgba(75,56,76,0.4)]">
              <span className="text-xs text-[#363F41] text-center font-lato leading-[100%]">
                {car.transmission}
              </span>
            </div>
            <div className="flex h-[10px] px-1 pl-[6px] justify-center items-center border-l border-[rgba(75,56,76,0.4)]">
              <span className="text-xs text-[#363F41] text-center font-lato leading-[100%]">
                {car.fuel}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex h-[48px] pt-3 flex-col items-start border-t border-[rgba(0,0,0,0.1)]">
          <span className="text-xs text-[#6D7679] font-lato leading-[150%] w-full">
            {car.description}
          </span>
        </div>
      </div>

      {/* Book Now Button */}
      <div className="flex px-6 pb-[26px] pt-1 justify-center items-start content-start flex-wrap">
        <div className="flex h-[44px] justify-center items-center flex-1 rounded">
          <button className="flex w-[268px] h-[40px] py-3 px-6 flex-col justify-center items-center rounded-full border-[1.5px] border-[#528116] hover:bg-[#528116] group/button transition-colors duration-200">
            <span className="text-[#528116] group-hover/button:text-white text-center font-lato text-sm font-semibold leading-[150%] transition-colors duration-200">
              Book now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
