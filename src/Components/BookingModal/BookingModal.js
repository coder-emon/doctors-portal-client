import { format } from 'date-fns';
import React from 'react';
import MyBtn from '../MyBtn/MyBtn';

const BookingModal = ({treatment, selectedDate, setTreatment}) => {
    const {name, slots} = treatment
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const patientName = form.name.value;
        const number = form.number.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const appointmentDate = format(selectedDate, "PP")
        const bookingDate = format(new Date(), "PP")
        const appointmentInfo = {
            serviceName : name,
            patientName,
            number,
            email,
            slot,
            appointmentDate,
            bookingDate
        }
        console.log(appointmentInfo)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent">✕</label>
                    <h3 className="text-lg font-bold text-center">{name}</h3>
                    <form className='flex flex-col items-center justify-center gap-5 mt-3' onSubmit={handleSubmit}>
                        <input type="text" value={format(selectedDate, "PP")} className='bg-[#E6E6E6] rounded px-4 py-2 w-full lg:w-96 focus:ring-primary focus:ring-2 outline-none' />
                        <select className='bg-[#E6E6E6] rounded px-4 py-2 w-full lg:w-96 focus:ring-primary focus:ring-2 outline-none' name="slot">
                            {
                                slots.map((slot, i) => <option key={i} value={slot} >{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder='Full Name' className='bg-white focus:border-transparent border-gray border-2 rounded px-4 py-2 w-full lg:w-96 focus:ring-primary focus:ring-2 outline-none'name='name' />
                        <input type="text" placeholder='Phone Number' className='bg-white focus:border-transparent border-gray border-2 rounded px-4 py-2 w-full lg:w-96 focus:ring-primary focus:ring-2 outline-none' name='number' />
                        <input type="text" placeholder='Email' className='bg-white focus:border-transparent border-gray border-2 rounded px-4 py-2 w-full lg:w-96 focus:ring-primary focus:ring-2 outline-none' name='email'/>
                      <MyBtn>Submit</MyBtn>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;