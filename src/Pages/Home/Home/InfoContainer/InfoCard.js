import React from "react";

const InfoCard = ({item}) => {
    const {title, text, background, icon} = item
  return (
    <div className={`card max-w-md md:max-w-full p-10 md:p-0 shadow-xl flex-row md:flex-col text-white ${background}`}>
      <figure className="md:px-10 md:pt-10">
        <img
          src={icon}
          alt="Icon"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body md:items-center md:text-center">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
