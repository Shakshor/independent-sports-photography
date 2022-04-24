import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    // react firebase hooks
    const [user, loading, error] = useAuthState(auth);

    const location = useLocation();

    // Loading Problem solving
    if (loading) {
        return <Loading></Loading>;
    }

    // checking whether  user is logged in or not
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }


    return children;
};

export default RequireAuth;