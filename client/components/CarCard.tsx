import React from "react";

interface CarProps {
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
}

interface CarCardProps {
  car: CarProps;
  className?: string;
}

const CarCard: React.FC<CarCardProps> = ({ car, className = "" }) => {
  return (
    <div className={`group flex flex-col w-full max-w-[303px] mx-auto rounded-xl border border-[rgba(75,56,76,0.20)] bg-white hover:border-wayzor-green hover:shadow-lg transition-all duration-300 cursor-pointer ${className}`}>
      {/* Header Section */}
      <div className="flex flex-col px-6 pt-5 pb-0 relative overflow-hidden">
        {/* Corner Accent - Hidden by default, shows on hover */}
        <div className="absolute top-0 right-0 w-[62px] h-[180px] overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[226px] h-[193px] rounded-[8.956px] bg-[#D9D9D9] transform translate-x-[165px]"></div>
          <div className="absolute top-0 right-0 w-[62px] h-[180px] bg-[rgba(75,56,76,0.1)] group-hover:bg-[rgba(120,190,32,0.22)] transition-colors duration-200"></div>
        </div>

        <div className="relative z-10">
          <div className="text-content-dark-medium font-lato text-xs font-semibold leading-[150%] uppercase">
            {car.class}
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <h2 className="text-content-bodytext font-lato text-xl font-bold leading-[140%]">
              {car.name}
            </h2>
            <span className="text-content-dark-medium font-lato text-xs font-normal leading-[100%] pt-1">
              {car.similar}
            </span>
          </div>
        </div>
      </div>

      {/* Car Image */}
      <div className="flex justify-center items-center h-[116px] px-2 py-2">
        <img 
          src={car.image}
          alt={car.name}
          className="w-full h-auto max-w-[298px] max-h-[134px] object-contain"
        />
      </div>

      {/* Price and Details */}
      <div className="flex flex-col px-6 pt-1 pb-4">
        {/* Pricing */}
        <div className="flex items-start gap-2 mb-1">
          <span className={`font-lato text-2xl font-bold leading-[130%] ${car.priceColor}`}>
            {car.price} {car.currency}
          </span>
          <span className="text-content-label font-lato text-xs font-normal leading-[150%] pt-2">
            / total with VAT
          </span>
        </div>
        <div className="text-content-dark-medium font-lato text-sm font-normal leading-[150%] mb-4">
          {car.dailyPrice}
        </div>

        {/* Included Services Badge */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-3 px-2 py-1 rounded bg-content-dark-medium">
            <span className="text-white font-lato text-sm font-normal leading-[150%]">
              Included Services
            </span>
            <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.25 8.345C1.25 4.61708 4.27208 1.595 8 1.595C11.7279 1.595 14.75 4.61708 14.75 8.345C14.75 12.0729 11.7279 15.095 8 15.095C4.27208 15.095 1.25 12.0729 1.25 8.345ZM8 3.095C5.10051 3.095 2.75 5.44551 2.75 8.345C2.75 11.2445 5.1005 13.595 8 13.595C10.8995 13.595 13.25 11.2445 13.25 8.345C13.25 5.44551 10.8995 3.095 8 3.095ZM5.89369 4.84581C6.33012 4.44472 7.01173 4.095 8.0059 4.095C8.74241 4.095 9.36236 4.29153 9.83522 4.6543C10.3071 5.01629 10.5846 5.50781 10.6944 6.01085C10.8977 6.94256 10.528 8.14516 9.45878 8.52204C8.91663 8.71314 8.81537 8.85975 8.79896 8.88701C8.77393 8.92861 8.7559 8.98559 8.7559 9.345C8.7559 9.75922 8.42012 10.095 8.0059 10.095C7.59169 10.095 7.2559 9.75922 7.2559 9.345C7.2559 9.32962 7.25585 9.31357 7.25579 9.29688C7.25481 9.01308 7.25319 8.54655 7.51373 8.1136C7.79821 7.64086 8.29872 7.34049 8.96011 7.10736C9.09446 7.06 9.32647 6.77774 9.22891 6.33066C9.18824 6.14432 9.08972 5.97295 8.92217 5.84441C8.75565 5.71666 8.47294 5.595 8.0059 5.595C7.39535 5.595 7.07401 5.79831 6.90868 5.95025C6.81923 6.03246 6.76213 6.11242 6.72959 6.16624C6.71346 6.19294 6.70398 6.21219 6.70009 6.22052C6.69968 6.22141 6.69933 6.22217 6.69905 6.22279C6.55197 6.60167 6.12829 6.79541 5.74427 6.65612C5.35488 6.51488 5.15371 6.08472 5.29495 5.69533L6 5.95106C5.29495 5.69533 5.29478 5.69578 5.29495 5.69533L5.29561 5.69351L5.29632 5.69158L5.29787 5.68739L5.30154 5.67774C5.30424 5.67075 5.30746 5.66264 5.31122 5.65349C5.31874 5.6352 5.32847 5.61268 5.34065 5.58655C5.36498 5.53439 5.39937 5.46724 5.44592 5.39024C5.53875 5.23667 5.68225 5.04012 5.89369 4.84581Z" fill="#A3D367"/>
              <path d="M8.75 11.595C8.75 12.0092 8.41421 12.345 8 12.345C7.58579 12.345 7.25 12.0092 7.25 11.595C7.25 11.1808 7.58579 10.845 8 10.845C8.41421 10.845 8.75 11.1808 8.75 11.595Z" fill="#A3D367"/>
            </svg>
          </div>
        </div>

        {/* Vehicle Specifications */}
        <div className="flex items-center text-content-dark-medium font-lato text-xs font-normal leading-[100%] mb-4">
          <span>{car.passengers}</span>
          <div className="w-px h-2.5 bg-[rgba(75,56,76,0.40)] mx-1"></div>
          <span>{car.doors}</span>
          <div className="w-px h-2.5 bg-[rgba(75,56,76,0.40)] mx-1"></div>
          <span>{car.transmission}</span>
          <div className="w-px h-2.5 bg-[rgba(75,56,76,0.40)] mx-1"></div>
          <span>{car.fuel}</span>
        </div>

        {/* Border Line */}
        <div className="w-full h-px bg-black/10 mb-3"></div>

        {/* Description */}
        <div className="text-content-label font-lato text-xs font-normal leading-[150%] mb-4">
          {car.description}
        </div>
      </div>

      {/* Book Now Button */}
      <div className="px-6 pb-6">
        <button className="w-full h-10 px-6 py-[13px] rounded-full border-[1.5px] border-wayzor-green hover:bg-wayzor-green hover:text-black transition-all duration-300 group">
          <span className="text-wayzor-green group-hover:text-black font-lato text-sm font-semibold leading-[150%]">
            Book now
          </span>
        </button>
      </div>
    </div>
  );
};

export default CarCard;
