import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import OptionCard from './OptionCard';

const AvailableAppointment = ({selected}) => {

    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [modalDetails, setModalDetails] = useState(null)

    useEffect(()=>{
        fetch('AppointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])

    return (
        <div className='my-20'>
            <p className='text-center text-secondary text-xl'>Available Appointment on {format(selected, 'PP')}.</p>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointmentOptions.map(option => 
                    <OptionCard 
                    key={option._id}
                    option={option}
                    setModalDetails={setModalDetails}
                     >
                    </OptionCard>)
                }
            </div>
            {
                modalDetails &&
                <Modal 
                modalDetails={modalDetails}
                setModalDetails={setModalDetails}
                selectedDate={selected}>
                </Modal>
            }
        </div>
    );
};

export default AvailableAppointment;