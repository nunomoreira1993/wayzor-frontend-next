import React from "react";
import FleetSearchFilters from "@/components/FleetSearchFilters";
import CarCard from "@/components/CarCard";

const fleetData = [
  {
    id: 1,
    class: "CLASS: D - COMPACT",
    name: "Skoda Kamiq",
    similar: "or similar*",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/bf727603bc9f64f9eef06c339ae29bf595f82c84?width=596",
    price: "518,00",
    currency: "€",
    priceColor: "text-wayzor-green",
    dailyPrice: "17,30 € / Day",
    passengers: "5 pax",
    doors: "5 Doors",
    transmission: "Manual",
    fuel: "Petrol",
    description: "* Seat Ibiza, Renault Clio IV or similar",
  },
  {
    id: 2,
    class: "CLASS: D - COMPACT",
    name: "Skoda Fabia",
    similar: "or similar*",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e77efdd6814f88c9b3b7ae1e4cca4742db9c155d?width=596",
    price: "624,00",
    currency: "€",
    priceColor: "text-wayzor-content-dark-medium",
    dailyPrice: "17,30 € / Day",
    passengers: "5 pax",
    doors: "5 Doors",
    transmission: "Manual",
    fuel: "Petrol",
    description: "* Seat Ibiza, Renault Clio IV or similar",
  },
  {
    id: 3,
    class: "CLASS: E1 - COMPACT",
    name: "Ford Puma",
    similar: "or similar*",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/cce1e5cc5f60c91bd596fa44c6d37b5205cbba6a?width=596",
    price: "624,00",
    currency: "€",
    priceColor: "text-wayzor-content-dark-medium",
    dailyPrice: "17,30 € / Day",
    passengers: "5 pax",
    doors: "5 Doors",
    transmission: "Manual",
    fuel: "Petrol",
    description: "* Seat Ibiza, Renault Clio IV or similar",
  },
  {
    id: 4,
    class: "CLASS: D - COMPACT",
    name: "VW T-Cross",
    similar: "or similar*",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/688eca342e5037fb104643fd27b2ef6d8d588b03?width=596",
    price: "624,00",
    currency: "€",
    priceColor: "text-wayzor-content-dark-medium",
    dailyPrice: "17,30 € / Day",
    passengers: "5 pax",
    doors: "5 Doors",
    transmission: "Manual",
    fuel: "Petrol",
    description: "* Seat Ibiza, Renault Clio IV or similar",
  },
  {
    id: 5,
    class: "CLASS: D - COMPACT",
    name: "VW Taig",
    similar: "or similar*",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/204b600b3e302a753526569bf8e1f4e9930f70af?width=596",
    price: "518,00",
    currency: "€",
    priceColor: "text-wayzor-green",
    dailyPrice: "17,30 € / Day",
    passengers: "5 pax",
    doors: "5 Doors",
    transmission: "Manual",
    fuel: "Petrol",
    description: "* Seat Ibiza, Renault Clio IV or similar",
  },
  {
    id: 6,
    class: "CLASS: GRP C3",
    name: "Audi A1",
    similar: "or similar*",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/9cd10ac36b68aa088ea5bc11e568ecc7b75f6605?width=596",
    price: "624,00",
    currency: "€",
    priceColor: "text-wayzor-content-dark-medium",
    dailyPrice: "17,30 € / Day",
    passengers: "5 pax",
    doors: "5 Doors",
    transmission: "Manual",
    fuel: "Petrol",
    description: "* Seat Ibiza, Renault Clio IV or similar",
  },
  {
    id: 7,
    class: "CLASS: C - COMPACT",
    name: "Peugeot 208",
    similar: "or similar*",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/7aa26ec5f30a13bf4380c5ba88ec35cb4d4e5b2a?width=596",
    price: "624,00",
    currency: "€",
    priceColor: "text-wayzor-content-dark-medium",
    dailyPrice: "17,30 € / Day",
    passengers: "5 pax",
    doors: "5 Doors",
    transmission: "Manual",
    fuel: "Petrol",
    description: "* Seat Ibiza, Renault Clio IV or similar",
  },
  {
    id: 8,
    class: "CLASS: M - MONOVOLUME",
    name: "VW Caravelle",
    similar: "or similar*",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e7720e28543e5c66793392db2ab25373586d1dd5?width=596",
    price: "624,00",
    currency: "€",
    priceColor: "text-wayzor-content-dark-medium",
    dailyPrice: "17,30 € / Day",
    passengers: "5 pax",
    doors: "5 Doors",
    transmission: "Manual",
    fuel: "Petrol",
    description: "* Seat Ibiza, Renault Clio IV or similar",
  },
  {
    id: 9,
    class: "CLASS: C",
    name: "Opel Corsa",
    similar: "or similar*",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/d928193809aec05e4d6481a3af344d23de95b5c2?width=596",
    price: "518,00",
    currency: "",
    priceColor: "text-wayzor-green",
    dailyPrice: "17,30 € / Day",
    passengers: "5 pax",
    doors: "5 Doors",
    transmission: "Manual",
    fuel: "Petrol",
    description: "* Seat Ibiza, Renault Clio IV or similar",
  },
  {
    id: 10,
    class: "CLASS: C & C2 - COMPACT",
    name: "Seat Ibiza",
    similar: "or similar*",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/4603c2aec944321120d2e1bfb881265d6ed31cc5?width=596",
    price: "260,00",
    currency: "",
    priceColor: "text-wayzor-green",
    dailyPrice: "17,30 € / Day",
    passengers: "5 pax",
    doors: "5 Doors",
    transmission: "Manual",
    fuel: "Petrol",
    description: "* Seat Ibiza, Renault Clio IV or similar",
  },
];

const Fleet = () => {
  return (
    <div className="min-h-screen bg-wayzor-bg-light-soft">
      {/* Header Section */}
      <div className="pt-24 lg:pt-32 pb-8 lg:pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-wayzor-content-dark-strong font-lato leading-tight mb-2">
              Which Car do you want to drive?
            </h1>
            <p className="text-lg lg:text-xl text-wayzor-content-dark-strong font-lato">
              Check out our fleet and find the perfect car for your adventure.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <FleetSearchFilters />
          </div>

          {/* Car Fleet Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {fleetData.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="pb-16"></div>
    </div>
  );
};

export default Fleet;
