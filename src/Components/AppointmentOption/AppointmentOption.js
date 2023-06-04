import React from 'react';

const AppointmentOption = ({appointmentOption, setTreatment}) => {
    const {name, slots} = appointmentOption;
    return (
        <div className='round-md shadow p-5 w-full flex flex-col items-center justify-center gap-2'>
            <h3 className='text-2xl font-bold text-secondary'>{name}</h3>
            <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
            <p>{slots.length} {slots.length > 1 ? "spaces" :"space"} available</p>
            <label htmlFor="booking-modal"  onClick={() => setTreatment(appointmentOption)} className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded font-bold uppercase cursor-pointer">Book Appointment</label>
        </div>
    );
};

export default AppointmentOption;