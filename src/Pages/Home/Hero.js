import React from "react";
import chair from '../../Assets/assets/images/chair.png'
import CommonButton from "../../Components/CommonButton";
import backgroundImage from '../../Assets/assets/images/bg.png'


const Hero = () => {
  return (
    <div 
    style={
      {background: `url(${backgroundImage})`,
      backgroundSize: 'cover'
    }
    } className={`hero py-40`}>
      <div className="hero-content flex flex-col md:flex-row-reverse">
        <img
          src={chair}
          className="md:w-1/2 rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <CommonButton>Get Started</CommonButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
