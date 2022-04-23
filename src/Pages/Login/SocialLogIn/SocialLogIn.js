import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div>

            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-3 text-info fw-bold'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>

            {/* ------ google button -------- */}
            <div>
                <button className='btn btn-primary d-block w-50 mx-auto mt-2'>
                    <img className='' src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogIn;