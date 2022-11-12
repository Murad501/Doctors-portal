import React from "react";

const ServiceCard = ({ service }) => {
  const { icon, title, text } = service;
  return (
    <div className="card shadow-xl p-10">
      <figure>
        <img src={icon} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
