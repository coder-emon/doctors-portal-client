import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-footer pt-12 bg-contain'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3'>
                <ul className='text-ancent font-normal flex flex-col gap-2'>
                    <li>
                        <Link className='font-bold text-gray text-xl'>Services</Link>
                    </li>
                    <li>
                        <Link>Emergency Checkup</Link>
                    </li>
                    <li>
                        <Link>Monthly Checkup</Link>
                    </li>
                    <li>
                        <Link>Weekly Checkup</Link>
                    </li>
                    <li>
                        <Link>Deep Checkup</Link>
                    </li>
                </ul>
                <ul className='text-ancent font-normal flex flex-col gap-2'>
                    <li>
                        <Link className='font-bold text-gray text-xl'>Oral Health</Link>
                    </li>
                    <li>
                        <Link>Fluoride Treatment</Link>
                    </li>
                    <li>
                        <Link>Cavity Filling</Link>
                    </li>
                    <li>
                        <Link>Teath Whitening</Link>
                    </li>
                </ul>
                <ul className='text-ancent font-normal flex flex-col gap-2'>
                    <li>
                        <Link className='font-bold text-gray text-xl'>Our Address</Link>
                    </li>
                    <li>
                        <Link>New York - 101010 Hudson</Link>
                    </li>
                </ul>
            </div>
            <p className='text-center mb-5 text-sm font-normal'>Copyright 2022 All Rights Reserved</p>
        </div>
    );
};

export default Footer;