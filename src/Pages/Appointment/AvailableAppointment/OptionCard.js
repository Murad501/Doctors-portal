import React from "react";


const OptionCard = ({option, setModalDetails}) => {
    const {name, slots} = option
  return (
    <div className="card border rounded mx-1">
      <div className="card-body text-center">
        <h2 className="text-secondary font-semibold text-xl">{name}</h2>
        <p>{slots.length > 0 ?
         slots[0]
         : 
         'Try Another day'}
         </p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
        <div className="card-actions justify-center">
            <label 
            disabled={slots.length === 0}  
            onClick={()=>setModalDetails(option)} 
            htmlFor="appointment-modal" 
            className="btn btn-primary text-white">
                Book Appointment
            </label>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
