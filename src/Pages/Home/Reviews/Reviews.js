import React from "react";
import quote from "../../../Assets/assets/icons/quote.svg";
import people1 from '../../../Assets/assets/images/people1.png'
import people2 from '../../../Assets/assets/images/people2.png'
import people3 from '../../../Assets/assets/images/people3.png'
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = [
    {
        id: 1,
        name: 'Winson Herry',
        address: 'California',
        image: people1,
        text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
    {
        id: 2,
        name: 'Winson Herry',
        address: 'California',
        image: people2,
        text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
    {
        id: 3,
        name: 'Winson Herry',
        address: 'California',
        image: people3,
        text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center my-16 lg:my-28">
        <div>
          <h4 className="text-xl font-bold text-secondary">Our Services</h4>
          <h1 className="text-3xl my-2">Services We Provide</h1>
        </div>
        <img className="w-24 lg:w-48" src={quote} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
            reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
        }
        </div>
    </div>
  );
};

export default Reviews;
