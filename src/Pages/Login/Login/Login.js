import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const Login = () => {
    // get the value of email and password using Ref
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let errorElement;
    const from = location.state?.from?.pathname || '/';


    // react firebase hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );




    // confirming log in
    if (user) {
        navigate(from, { replace: true });
    }

    // error message
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }






    // event handler for submitting form 
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);

        // sign in option
        signInWithEmailAndPassword(email, password);
    }

    // event handler reset password
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('sent email');
    }



    return (
        <div className='mx-auto w-50 my-5' >
            <h2 className='text-center text-primary my-3'>Please Log In</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto mb-3 d-block" type="submit">
                    Login
                </Button>
            </Form>

            {/*--------- error showing ---------  */}
            {errorElement}

            {/* --------- Toggle area ------------ */}
            <p >New To SPHOTOGRAPHY? <Link to='/register' className=' pe-auto my-3 text-decoration-none fs-6 fw-bold text-danger'>Please Register</Link></p>

            {/* -------  */}
            <p>Forget Password?<button className='btn btn-link text-primary text-decoration-none pe-auto fw-bold' onClick={resetPassword} >Reset Password</button></p>

            {/* ------- Social Log In---------- */}
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Login;