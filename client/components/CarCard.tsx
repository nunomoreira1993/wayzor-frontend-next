import React, { useState } from "react";

interface CarCardProps {
  className?: string;
}

const CarCard: React.FC<CarCardProps> = ({ className = "" }) => {
  const [promocode, setPromocode] = useState("");

  const insuranceOptions = [
    { title: "Includes 2000 km/month", price: "", included: true },
    { title: "Civil Liability Insurance", price: "€ 2,20", included: true },
    { title: "Road Assistance", price: "", included: true },
    { title: "Collision damage waiver", price: "", included: true },
    { title: "Road Tax", price: "", included: true },
    { title: "Theft Insurance", price: "", included: true },
  ];

  return (
    <div
      className={`flex flex-col w-[528px] rounded-xl border border-[rgba(75,56,76,0.20)] bg-white ${className}`}
    >
      {/* Header Section */}
      <div className="flex flex-col p-6 gap-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="text-content-dark-medium font-lato text-xs font-semibold leading-[150%] uppercase">
                CLASS: D - COMPACT
              </div>
              <div className="flex flex-col">
                <h2 className="text-content-bodytext font-lato text-2xl font-bold leading-[130%]">
                  Volkswagen Taig
                </h2>
                <div className="flex items-center gap-2.5 pt-1">
                  <span className="text-content-dark-medium font-lato text-xs font-normal leading-[100%]">
                    or similar*
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.06543 1.58265C9.973 0.675085 11.4445 0.675086 12.352 1.58265C13.2596 2.49022 13.2596 3.96168 12.352 4.86924L7.28495 9.93631C7.00197 10.2193 6.63053 10.3967 6.23257 10.4391L3.16992 10.7648L3.49561 7.7021C3.53793 7.30414 3.71538 6.93271 3.99836 6.64972L9.06543 1.58265ZM11.2914 2.64331C10.9696 2.32153 10.4479 2.32153 10.1261 2.64331L10.0475 2.72194L11.2127 3.88721L11.2914 3.80858C11.6131 3.4868 11.6131 2.96509 11.2914 2.64331ZM10.1521 4.94787L8.9868 3.7826L5.05903 7.71038C5.0186 7.75081 4.99325 7.80387 4.9872 7.86072L4.85788 9.07679L6.07395 8.94747C6.13081 8.94142 6.18387 8.91607 6.22429 8.87565L10.1521 4.94787ZM3.25094 14C3.25094 13.5858 3.58672 13.25 4.00094 13.25H10.5009C10.9152 13.25 11.2509 13.5858 11.2509 14C11.2509 14.4142 10.9152 14.75 10.5009 14.75H4.00094C3.58672 14.75 3.25094 14.4142 3.25094 14Z"
                  fill="#528116"
                />
              </svg>
              <span className="text-wayzor-green font-lato text-xs font-medium leading-[100%]">
                Change vehicle
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center flex-1 max-w-[300px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/dca0708bcc7ca2e230f908f71e104db024a7151e?width=596"
              alt="Volkswagen Taig"
              className="w-full h-auto max-w-[298px]"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black/10 mx-6"></div>

      {/* Pick up / Drop off Section */}
      <div className="flex flex-col p-6 gap-6">
        <div className="flex justify-between items-start gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-content-bodytext font-lato text-sm font-bold leading-[150%]">
              Pick up
            </h3>
            <div className="text-content-bodytext font-lato text-[13px] font-normal leading-[16px]">
              PDL Marina Atlântico
              <br />
              Qua 10 Out . 10:00
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-content-bodytext font-lato text-sm font-bold leading-[150%]">
              Drop off
            </h3>
            <div className="text-content-bodytext font-lato text-[13px] font-normal leading-[16px]">
              PDL Marina Atlântico
              <br />
              Qua 10 Out . 10:00
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.06543 1.58265C9.973 0.675085 11.4445 0.675086 12.352 1.58265C13.2596 2.49022 13.2596 3.96168 12.352 4.86924L7.28495 9.93631C7.00197 10.2193 6.63053 10.3967 6.23257 10.4391L3.16992 10.7648L3.49561 7.7021C3.53793 7.30414 3.71538 6.93271 3.99836 6.64972L9.06543 1.58265ZM11.2914 2.64331C10.9696 2.32153 10.4479 2.32153 10.1261 2.64331L10.0475 2.72194L11.2127 3.88721L11.2914 3.80858C11.6131 3.4868 11.6131 2.96509 11.2914 2.64331ZM10.1521 4.94787L8.9868 3.7826L5.05903 7.71038C5.0186 7.75081 4.99325 7.80387 4.9872 7.86072L4.85788 9.07679L6.07395 8.94747C6.13081 8.94142 6.18387 8.91607 6.22429 8.87565L10.1521 4.94787ZM3.25094 14C3.25094 13.5858 3.58672 13.25 4.00094 13.25H10.5009C10.9152 13.25 11.2509 13.5858 11.2509 14C11.2509 14.4142 10.9152 14.75 10.5009 14.75H4.00094C3.58672 14.75 3.25094 14.4142 3.25094 14Z"
              fill="#528116"
            />
          </svg>
          <span className="text-wayzor-green font-lato text-xs font-medium leading-[100%]">
            Edit
          </span>
        </div>
      </div>

      {/* Insurance Options */}
      <div className="flex flex-col px-6 gap-4">
        {insuranceOptions.map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-[rgba(75,56,76,0.10)]"
          >
            <div className="flex items-center gap-2">
              <span className="text-content-dark-medium font-lato text-sm font-semibold leading-[150%]">
                {option.title}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.25 8.5C1.25 4.77208 4.27208 1.75 8 1.75C11.7279 1.75 14.75 4.77208 14.75 8.5C14.75 12.2279 11.7279 15.25 8 15.25C4.27208 15.25 1.25 12.2279 1.25 8.5ZM8 3.25C5.10051 3.25 2.75 5.6005 2.75 8.5C2.75 11.3995 5.1005 13.75 8 13.75C10.8995 13.75 13.25 11.3995 13.25 8.5C13.25 5.60051 10.8995 3.25 8 3.25ZM5.89369 5.00081C6.33012 4.59972 7.01173 4.25 8.0059 4.25C8.74241 4.25 9.36236 4.44653 9.83522 4.8093C10.3071 5.17129 10.5846 5.66281 10.6944 6.16585C10.8977 7.09756 10.528 8.30015 9.45878 8.67704C8.91663 8.86814 8.81537 9.01474 8.79896 9.04201C8.77393 9.08361 8.7559 9.14059 8.7559 9.5C8.7559 9.91422 8.42012 10.25 8.0059 10.25C7.59169 10.25 7.2559 9.91422 7.2559 9.5C7.2559 9.48462 7.25585 9.46857 7.25579 9.45188C7.25481 9.16808 7.25319 8.70155 7.51373 8.2686C7.79821 7.79586 8.29872 7.49549 8.96011 7.26236C9.09446 7.215 9.32647 6.93274 9.22891 6.48566C9.18824 6.29931 9.08972 6.12795 8.92217 5.99941C8.75565 5.87165 8.47294 5.75 8.0059 5.75C7.39535 5.75 7.07401 5.95331 6.90868 6.10525C6.81923 6.18746 6.76213 6.26742 6.72959 6.32124C6.71346 6.34794 6.70398 6.36719 6.70009 6.37552C6.69968 6.37641 6.69933 6.37717 6.69905 6.37779C6.55197 6.75666 6.12829 6.9504 5.74427 6.81112C5.35488 6.66988 5.15371 6.23972 5.29495 5.85033L6 6.10606C5.29495 5.85033 5.29478 5.85078 5.29495 5.85033L5.29561 5.84851L5.29632 5.84658L5.29787 5.84239L5.30154 5.83274C5.30424 5.82575 5.30746 5.81764 5.31122 5.80849C5.31874 5.7902 5.32847 5.76768 5.34065 5.74155C5.36498 5.68939 5.39937 5.62223 5.44592 5.54524C5.53875 5.39167 5.68225 5.19512 5.89369 5.00081Z"
                  fill="#528116"
                />
                <path
                  d="M8.75 11.75C8.75 12.1642 8.41421 12.5 8 12.5C7.58579 12.5 7.25 12.1642 7.25 11.75C7.25 11.3358 7.58579 11 8 11C8.41421 11 8.75 11.3358 8.75 11.75Z"
                  fill="#528116"
                />
              </svg>
            </div>
            <div className="flex items-center gap-6">
              {option.price && (
                <span className="text-content-dark-medium font-lato text-sm font-semibold leading-[150%]">
                  {option.price}
                </span>
              )}
              <div className="flex p-1 items-center rounded-full bg-content-dark-medium">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.5303 3.46967C14.8232 3.76256 14.8232 4.23744 14.5303 4.53033L6.53034 12.5303C6.25114 12.8095 5.80329 12.8244 5.50613 12.5644L1.50613 9.06443C1.1944 8.79167 1.16282 8.31785 1.43558 8.00612C1.70834 7.69439 2.18216 7.66281 2.49389 7.93557L5.96583 10.9735L13.4697 3.46967C13.7626 3.17678 14.2374 3.17678 14.5303 3.46967Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="flex justify-end items-end gap-2 px-6 pt-6">
        <div className="text-content-label font-lato text-xs font-normal leading-[150%] text-right max-w-[120px]">
          valor da totalidade da reserva IVA incluído
        </div>
        <div className="text-content-dark-medium font-lato text-[32px] font-bold leading-[125%]">
          € 44,52 *
        </div>
      </div>

      {/* Promocode Section */}
      <div className="flex flex-col px-6 pt-4 gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-content-bodytext font-lato text-sm font-bold leading-[150%]">
            Do you have a promotional code?
          </h3>
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Promocode"
                  value={promocode}
                  onChange={(e) => setPromocode(e.target.value)}
                  className="w-full h-14 px-4 py-5 rounded-xl border-[1.5px] border-black/10 text-content-label font-lato text-base font-normal leading-[100%] placeholder:text-content-label focus:outline-none focus:border-wayzor-green"
                />
              </div>
            </div>
            <button className="flex h-10 px-6 py-[13px] justify-center items-center rounded-full border-[1.5px] border-wayzor-green hover:bg-wayzor-green hover:text-black transition-colors">
              <span className="text-wayzor-green hover:text-black font-lato text-sm font-semibold leading-[150%]">
                Validate
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Continue Button and Terms */}
      <div className="flex flex-col px-6 py-6 gap-6">
        <button className="flex h-[54px] px-10 py-[19px] justify-center items-center rounded-full bg-wayzor-green hover:bg-wayzor-green-dark transition-colors">
          <span className="text-black font-lato text-base font-bold leading-[100%]">
            Continue the reserve
          </span>
        </button>
        <div className="text-content-label font-lato text-sm font-normal leading-[150%]">
          * At the time of pick up the vehicle: - € 600,00 Security Deposit on
          the same physical credit card as the online payment, on behalf of the
          driver. - Security Deposit will be returned upon termination of
          contract.
        </div>
      </div>
    </div>
  );
};

export default CarCard;
