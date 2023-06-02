import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOptions, setApppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setApppointmentOptions(data))
    },[])
    return (
        <section className='py-16 px-5 lg:px-0'>
            <p className='text-center text-secondary'>You have selected date: {format(selectedDate, "PP")}</p>
            <div className='grid justify-items-center  gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-5'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption key={appointmentOption._id} appointmentOption={appointmentOption} setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
        
                {treatment &&
                    <BookingModal treatment={treatment} setTreatment={setTreatment} selectedDate={selectedDate}></BookingModal>
                }
        </section>
    );
};

export default AvailableAppointment;