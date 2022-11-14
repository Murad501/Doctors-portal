import { format } from "date-fns";
import React from "react";

const Modal = ({modalDetails, selectedDate, setModalDetails}) => {
    const date = format(selectedDate, 'PP')
    const {name, slots} = modalDetails


    const handleAppointment = (event) => {
        event.preventDefault()

        const form = event.target;
        const date = form.date.value;
        const time = form.time.value;
        const customerName = form.name.value;
        const email = form.email.value;
        const number = form.number.value;

        const appointmentDetails = {
            treatmentName: name,
            date,
            time,
            customerName,
            email,
            number
        }

        console.log(appointmentDetails)
        setModalDetails(null)
    }

  return (
    <>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {name}
          </h3>
          <form onSubmit={handleAppointment} className="my-5">
            <input 
            name="date" 
            type="text" 
            value={date} 
            readOnly
            className=" focus:outline-none input input-bordered w-full bg-gray-200 my-2"
            />
            <select 
            name="time" 
            type="text" 
            className=" focus:outline-none input input-bordered w-full bg-gray-200 my-2"
            >
            {
                slots.map((slot, idx) => <option key={idx}>{slot}</option>)
            }
            </select>
            <input 
            name="name" 
            type="text" 
            placeholder="Full Name"
            className=" focus:outline-none input input-bordered w-full my-2"
            />
            <input 
            name="email" 
            type="email" 
            placeholder="Email"
            className=" focus:outline-none input input-bordered w-full my-2"
            />
            <input 
            name="number" 
            type="text" 
            placeholder="Number"
            className=" focus:outline-none input input-bordered w-full my-2"
            />
            <button type="submit" className="btn w-full mt-4">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
