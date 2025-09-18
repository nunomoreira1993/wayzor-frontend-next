import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PersonalDataCarCard from "../components/PersonalDataCarCard";

const ReservationConfirmed = () => {
  const [promocode, setPromocode] = useState("");

  return (
    <div className="min-h-screen bg-bg-light-soft">
      {/* Progress Stepper */}
      <div className="flex flex-col items-center gap-18 pt-24 pb-18">
        <div className="flex w-full max-w-[980px] justify-center items-start">
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
                  Select options
                </span>
              </div>
            </div>
          </div>

          {/* Connector 3 - Completed */}
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
                  Personal data
                </span>
              </div>
            </div>
          </div>

          {/* Connector 4 - Completed Final Step */}
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
              <div className="flex h-[21px] justify-center items-center self-stretch relative">
                <span className="w-[180px] absolute -left-[70px] text-black text-center font-lato text-sm font-semibold leading-[150%]">
                  Payment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center gap-8 px-4 lg:px-[120px] pb-16 w-full max-w-[1406px] mx-auto">
        {/* Left Column - Confirmation Content */}
        <div className="flex w-[750px] flex-col items-start gap-8">
          {/* Main Confirmation Card */}
          <Card className="w-full border-[#4B384C]/20">
            <CardContent className="pb-8">
              <div className="flex w-full flex-col items-start gap-6">
                {/* Success Header */}
                <div className="flex h-28 px-8 pt-8 flex-col items-start gap-18 self-stretch">
                  <div className="flex items-center gap-4">
                    <div className="flex w-[52px] h-[52px] px-[30px] justify-center items-center gap-2.5 rounded-full bg-[#4B384C]">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M29.6971 6.28301C30.0931 6.66799 30.102 7.30109 29.717 7.69708L12.217 25.6971C12.0304 25.889 11.7747 25.9981 11.507 26C11.2394 26.0019 10.9822 25.8964 10.7929 25.7071L2.29289 17.2071C1.90237 16.8166 1.90237 16.1834 2.29289 15.7929C2.68342 15.4024 3.31658 15.4024 3.70711 15.7929L11.49 23.5758L28.283 6.30292C28.668 5.90694 29.3011 5.89802 29.6971 6.28301Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h1 className="text-content-dark-strong font-lato text-[32px] font-bold leading-[125%]">
                      Your Reservation has been confirmed.<br />
                      Thank you!
                    </h1>
                  </div>
                </div>

                {/* Customer and Reservation Details */}
                <div className="flex flex-col items-start gap-6 self-stretch">
                  <div className="flex px-10 flex-col items-start gap-2 self-stretch">
                    <div className="flex w-[480px] justify-between items-start">
                      <div className="flex flex-col items-start gap-2">
                        <h2 className="text-content-dark-strong font-lato text-lg font-bold leading-[140%]">
                          Nuno Moreira
                        </h2>
                        <div className="flex flex-col justify-center items-start gap-1">
                          <p className="text-content-dark-strong font-lato text-base font-normal leading-[150%]">
                            nunomoreira@gmail.com
                          </p>
                          <p className="text-content-dark-strong font-lato text-base font-normal leading-[150%]">
                            913 456 876
                          </p>
                        </div>
                      </div>
                      <div className="flex w-[159px] flex-col items-start gap-2 flex-shrink-0">
                        <h2 className="text-content-dark-strong font-lato text-lg font-bold leading-[140%]">
                          Reservation No
                        </h2>
                        <div className="flex flex-col justify-center items-start gap-1">
                          <p className="text-content-dark-strong font-lato text-base font-normal leading-[150%]">
                            5832456
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex px-10 flex-col items-start gap-2 self-stretch">
                    <div className="flex w-[480px] justify-between items-start">
                      <div className="flex flex-col items-start gap-2">
                        <h3 className="text-content-dark-strong font-lato text-lg font-bold leading-[140%]">
                          Pick up
                        </h3>
                        <div className="flex flex-col justify-center items-start gap-1">
                          <p className="text-content-dark-strong font-lato text-base font-normal leading-[150%]">
                            PDL Marina Atlântico<br />
                            Qua 10 Out . 10:00
                          </p>
                        </div>
                      </div>
                      <div className="flex w-[161px] flex-col items-start gap-2 flex-shrink-0">
                        <h3 className="text-content-dark-strong font-lato text-lg font-bold leading-[140%]">
                          Drop off
                        </h3>
                        <div className="flex flex-col justify-center items-start gap-1">
                          <p className="text-content-dark-strong font-lato text-base font-normal leading-[150%]">
                            PDL Marina Atlântico<br />
                            Qua 10 Out . 10:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex px-10 flex-col items-start gap-2.5 self-stretch">
                  <div className="w-[674px] h-px bg-black/10"></div>
                </div>

                {/* Check in Section */}
                <div className="flex px-10 flex-col items-start gap-2 self-stretch">
                  <h2 className="text-content-dark-strong font-lato text-lg font-bold leading-[140%] self-stretch">
                    Check in
                  </h2>
                  <div className="flex flex-col items-start gap-6">
                    <p className="w-[682px] text-content-dark-strong font-lato text-base font-normal leading-[150%]">
                      To complete your reservation, please check in by clicking on the button below:
                    </p>
                    <Button className="flex h-12 px-8 flex-col justify-center items-center gap-0 rounded-full bg-wayzor-green hover:bg-wayzor-green/90">
                      <span className="text-black text-center font-lato text-sm font-bold leading-[150%]">
                        Check-in online
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex px-10 flex-col items-start gap-2.5 self-stretch">
                  <div className="w-[674px] h-px bg-black/10"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Instructions */}
          <div className="w-[682px] text-content-dark-strong font-lato text-base font-normal leading-[150%]">
            <p className="mb-4">If you paid with:</p>
            
            <p className="mb-4">
              <span className="font-bold">Credit Card:</span>{" "}
              You must have the same valid credit card used for online payment and on your behalf, which will be used for the security deposit*.
            </p>

            <p className="mb-4">
              <span className="font-bold">Debit Card:</span>{" "}
              You must present the same debit card you used in the online payment, valid and in your name.
              In addition you must present a credit card, also valid and in your name, for the security deposit*.
            </p>

            <p className="mb-4">
              <span className="font-bold">Virtual card (eg MB Way):</span>{" "}
              You must provide proof of payment in one of the following ways:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Open app on your mobile device, showing transaction;</li>
              <li>Presentation of bank statement proving the movement or, proof of transaction</li>
            </ul>

            <p className="mb-4">
              <span className="font-bold">Security Deposit:</span>{" "}
              Present a valid credit card in your name for the security deposit*.
            </p>

            <p className="text-sm">
              *The credit card used for the security deposit must be valid within 30 days from the date of delivery of the vehicle.
            </p>
          </div>

          {/* Assistance Banner */}
          <Card 
            className="w-full h-[185px] border-[#4B384C]/20 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/b97daf1c97d05f4d342cb304a95ef346d3b928ae?width=1500'), #4B384C`,
              backgroundSize: '50.392% 129.193%',
              backgroundPosition: '400px -42.889px',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <CardContent className="flex w-full h-full items-center p-6">
              <div className="flex w-full items-start gap-3">
                <div className="flex pt-[14px] items-center gap-2.5">
                  <div className="flex p-2 items-center gap-2.5 rounded-full bg-[#685869]">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none">
                      <path d="M16.0128 7.55556C13.9532 7.55556 12.5736 8.44114 11.7247 9.34201C11.3077 9.78463 11.0222 10.2259 10.8395 10.5589C10.7477 10.7262 10.6805 10.8686 10.6347 10.9737C10.6117 11.0263 10.594 11.0698 10.5812 11.1026C10.5748 11.1191 10.5695 11.1329 10.5655 11.1438L10.5602 11.1582L10.5582 11.1637L10.5574 11.1661L10.557 11.1671C10.557 11.1671 10.5567 11.1681 11.5 11.5L10.5567 11.1681C10.3734 11.6891 10.6471 12.26 11.1681 12.4433C11.6868 12.6258 12.255 12.3553 12.4409 11.8388L12.4438 11.8312C12.4478 11.8209 12.4557 11.8012 12.4679 11.7733C12.4923 11.7173 12.5333 11.6297 12.5929 11.5209C12.7131 11.3018 12.9038 11.007 13.1804 10.7135C13.7187 10.1422 14.5955 9.55556 16.0128 9.55556C17.137 9.55556 17.89 9.85034 18.3785 10.2251C18.8683 10.6008 19.1564 11.1055 19.2733 11.6412C19.5287 12.8118 18.9686 13.8069 18.288 14.0468C16.838 14.5579 15.9318 15.2635 15.45 16.1975C15.0112 17.0482 15.0121 17.9513 15.0127 18.5959L15.0128 18.6667C15.0128 19.219 15.4605 19.6667 16.0128 19.6667C16.5651 19.6667 17.0128 19.219 17.0128 18.6667C17.0128 17.936 17.0307 17.496 17.2275 17.1144C17.3976 16.7845 17.7952 16.3411 18.9529 15.933C20.88 15.2537 21.6237 13.0316 21.2273 11.2148C21.0182 10.2568 20.4914 9.3253 19.5959 8.63826C18.699 7.95017 17.4963 7.55556 16.0128 7.55556Z" fill="white"/>
                      <path d="M16 21.5C15.4477 21.5 15 21.9477 15 22.5C15 23.0523 15.4477 23.5 16 23.5C16.5523 23.5 17 23.0523 17 22.5C17 21.9477 16.5523 21.5 16 21.5Z" fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 2.5C8.26801 2.5 2 8.76801 2 16.5C2 24.232 8.26801 30.5 16 30.5C23.732 30.5 30 24.232 30 16.5C30 8.76801 23.732 2.5 16 2.5ZM4 16.5C4 9.87258 9.37258 4.5 16 4.5C22.6274 4.5 28 9.87258 28 16.5C28 23.1274 22.6274 28.5 16 28.5C9.37258 28.5 4 23.1274 4 16.5Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div className="flex items-end gap-3">
                  <div className="flex w-[387px] h-[137px] flex-col justify-center items-start gap-[25px]">
                    <div className="flex w-[206px] flex-col justify-center items-start gap-1">
                      <h3 className="w-[263px] text-white font-lato text-lg font-bold leading-[140%]">
                        Still require assistance?
                      </h3>
                      <p className="w-[612px] text-white font-lato text-sm font-normal leading-[150%]">
                        Join the thousands who hit the road with Wayzor — over 150,000 in 2019 alone.
                        Our friendly team is here to help you plan your perfect trip. Visit our contact page and let's get your Azores adventure started.
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className="flex w-[178px] h-10 px-6 flex-col justify-center items-center gap-0 rounded-full border-[1.5px] border-wayzor-green bg-transparent hover:bg-white/10"
                  >
                    <span className="text-white text-center font-lato text-sm font-semibold leading-[150%]">
                      Contact us
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Car Card */}
        <div className="hidden lg:block w-[528px] flex-shrink-0">
          <PersonalDataCarCard />
        </div>
      </div>
    </div>
  );
};

export default ReservationConfirmed;
