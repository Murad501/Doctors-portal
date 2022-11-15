import React from "react";
import doctor from "../../../Assets/assets/images/doctor.png";
import appointment from "../../../Assets/assets/images/appointment.png";
import CommonButton from "../../../Components/CommonButton";

const Appointment = () => {
  return (
    <div
      style={{ background: `url(${appointment})`, backgroundSize: "cover" }}
      className="hero"
    >
      <div className="hero-content p-0 flex-col lg:flex-row">
        <img src={doctor} className="hidden lg:block w-1/2 -mt-40" alt="" />
        <div className="p-10">
          <h4 className="text-xl font-bold text-secondary my-3">Appointment</h4>
          <h1 className="text-2xl lg:text-4xl font-bold text-white">
            Make an appointment Today
          </h1>
          <p className="py-6 text-white">
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

export default Appointment;
