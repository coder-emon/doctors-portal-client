import React, { useState } from 'react';
import AppointmentBanner from '../../Components/AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../../Components/AvailableAppointment/AvailableAppointment';

const AppointmentPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    
    return (
        <div>
            <AppointmentBanner 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate} 
            ></AppointmentBanner>
            <AvailableAppointment
            selectedDate={selectedDate} 
            ></AvailableAppointment>
        </div>
    );
};

export default AppointmentPage;