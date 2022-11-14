import React, { useState } from 'react';
import AppointmentHero from '../AppintmentHero/AppointmentHero';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {

    const [selected, setSelected] = useState(new Date());

    return (
        <div>
            <AppointmentHero setSelected={setSelected} selected={selected}></AppointmentHero>
            <AvailableAppointment selected={selected}></AvailableAppointment>
        </div>
    );
};

export default Appointment;