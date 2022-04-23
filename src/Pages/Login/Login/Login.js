import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    // get the value of email and password using Ref
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // event handler for form submission
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            {/* --------- Toggle area ------------ */}
            <p className='text-decoration-none pe-auto d-block my-3'>New To SPHOTOGRAPHY? <Link to='/register'>Please Register</Link></p>
        </div>
    );
};

export default Login;