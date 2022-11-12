import React from "react";
import cavity from "../../../Assets/assets/images/cavity.png";
import fluoride from "../../../Assets/assets/images/fluoride.png";
import whitening from "../../../Assets/assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const ServiceContainer = () => {
  const services = [
    {
      id: 1,
      icon: fluoride,
      title: "Fluoride Treatment",
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      icon: cavity,
      title: "Cavity Filling",
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      icon: whitening,
      title: "Teeth Whitening",
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];

  return (
    <div className="mt-32">
      <div className="text-center">
        <h4 className="text-xl font-bold text-secondary">Our Services</h4>
        <h1 className="text-3xl my-2">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceContainer;
