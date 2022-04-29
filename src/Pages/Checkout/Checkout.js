import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    // for dynamic url 
    const { serviceId } = useParams();

    const emailRef = useRef('');
    const nameRef = useRef('');
    const addressRef = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const address = nameRef.current.value;
        // console.log(email, address, name);
        if (email && name && address) {
            toast('thank you for the booking');
        }
    }

    return (
        <div className='mx-auto w-50 my-5'>
            <h2 className='text-center text-primary my-3'>Please Fill the form</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control ref={addressRef} type="text" placeholder="Enter your address" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto mb-3 d-block" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;