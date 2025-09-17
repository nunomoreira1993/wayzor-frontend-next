import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CarCard from "../components/CarCard";

const PersonalData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "", 
    email: "",
    dateOfBirth: "",
    country: "",
    nif: "",
    streetAddress: "",
    zip: "",
    city: "",
    citizenCardNumber: "",
    citizenCardExpiry: "",
    driverNumber: "",
    issueDate: "",
    licenseExpiry: "",
    addToBilling: true,
    createAccount: false,
    agreeTerms: false,
    receiveMarketing: false,
    paymentMethod: "cards",
    promocode: ""
  });

  const [showPromocode, setShowPromocode] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

          {/* Connector 3 - Active Step */}
          <div className="flex w-[171px] justify-center items-start gap-0 flex-shrink-0">
            <div className="flex py-[18px] px-4 flex-col items-start gap-0 flex-1">
              <div className="w-[99px] h-0.5 bg-gradient-to-r from-black/10 to-black/10 bg-wayzor-green/70"></div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex p-3 flex-col justify-center items-center rounded-[40px] bg-wayzor-green/70 relative">
                <div className="w-3.5 h-3.5 overflow-hidden flex justify-center items-center">
                  <span className="text-black text-center font-lato text-sm font-medium leading-[100%]">
                    4
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
                  <path
                    d="M1 1H9"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex w-10 h-[21px] justify-center items-center relative">
                <span className="w-[180px] absolute -left-[70px] text-black text-center font-lato text-sm font-semibold leading-[150%]">
                  Personal data
                </span>
              </div>
            </div>
          </div>

          {/* Connector 4 */}
          <div className="flex w-[171px] justify-center items-start gap-0 flex-shrink-0">
            <div className="flex py-[18px] px-4 flex-col items-start gap-0 flex-1">
              <div className="w-[99px] h-0.5 bg-[#DCE3E5]"></div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex p-3 flex-col items-start rounded-[40px] bg-[#DCE3E5]">
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
      <div className="flex justify-center gap-8 px-4 lg:px-[120px] pb-16">
        {/* Left Column - Form */}
        <div className="flex w-full max-w-[750px] flex-col items-start gap-6">
          {/* Main Form Card */}
          <Card className="w-full border-[#4B384C]/20">
            <CardContent className="p-8">
              <div className="flex flex-col gap-8">
                {/* Your Details Section */}
                <div className="flex flex-col gap-6">
                  <h1 className="text-content-dark-strong font-lato text-[32px] font-bold leading-[125%]">
                    Your details
                  </h1>
                  
                  <div className="flex flex-col gap-6">
                    {/* First Row - First Name, Last Name */}
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <Label htmlFor="firstName" className="text-content-bodytext font-lato text-sm font-semibold">
                          First name
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="mt-2 h-12 rounded-lg border-[#000]/10"
                        />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="lastName" className="text-content-bodytext font-lato text-sm font-semibold">
                          Last name
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="mt-2 h-12 rounded-lg border-[#000]/10"
                        />
                      </div>
                    </div>

                    {/* Second Row - Email, Date of Birth */}
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <Label htmlFor="email" className="text-content-bodytext font-lato text-sm font-semibold">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-2 h-12 rounded-lg border-[#000]/10"
                        />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="dateOfBirth" className="text-content-bodytext font-lato text-sm font-semibold">
                          Date of birth
                        </Label>
                        <Input
                          id="dateOfBirth"
                          placeholder="MM/DD/YYYY"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          className="mt-2 h-12 rounded-lg border-[#000]/10 placeholder:text-content-label"
                        />
                      </div>
                    </div>

                    {/* Third Row - Country, NIF */}
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <Label htmlFor="country" className="text-content-bodytext font-lato text-sm font-semibold">
                          Country
                        </Label>
                        <div className="relative">
                          <Input
                            id="country"
                            placeholder="Choose a country"
                            value={formData.country}
                            onChange={(e) => handleInputChange("country", e.target.value)}
                            className="mt-2 h-12 rounded-lg border-[#000]/10 placeholder:text-content-label pr-10"
                          />
                          <svg
                            className="absolute right-3 top-1/2 -translate-y-1/2 mt-1"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.42385 5.01986C1.68903 4.70165 2.16195 4.65866 2.48016 4.92383L8.00002 9.52372L13.5199 4.92383C13.8381 4.65866 14.311 4.70165 14.5762 5.01986C14.8414 5.33807 14.7984 5.81099 14.4802 6.07617L8.48016 11.0762C8.20202 11.3079 7.79801 11.3079 7.51988 11.0762L1.51988 6.07617C1.20167 5.81099 1.15868 5.33807 1.42385 5.01986Z"
                              fill="#6D7679"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="nif" className="text-content-bodytext font-lato text-sm font-semibold">
                          NIF <span className="text-content-label font-normal">(optional)</span>
                        </Label>
                        <Input
                          id="nif"
                          value={formData.nif}
                          onChange={(e) => handleInputChange("nif", e.target.value)}
                          className="mt-2 h-12 rounded-lg border-[#000]/10"
                        />
                      </div>
                    </div>

                    {/* Add to billing details checkbox */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <div 
                          className={`w-[18px] h-[18px] rounded border-2 border-wayzor-green flex items-center justify-center cursor-pointer ${
                            formData.addToBilling ? 'bg-wayzor-green' : 'bg-white'
                          }`}
                          onClick={() => handleInputChange("addToBilling", !formData.addToBilling)}
                        >
                          {formData.addToBilling && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.8978 2.60225C11.1174 2.82192 11.1174 3.17808 10.8978 3.39775L4.89776 9.39775C4.68836 9.60715 4.35246 9.61833 4.1296 9.42332L1.1296 6.79832C0.895803 6.59375 0.872112 6.23839 1.07668 6.00459C1.28125 5.7708 1.63662 5.7471 1.87042 5.95168L4.47437 8.23014L10.1023 2.60225C10.3219 2.38258 10.6781 2.38258 10.8978 2.60225Z"
                                fill="black"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-content-dark-medium font-lato text-sm font-medium">
                        Add to billing details
                      </span>
                    </div>
                  </div>
                </div>

                {/* Save Time Section */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-content-dark-strong font-lato text-2xl font-bold leading-[130%]">
                    Save time!
                  </h2>
                  <p className="text-content-dark-strong font-lato text-base font-normal leading-[150%]">
                    Fill in all the required information for your rental now, and simply pick up your vehicle at a Wayzor station.
                  </p>
                </div>

                {/* Home Details Section */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-content-dark-strong font-lato text-lg font-bold leading-[140%]">
                    Home details
                  </h3>
                  
                  <div className="flex flex-col gap-4">
                    {/* Street Address */}
                    <div>
                      <Label htmlFor="streetAddress" className="text-content-bodytext font-lato text-sm font-semibold">
                        Street address
                      </Label>
                      <Input
                        id="streetAddress"
                        value={formData.streetAddress}
                        onChange={(e) => handleInputChange("streetAddress", e.target.value)}
                        className="mt-2 h-12 rounded-lg border-[#000]/10"
                      />
                    </div>

                    {/* Zip and City */}
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <Label htmlFor="zip" className="text-content-bodytext font-lato text-sm font-semibold">
                          Zip
                        </Label>
                        <Input
                          id="zip"
                          value={formData.zip}
                          onChange={(e) => handleInputChange("zip", e.target.value)}
                          className="mt-2 h-12 rounded-lg border-[#000]/10"
                        />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="city" className="text-content-bodytext font-lato text-sm font-semibold">
                          City
                        </Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          className="mt-2 h-12 rounded-lg border-[#000]/10"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Citizen Card Section */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-content-dark-strong font-lato text-lg font-bold leading-[140%]">
                    Citizen Card
                  </h3>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <Label htmlFor="citizenCardNumber" className="text-content-bodytext font-lato text-sm font-semibold">
                        Citizen card number
                      </Label>
                      <Input
                        id="citizenCardNumber"
                        value={formData.citizenCardNumber}
                        onChange={(e) => handleInputChange("citizenCardNumber", e.target.value)}
                        className="mt-2 h-12 rounded-lg border-[#000]/10"
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="citizenCardExpiry" className="text-content-bodytext font-lato text-sm font-semibold">
                        Expiry date
                      </Label>
                      <Input
                        id="citizenCardExpiry"
                        placeholder="MM/DD/YYYY"
                        value={formData.citizenCardExpiry}
                        onChange={(e) => handleInputChange("citizenCardExpiry", e.target.value)}
                        className="mt-2 h-12 rounded-lg border-[#000]/10 placeholder:text-content-label"
                      />
                    </div>
                  </div>
                </div>

                {/* Driving License Section */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-content-dark-strong font-lato text-lg font-bold leading-[140%]">
                    Driving license
                  </h3>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <Label htmlFor="driverNumber" className="text-content-bodytext font-lato text-sm font-semibold">
                          Driver´s number
                        </Label>
                        <Input
                          id="driverNumber"
                          value={formData.driverNumber}
                          onChange={(e) => handleInputChange("driverNumber", e.target.value)}
                          className="mt-2 h-12 rounded-lg border-[#000]/10"
                        />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="issueDate" className="text-content-bodytext font-lato text-sm font-semibold">
                          Issue date
                        </Label>
                        <Input
                          id="issueDate"
                          placeholder="MM/DD/YYYY"
                          value={formData.issueDate}
                          onChange={(e) => handleInputChange("issueDate", e.target.value)}
                          className="mt-2 h-12 rounded-lg border-[#000]/10 placeholder:text-content-label"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <Label htmlFor="licenseExpiry" className="text-content-bodytext font-lato text-sm font-semibold">
                          Expiry date
                        </Label>
                        <Input
                          id="licenseExpiry"
                          placeholder="MM/DD/YYYY"
                          value={formData.licenseExpiry}
                          onChange={(e) => handleInputChange("licenseExpiry", e.target.value)}
                          className="mt-2 h-12 rounded-lg border-[#000]/10 placeholder:text-content-label"
                        />
                      </div>
                      <div className="flex-1"></div>
                    </div>
                  </div>
                </div>

                {/* Checkboxes Section */}
                <div className="flex flex-col gap-4">
                  {/* Create Account */}
                  <div className="flex items-start gap-3">
                    <div 
                      className={`w-[18px] h-[18px] min-w-[18px] mt-0.5 rounded border-2 border-wayzor-green-dark flex items-center justify-center cursor-pointer ${
                        formData.createAccount ? 'bg-wayzor-green-dark' : 'bg-white'
                      }`}
                      onClick={() => handleInputChange("createAccount", !formData.createAccount)}
                    >
                      {formData.createAccount && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.8978 2.60225C11.1174 2.82192 11.1174 3.17808 10.8978 3.39775L4.89776 9.39775C4.68836 9.60715 4.35246 9.61833 4.1296 9.42332L1.1296 6.79832C0.895803 6.59375 0.872112 6.23839 1.07668 6.00459C1.28125 5.7708 1.63662 5.7471 1.87042 5.95168L4.47437 8.23014L10.1023 2.60225C10.3219 2.38258 10.6781 2.38258 10.8978 2.60225Z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-content-label font-lato text-xs font-medium leading-[110%]">
                      <span className="text-wayzor-green-dark underline font-bold">Create an account</span>{" "}
                      with the entered details to access the Reserved Area.
                    </span>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-start gap-3">
                    <div 
                      className={`w-[18px] h-[18px] min-w-[18px] mt-0.5 rounded border-2 border-wayzor-green-dark flex items-center justify-center cursor-pointer ${
                        formData.agreeTerms ? 'bg-wayzor-green-dark' : 'bg-white'
                      }`}
                      onClick={() => handleInputChange("agreeTerms", !formData.agreeTerms)}
                    >
                      {formData.agreeTerms && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.8978 2.60225C11.1174 2.82192 11.1174 3.17808 10.8978 3.39775L4.89776 9.39775C4.68836 9.60715 4.35246 9.61833 4.1296 9.42332L1.1296 6.79832C0.895803 6.59375 0.872112 6.23839 1.07668 6.00459C1.28125 5.7708 1.63662 5.7471 1.87042 5.95168L4.47437 8.23014L10.1023 2.60225C10.3219 2.38258 10.6781 2.38258 10.8978 2.60225Z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-content-label font-lato text-xs font-medium leading-[110%]">
                      I have read and agree to the{" "}
                      <span className="text-wayzor-green-dark underline font-bold">Privacy and Security Policy</span>,{" "}
                      <span className="text-wayzor-green-dark underline font-bold">Terms and Conditions</span>, and{" "}
                      <span className="text-wayzor-green-dark underline font-bold">Web Terms and Conditions</span>.
                    </span>
                  </div>

                  {/* Marketing Communications */}
                  <div className="flex items-start gap-3">
                    <div 
                      className={`w-[18px] h-[18px] min-w-[18px] mt-0.5 rounded border-2 border-wayzor-green-dark flex items-center justify-center cursor-pointer ${
                        formData.receiveMarketing ? 'bg-wayzor-green-dark' : 'bg-white'
                      }`}
                      onClick={() => handleInputChange("receiveMarketing", !formData.receiveMarketing)}
                    >
                      {formData.receiveMarketing && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.8978 2.60225C11.1174 2.82192 11.1174 3.17808 10.8978 3.39775L4.89776 9.39775C4.68836 9.60715 4.35246 9.61833 4.1296 9.42332L1.1296 6.79832C0.895803 6.59375 0.872112 6.23839 1.07668 6.00459C1.28125 5.7708 1.63662 5.7471 1.87042 5.95168L4.47437 8.23014L10.1023 2.60225C10.3219 2.38258 10.6781 2.38258 10.8978 2.60225Z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-content-label font-lato text-xs font-medium leading-[110%] max-w-[647px]">
                      I would like to receive marketing communications, namely about promotions, events, and new mobility products from Wayzor and its subsidiaries, whether by e-mail, telephone, or SMS.
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warning Banner */}
          <Card className="w-full border-[#4B384C]/20 bg-gradient-to-r from-[#4B384C] to-[#4B384C] text-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-[#685869] rounded-full">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.0004 4.5C17.2744 4.5 18.6187 5.10991 19.327 6.40891L28.5858 23.3883C29.9297 25.8528 27.9012 28.5 25.2591 28.5H6.74159C4.09953 28.5 2.07108 25.8529 3.41497 23.3883L12.6737 6.40891C13.3821 5.10991 14.7263 4.5 16.0004 4.5ZM16.0004 6.5C15.3302 6.5 14.7302 6.8152 14.4297 7.3664L5.17088 24.3458C4.69448 25.2195 5.31336 26.5 6.74159 26.5H25.2591C26.6874 26.5 27.3063 25.2195 26.8299 24.3458L17.5711 7.36639C17.2705 6.81519 16.6705 6.5 16.0004 6.5ZM16.0004 12.5C16.5527 12.5 17.0004 12.9477 17.0004 13.5V18.5C17.0004 19.0523 16.5527 19.5 16.0004 19.5C15.4481 19.5 15.0004 19.0523 15.0004 18.5V13.5C15.0004 12.9477 15.4481 12.5 16.0004 12.5Z"
                      fill="white"
                    />
                    <path
                      d="M17.0004 22.5C17.0004 23.0523 16.5527 23.5 16.0004 23.5C15.4481 23.5 15.0004 23.0523 15.0004 22.5C15.0004 21.9477 15.4481 21.5 16.0004 21.5C16.5527 21.5 17.0004 21.9477 17.0004 22.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-lato text-lg font-bold leading-[140%] mb-1">
                    Your booking is not fully covered
                  </h3>
                  <p className="text-white font-lato text-sm font-normal leading-[150%] mb-4">
                    If the vehicle is damaged, stolen, you lose the keys and/or need a tow, you may have to pay an excedd charge of up to 3 300 euros.
                  </p>
                  <p className="text-white font-lato text-[15px] font-normal leading-[150%] mb-4">
                    Reduce your responsibility by just <span className="font-bold">38,27 €</span>
                  </p>
                  <Button
                    variant="outline"
                    className="border-wayzor-green text-white hover:bg-wayzor-green hover:text-black rounded-full px-6"
                  >
                    Add Total Car Rental Protection
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method Section */}
          <Card className="w-full border-[#4B384C]/20">
            <CardContent className="p-8">
              <div className="flex flex-col gap-6">
                <h3 className="text-content-dark-strong font-lato text-lg font-bold leading-[140%]">
                  Choose payment method
                </h3>
                
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Other Cards */}
                  <div 
                    className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      formData.paymentMethod === "cards" 
                        ? "border-wayzor-green bg-bg-light-medium" 
                        : "border-gray-200 bg-white"
                    }`}
                    onClick={() => handleInputChange("paymentMethod", "cards")}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                          formData.paymentMethod === "cards" 
                            ? "border-wayzor-green bg-wayzor-green" 
                            : "border-wayzor-green-dark bg-white"
                        }`}>
                          {formData.paymentMethod === "cards" && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.8978 2.60225C11.1174 2.82192 11.1174 3.17808 10.8978 3.39775L4.89776 9.39775C4.68836 9.60715 4.35246 9.61833 4.1296 9.42332L1.1296 6.79832C0.895803 6.59375 0.872112 6.23839 1.07668 6.00459C1.28125 5.7708 1.63662 5.7471 1.87042 5.95168L4.47437 8.23014L10.1023 2.60225C10.3219 2.38258 10.6781 2.38258 10.8978 2.60225Z"
                                fill="black"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-content-bodytext font-lato text-sm font-semibold">
                          Other Cards
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {/* Visa */}
                        <div className="w-[35px] h-[24px] border border-gray-300 rounded bg-white flex items-center justify-center">
                          <svg width="25" height="8" viewBox="0 0 25 9" fill="none">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.62526 8.25825H4.50494L2.91495 2.19237C2.83949 1.91334 2.67925 1.66667 2.44354 1.5504C1.85531 1.25823 1.20712 1.0257 0.5 0.908431V0.674895H3.91567C4.38708 0.674895 4.74064 1.0257 4.79957 1.43313L5.62454 5.80865L7.74383 0.674895H9.80522L6.62526 8.25825ZM10.9838 8.25825H8.98129L10.6302 0.674895H12.6327L10.9838 8.25825ZM15.2234 2.77571C15.2823 2.36728 15.6359 2.13374 16.0483 2.13374C16.6965 2.07511 17.4026 2.19238 17.9919 2.48354L18.3454 0.85081C17.7562 0.617274 17.108 0.5 16.5198 0.5C14.5762 0.5 13.162 1.55041 13.162 3.00824C13.162 4.11728 14.1637 4.69961 14.8708 5.05042C15.6359 5.40021 15.9305 5.63375 15.8716 5.98355C15.8716 6.50825 15.2823 6.74178 14.6941 6.74178C13.9869 6.74178 13.2798 6.56688 12.6327 6.27471L12.2791 7.90845C12.9862 8.19962 13.7512 8.31689 14.4584 8.31689C16.6376 8.37451 17.9919 7.32512 17.9919 5.75001C17.9919 3.76647 15.2234 3.65021 15.2234 2.77571ZM25 8.25825L23.41 0.674895H21.7022C21.3486 0.674895 20.9951 0.908431 20.8772 1.25823L17.9329 8.25825H19.9943L20.4058 7.15021H22.9386L23.1743 8.25825H25ZM21.9968 2.71708L22.585 5.57512H20.9361L21.9968 2.71708Z"
                              fill="#172B85"
                            />
                          </svg>
                        </div>
                        {/* Mastercard */}
                        <div className="w-[35px] h-[24px] border border-gray-300 rounded bg-white flex items-center justify-center">
                          <div className="relative w-[23px] h-[14px]">
                            <svg
                              className="absolute left-0 top-0"
                              width="23"
                              height="14"
                              viewBox="0 0 23 14"
                              fill="none"
                            >
                              <path
                                d="M16.1758 0C19.9444 0 23 3.09091 23 6.90332C22.9998 10.7156 19.9443 13.8057 16.1758 13.8057C14.4864 13.8056 12.9416 13.1832 11.75 12.1543C10.5584 13.1832 9.01365 13.8056 7.32422 13.8057C3.55566 13.8057 0.500179 10.7156 0.5 6.90332C0.5 3.09091 3.55555 0 7.32422 0C9.01335 0.000109834 10.5584 0.621855 11.75 1.65039C12.9416 0.621855 14.4866 0.000111238 16.1758 0Z"
                                fill="#ED0006"
                              />
                            </svg>
                            <svg
                              className="absolute left-[11px] top-0"
                              width="12"
                              height="14"
                              viewBox="0 0 12 14"
                              fill="none"
                            >
                              <path
                                d="M5.17578 0C8.94445 0 12 3.09091 12 6.90332C11.9998 10.7156 8.94433 13.8057 5.17578 13.8057C3.48635 13.8056 1.94164 13.1832 0.75 12.1543C2.21637 10.8882 3.14736 9.00638 3.14746 6.90332C3.14746 4.79982 2.21681 2.91652 0.75 1.65039C1.94156 0.621855 3.48665 0.000111238 5.17578 0Z"
                                fill="#F9A000"
                              />
                            </svg>
                            <svg
                              className="absolute left-[9px] top-[2px]"
                              width="6"
                              height="12"
                              viewBox="0 0 6 12"
                              fill="none"
                            >
                              <path
                                d="M2.74902 0.651367C4.21566 1.91749 5.14648 3.79998 5.14648 5.90332C5.14648 8.00643 4.21537 9.88817 2.74902 11.1543C1.28271 9.88817 0.351562 8.0064 0.351562 5.90332C0.351572 3.8 1.28242 1.91749 2.74902 0.651367Z"
                                fill="#FF5E00"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MBWAY */}
                  <div 
                    className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      formData.paymentMethod === "mbway" 
                        ? "border-wayzor-green bg-bg-light-medium" 
                        : "border-gray-200 bg-white"
                    }`}
                    onClick={() => handleInputChange("paymentMethod", "mbway")}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                          formData.paymentMethod === "mbway" 
                            ? "border-wayzor-green bg-wayzor-green" 
                            : "border-wayzor-green-dark bg-white"
                        }`}>
                          {formData.paymentMethod === "mbway" && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.8978 2.60225C11.1174 2.82192 11.1174 3.17808 10.8978 3.39775L4.89776 9.39775C4.68836 9.60715 4.35246 9.61833 4.1296 9.42332L1.1296 6.79832C0.895803 6.59375 0.872112 6.23839 1.07668 6.00459C1.28125 5.7708 1.63662 5.7471 1.87042 5.95168L4.47437 8.23014L10.1023 2.60225C10.3219 2.38258 10.6781 2.38258 10.8978 2.60225Z"
                                fill="black"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-content-bodytext font-lato text-sm font-semibold">
                          MBWAY
                        </span>
                      </div>
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/79dfb137a669eace83a425aaf604041215b66953?width=98"
                        alt="MBWAY"
                        className="w-[49px] h-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Promocode Section */}
          <Card className="w-full border-[#4B384C]/20">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-content-bodytext font-lato text-sm font-bold leading-[150%]">
                  Do you have a promotional code?
                </h4>
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    placeholder="Promocode"
                    value={formData.promocode}
                    onChange={(e) => handleInputChange("promocode", e.target.value)}
                    className="flex-1 h-12 rounded-lg border-[#000]/10 placeholder:text-content-label"
                  />
                  <Button
                    variant="outline"
                    className="border-wayzor-green-dark text-wayzor-green-dark hover:bg-wayzor-green-dark hover:text-white rounded-full px-6 h-10"
                  >
                    Validate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Continue Button */}
          <div className="flex justify-end">
            <Button className="bg-wayzor-green hover:bg-wayzor-green-dark text-black font-bold text-base px-10 py-4 rounded-full h-[54px]">
              Continue to payment
            </Button>
          </div>
        </div>

        {/* Right Column - Car Card */}
        <div className="hidden lg:block flex-shrink-0">
          <CarCard car={{
            id: 1,
            class: "CLASS: D - COMPACT",
            name: "Volkswagen Taig",
            similar: "or similar*",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/dca0708bcc7ca2e230f908f71e104db024a7151e?width=596",
            price: "€ 44,52",
            currency: "*",
            priceColor: "text-content-dark-medium",
            dailyPrice: "€ 44,52 / day",
            passengers: "5 passengers",
            doors: "5 doors",
            transmission: "Manual",
            fuel: "Petrol",
            description: "* At the time of pick up the vehicle: - € 600,00 Security Deposit on the same physical credit card as the online payment, on behalf of the driver. - Security Deposit will be returned upon termination of contract."
          }} />
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
