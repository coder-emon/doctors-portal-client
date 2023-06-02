import React from 'react';
import heroImg from "../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    function dateIsValid(selectedDate) {
        return !Number.isNaN(new Date(selectedDate).getTime());
      }
      console.log(selectedDate);
    return (
        <header className="bg-img bg-no-repeat  bg-cover">
            <div className='flex  flex-col-reverse md:flex-row lg:flex-row items-center justify-center container mx-auto py-10 lg:py-36 px-5'>
                <div className='lg:w-6/12 flex justify-center '>
                   {dateIsValid(selectedDate) &&
                    <DayPicker
                   mode='single'
                   selected={selectedDate}
                   onSelect={setSelectedDate}
                   style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    padding:"20px"
                   }}
                   ></DayPicker>}  
                </div>          
                <div className='lg:w-6/12 flex justify-center'>
                    <img src={heroImg} className='w-[80%]' alt="" />
                </div>          
            </div>
        </header>
    );
};

export default AppointmentBanner;