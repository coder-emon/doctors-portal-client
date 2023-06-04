import React, { useContext } from 'react';
import { AuthContext } from '../Context/Auth.Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading) return <h2 className='text-5xl'>Loading...</h2>
    if(user.uid)return children
    return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default PrivateRoute;