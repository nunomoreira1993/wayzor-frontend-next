import React, { useState } from "react";

interface NudgerProps {
  value: number;
  onChange: (value: number) => void;
}

const Nudger: React.FC<NudgerProps> = ({ value, onChange }) => {
  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    onChange(value + 1);
  };

  return (
    <div className="flex p-1 items-center gap-3 rounded-lg bg-wayzor-bg-light-soft">
      <button
        onClick={handleDecrement}
        className="flex p-1.5 items-start gap-2 rounded-full hover:bg-gray-200 transition-colors"
      >
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
            d="M16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H4C3.58579 10.75 3.25 10.4142 3.25 10C3.25 9.58579 3.58579 9.25 4 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10Z"
            fill="black"
          />
        </svg>
      </button>
      <div className="flex w-[19px] h-4 flex-col justify-center items-center overflow-hidden">
        <span className="text-black text-center font-lato text-base font-normal leading-[100%]">
          {value}
        </span>
      </div>
      <button
        onClick={handleIncrement}
        className="flex p-1.5 items-start gap-2 rounded-full hover:bg-gray-200 transition-colors"
      >
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
            d="M10 3.25C10.4142 3.25 10.75 3.58579 10.75 4V9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H10.75V16C10.75 16.4142 10.4142 16.75 10 16.75C9.58579 16.75 9.25 16.4142 9.25 16V10.75H4C3.58579 10.75 3.25 10.4142 3.25 10C3.25 9.58579 3.58579 9.25 4 9.25H9.25V4C9.25 3.58579 9.58579 3.25 10 3.25Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

interface ProductItemProps {
  title: string;
  price: string;
  showHelp?: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({ title, price, showHelp = true }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex py-4 px-0 pl-4 items-center gap-2.5 self-stretch rounded-lg border border-[#B9DD8B]">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="text-wayzor-content-bodytext font-lato text-base font-semibold leading-[150%]">
            {title}
          </h3>
          {showHelp && (
            <div className="flex pt-0.5 items-center gap-2.5">
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
                  d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8ZM8 2.75C5.10051 2.75 2.75 5.1005 2.75 8C2.75 10.8995 5.1005 13.25 8 13.25C10.8995 13.25 13.25 10.8995 13.25 8C13.25 5.10051 10.8995 2.75 8 2.75ZM5.89369 4.50081C6.33012 4.09972 7.01173 3.75 8.0059 3.75C8.74241 3.75 9.36236 3.94653 9.83522 4.3093C10.3071 4.67129 10.5846 5.16281 10.6944 5.66585C10.8977 6.59756 10.528 7.80015 9.45878 8.17704C8.91663 8.36814 8.81537 8.51474 8.79896 8.54201C8.77393 8.58361 8.7559 8.64059 8.7559 9C8.7559 9.41422 8.42012 9.75 8.0059 9.75C7.59169 9.75 7.2559 9.41422 7.2559 9C7.2559 8.98462 7.25585 8.96857 7.25579 8.95188C7.25481 8.66808 7.25319 8.20155 7.51373 7.7686C7.79821 7.29586 8.29872 6.99549 8.96011 6.76236C9.09446 6.715 9.32647 6.43274 9.22891 5.98566C9.18824 5.79931 9.08972 5.62795 8.92217 5.49941C8.75565 5.37165 8.47294 5.25 8.0059 5.25C7.39535 5.25 7.07401 5.45331 6.90868 5.60525C6.81923 5.68746 6.76213 5.76742 6.72959 5.82124C6.71346 5.84794 6.70398 5.86719 6.70009 5.87552C6.69968 5.87641 6.69933 5.87717 6.69905 5.87779C6.55197 6.25666 6.12829 6.4504 5.74427 6.31112C5.35488 6.16988 5.15371 5.73972 5.29495 5.35033L6 5.60606C5.29495 5.35033 5.29478 5.35078 5.29495 5.35033L5.29561 5.34851L5.29632 5.34658L5.29787 5.34239L5.30154 5.33274C5.30424 5.32575 5.30746 5.31764 5.31122 5.30849C5.31874 5.2902 5.32847 5.26768 5.34065 5.24155C5.36498 5.18939 5.39937 5.12223 5.44592 5.04524C5.53875 4.89167 5.68225 4.69512 5.89369 4.50081Z"
                  fill="#528116"
                />
                <path
                  d="M8.75 11.25C8.75 11.6642 8.41421 12 8 12C7.58579 12 7.25 11.6642 7.25 11.25C7.25 10.8358 7.58579 10.5 8 10.5C8.41421 10.5 8.75 10.8358 8.75 11.25Z"
                  fill="#528116"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex justify-end items-center gap-6">
          <div className="flex w-[115px] flex-col items-start gap-2.5">
            <Nudger value={quantity} onChange={setQuantity} />
          </div>
          <div className="text-wayzor-content-dark-medium font-lato text-base font-normal leading-[150%]">
            <span className="font-bold">{price}</span> / month
          </div>
          <button className="flex w-[92px] py-2.5 px-4 flex-col justify-center items-center gap-0 rounded-full bg-wayzor-green hover:bg-wayzor-green/80 transition-colors">
            <span className="text-black text-center font-lato text-xs font-medium leading-[100%]">
              Add
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const SelectOptions = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-wayzor-bg-light-soft">
      {/* Progress Stepper */}
      <div className="flex flex-col items-center gap-18 pt-24 pb-18">
        <div className="flex w-[980px] justify-center items-start">
          {/* Step 1 - Completed */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex p-3 flex-col items-start rounded-[40px] bg-gradient-to-b from-black/10 to-black/10 bg-wayzor-green">
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
                  fill="black"
                />
              </svg>
            </div>
            <div className="flex w-10 h-[21px] justify-center items-center relative">
              <span className="w-[180px] absolute -left-[70px] text-black text-center font-lato text-sm font-normal leading-[150%]">
                Select itinerary
              </span>
            </div>
          </div>

          {/* Connector 1 */}
          <div className="flex w-[171px] justify-center items-start gap-0 flex-shrink-0">
            <div className="flex py-[18px] px-4 flex-col items-start gap-0 flex-1">
              <div className="w-[99px] h-0.5 bg-gradient-to-r from-black/10 to-black/10 bg-wayzor-green/70"></div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex p-3 flex-col items-start rounded-[40px] bg-gradient-to-b from-black/10 to-black/10 bg-wayzor-green">
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
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex w-10 h-[21px] justify-center items-center relative">
                <span className="w-[180px] absolute -left-[70px] text-black text-center font-lato text-sm font-normal leading-[150%]">
                  Select Vehicle
                </span>
              </div>
            </div>
          </div>

          {/* Connector 2 */}
          <div className="flex w-[171px] justify-center items-start gap-0 flex-shrink-0">
            <div className="flex py-[18px] px-4 flex-col items-start gap-0 flex-1">
              <div className="w-[99px] h-0.5 bg-gradient-to-r from-black/10 to-black/10 bg-wayzor-green/70"></div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex p-3 flex-col justify-center items-center rounded-[40px] bg-wayzor-green/70">
                <div className="w-3.5 h-3.5 overflow-hidden flex justify-center items-center">
                  <span className="text-black text-center font-lato text-sm font-medium leading-[100%]">
                    3
                  </span>
                </div>
                <svg
                  className="absolute left-4 -bottom-3"
                  width="10"
                  height="2"
                  viewBox="0 0 10 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1H9" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex w-10 h-[21px] justify-center items-center relative">
                <span className="w-[180px] absolute -left-[70px] text-black text-center font-lato text-sm font-semibold leading-[150%]">
                  Select options
                </span>
              </div>
            </div>
          </div>

          {/* Connector 3 */}
          <div className="flex w-[171px] justify-center items-start gap-0 flex-shrink-0">
            <div className="flex py-[18px] px-4 flex-col items-start gap-0 flex-1">
              <div className="w-[99px] h-0.5 bg-stroke-color-border-light-high"></div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex p-3 flex-col items-start rounded-[40px] bg-stroke-color-border-light-high">
                <div className="w-3.5 h-3.5 overflow-hidden">
                  <span className="text-black text-center font-lato text-sm font-normal leading-[100%]">
                    4
                  </span>
                </div>
              </div>
              <div className="flex h-[21px] justify-center items-center self-stretch relative">
                <span className="w-[180px] absolute -left-[70px] text-black text-center font-lato text-sm font-normal leading-[150%]">
                  Personal data
                </span>
              </div>
            </div>
          </div>

          {/* Connector 4 */}
          <div className="flex w-[171px] justify-center items-start gap-0 flex-shrink-0">
            <div className="flex py-[18px] px-4 flex-col items-start gap-0 flex-1">
              <div className="w-[99px] h-0.5 bg-stroke-color-border-light-high"></div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex p-3 flex-col items-start rounded-[40px] bg-stroke-color-border-light-high">
                <div className="w-3.5 h-3.5 overflow-hidden">
                  <span className="text-black text-center font-lato text-sm font-normal leading-[100%]">
                    5
                  </span>
                </div>
              </div>
              <div className="flex h-[21px] justify-center items-center self-stretch relative">
                <span className="w-[180px] absolute -left-[70px] text-black text-center font-lato text-sm font-normal leading-[150%]">
                  Payment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-6 px-[185px] pb-16">
        <div className="flex w-[750px] flex-col items-center gap-6">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex flex-col items-start gap-12 self-stretch">
              <div className="flex flex-col items-start gap-18 self-stretch">
                <div className="flex w-[864px] flex-col items-start gap-2">
                  <h1 className="w-[742px] text-wayzor-content-dark-strong font-lato text-[32px] font-bold leading-[125%]">
                    Pick your coverage and travel stress-free
                  </h1>
                  <p className="w-[749px] text-wayzor-content-dark-strong font-lato text-base font-normal leading-[150%]">
                    Accidents happen. Wayzor keeps you covered against damage, glass breakage, vandalism, and theft,
                    so you can drive worry-free.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6 self-stretch">
                <h2 className="self-stretch text-wayzor-content-dark-strong font-lato text-2xl font-bold leading-[130%]">
                  Complementary products
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-start gap-8 self-stretch">
              {/* Protection Section */}
              <div className="flex flex-col items-start gap-4 self-stretch">
                <h3 className="self-stretch text-wayzor-content-dark-strong font-lato text-lg font-bold leading-[140%]">
                  Protection
                </h3>
                <div className="flex flex-col items-start gap-0 self-stretch">
                  <ProductItem title="Premium Road Assistance" price="14,02 €" />
                  <ProductItem title="Total Car Rental Protection" price="38,27 €" />
                  <ProductItem title="Excess Reduction" price="18,99 €" />
                  <ProductItem title="Protection of the driver and occupants..." price="15,01€" />
                  <ProductItem title="Adicional Driver" price="18,01€" />
                  <ProductItem title="Young Driver" price="20,02€" />
                </div>
              </div>

              {/* Comfort Section */}
              <div className="flex flex-col items-start gap-4 self-stretch">
                <h3 className="self-stretch text-wayzor-content-dark-strong font-lato text-lg font-bold leading-[140%]">
                  Comfort
                </h3>
                <div className="flex flex-col items-start gap-0 self-stretch">
                  <ProductItem title="Baby Seat (Grp 0+)" price="15,01€" />
                  <ProductItem title="GPS" price="15,01€" />
                </div>
              </div>
            </div>
          </div>

          {/* See More Button */}
          <button className="flex p-0 items-center gap-2">
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
                d="M2.43057 6.51191C2.70014 6.19741 3.17361 6.16099 3.48811 6.43056L10 12.0122L16.5119 6.43056C16.8264 6.16099 17.2999 6.19741 17.5695 6.51191C17.839 6.8264 17.8026 7.29988 17.4881 7.56944L10.4881 13.5694C10.2072 13.8102 9.79279 13.8102 9.51192 13.5694L2.51192 7.56944C2.19743 7.29988 2.161 6.8264 2.43057 6.51191Z"
                fill="#4E8000"
              />
            </svg>
            <span className="text-wayzor-content-text-color font-lato text-base font-medium leading-[100%]">
              See more
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectOptions;
