import React from "react";
import backgroundImage from '../../../Assets/assets/images/appointment.png'
import CommonButton from "../../../Components/CommonButton";

const Contact = () => {
  return (
    <div style={
        {background: `url(${backgroundImage})`,
        backgroundSize: 'cover'
      }
      } className="my-40 p-20">
      <div className="text-center mb-10">
        <h4 className="text-xl font-bold text-secondary my-3">Contact us</h4>
        <h1 className="text-2xl lg:text-4xl font-bold text-white">
          Stay connected with us
        </h1>
      </div>
      <div>
        <form className="max-w-xl mx-auto">
          <div className="form-control my-3">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-3">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-3">
            <textarea
              name="message"
              className="textarea textarea-bordered"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="form-control mt-10 w-28 mx-auto">
            <CommonButton>Submit</CommonButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
