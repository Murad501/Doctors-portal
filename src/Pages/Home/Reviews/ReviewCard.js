import React from "react";

const ReviewCard = ({ review }) => {
  const { name, address, image, text } = review;
  return (
    <div className="card p-10 shadow-xl">
      <p>{text}</p>
      <div className="flex items-center gap-3 mt-10">
        <img className="w-16" src={image} alt="" />
        <div>
          <h1 className="font-semibold text-xl">{name}</h1>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
