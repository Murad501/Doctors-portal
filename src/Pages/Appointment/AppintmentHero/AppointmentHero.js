import chair from "../../../Assets/assets/images/chair.png";
import bg from "../../../Assets/assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import './AppointmentHero.css'

const AppointmentHero = ({setSelected, selected}) => {


  return (
    <div
      style={{ background: `url(${bg})` }}
      className={`hero py-40 bg-center`}
    >
      <div className="hero-content flex flex-col md:flex-row-reverse justify-center">
        <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div className="md:w-1/2">
          <div className="mx-auto">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(data)=>{
              if(data){
              setSelected(data)
              }
              }}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHero;
