import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    // react firebase hooks
    const [user, loading, error] = useAuthState(auth);

    const location = useLocation();

    // checking whether  user is logged in or not
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }


    return children;
};

export default RequireAuth;