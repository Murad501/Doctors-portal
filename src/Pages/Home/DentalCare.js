import React from "react";
import treatment from "../../Assets/assets/images/treatment.png";
import CommonButton from "../../Components/CommonButton";

const DentalCare = () => {
  return (
    <div className="hero py-40 lg:mb-28">
      <div className="flex flex-col lg:flex-row items-center lg:gap-20">
        <div className="lg:w-1/2">
          <img src={treatment} className="max-w-lg lg:w-4/5 mx-auto rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="lg:w-1/2 max-w-2xl mx-auto mt-10">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <CommonButton>Get Started</CommonButton>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
