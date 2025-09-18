import React from "react";

const ReservationSummaryBar = () => {
  return (
    <div className="flex py-6 items-start gap-6 self-stretch border-t border-b border-[#4B384C]/20 bg-white">
      <div className="flex h-16 flex-col justify-between items-center flex-1">
        <div className="flex w-full max-w-[1232px] justify-between items-center">
          {/* Pick up and Drop off */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex px-[22px] flex-col items-center gap-2.5">
              <div className="flex items-center gap-1">
                <span className="w-16 text-content-bodytext font-lato text-sm font-bold leading-[150%]">
                  Pick up:
                </span>
                <span className="text-content-bodytext font-lato text-[13px] font-normal leading-[123%]">
                  PDL Marina Atlântico &gt; Qua 10 Out . 10:00
                </span>
              </div>
            </div>
            <div className="flex px-[22px] justify-center items-start gap-2.5">
              <div className="flex items-center gap-1">
                <span className="w-16 text-content-bodytext font-lato text-sm font-bold leading-[150%]">
                  Drop off:
                </span>
                <span className="text-content-bodytext font-lato text-[13px] font-normal leading-[123%]">
                  PDL Marina Atlântico &gt; Quin 11 Out . 10:00
                </span>
              </div>
            </div>
          </div>

          {/* Car and Pricing Section */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-12">
              {/* Car Details */}
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-start">
                  <span className="text-content-dark-medium font-lato text-[10px] font-medium leading-[100%]">
                    CLASS: D - COMPACT
                  </span>
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="text-content-bodytext font-lato text-2xl font-bold leading-[130%]">
                      VW Taig
                    </h3>
                    <div className="flex justify-center items-center gap-2.5">
                      <span className="text-content-dark-medium font-lato text-[10px] font-normal leading-[100%]">
                        or similar*
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/452afb865f1a9bdeef036faee275c70f23c89135?width=264"
                  alt="VW Taig"
                  className="w-[132px] h-[59px] object-contain"
                />
              </div>

              {/* Reservation Value */}
              <div className="flex flex-col justify-center items-start gap-0.5">
                <span className="text-content-dark-medium font-lato text-xs font-normal leading-[150%]">
                  Reservation Value
                </span>
                <span className="text-content-dark-medium font-lato text-2xl font-bold leading-[130%]">
                  € 44,52
                </span>
              </div>
            </div>

            {/* Plus Sign */}
            <div className="flex w-[14px] pt-5 flex-col justify-center items-center gap-2.5">
              <span className="self-stretch text-content-dark-medium font-lato text-2xl font-bold leading-[130%]">
                +
              </span>
            </div>

            {/* Complementary Products */}
            <div className="flex flex-col justify-center items-start gap-0.5">
              <span className="text-content-dark-medium font-lato text-xs font-normal leading-[150%]">
                Complementary products
              </span>
              <span className="text-content-dark-medium font-lato text-2xl font-bold leading-[130%]">
                € 2,20
              </span>
            </div>

            {/* Equals Sign */}
            <div className="flex w-[14px] pt-5 flex-col justify-center items-center gap-2.5">
              <span className="self-stretch text-content-dark-medium font-lato text-2xl font-bold leading-[130%]">
                =
              </span>
            </div>

            {/* Total Value */}
            <div className="flex flex-col justify-center items-start gap-0.5">
              <span className="text-content-dark-medium font-lato text-xs font-normal leading-[150%]">
                Reservation Value
              </span>
              <div className="flex flex-col items-start">
                <span className="text-wayzor-green-dark font-lato text-2xl font-bold leading-[130%]">
                  € 46,72
                </span>
                <span className="text-wayzor-green-dark font-lato text-xs font-semibold leading-[150%]">
                  *Includes VAT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationSummaryBar;
