import React from 'react';
import Nav from '../Components/Nav/Nav';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;