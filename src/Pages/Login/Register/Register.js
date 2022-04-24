import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    // firebase hooks
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);


    if (user) {
        navigate('/home');
    }

    // event handler for  submit register
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // creating user for first time
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h2>Please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Enter your name' />
                <input type="email" name="email" id="" placeholder='Enter your email' required />
                <input type="password" name="password" id="" placeholder='Enter your password' required />

                {/* ---- checkbox ------ */}
                <input onClick={() => setAgree(!agree)} type="checkbox" name="check" id="" />
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="check">Accept <strong>SPHOTOGRAPHY</strong> terms and Conditions</label>

                <input disabled={!agree} className='btn btn-primary w-50 mx-auto text-decoration-none my-3' type="submit" value="Register" />


            </form>

            {/* ---- toggle ----- */}
            <p>Already Have an account? <Link to='/login' className='text-success text-decoration-none pe-auto fs-6 fw-bold'><span>Login</span></Link></p>

            {/* ---- social log in ----- */}
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Register;