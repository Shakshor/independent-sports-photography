import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const Login = () => {
    // get the value of email and password using Ref
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();


    // react firebase hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // confirming log in
    if (user) {
        navigate('/home');
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

            {/* --------- Toggle area ------------ */}
            <p >New To SPHOTOGRAPHY? <Link to='/register' className=' pe-auto my-3 text-decoration-none fs-6 fw-bold text-danger'>Please Register</Link></p>

            {/* ------- Social Log In---------- */}
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Login;