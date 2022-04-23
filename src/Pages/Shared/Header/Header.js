import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    // react firebase hooks
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">SPHOTOGRAPHY</Navbar.Brand>
                <Nav className="justify-content-around">
                    <Nav.Link className='nav-item' as={Link} to='/'>Home</Nav.Link>
                    {user ?
                        <button onClick={handleSignOut} className='btn btn-dark text-white text-decoration-none mt-1' >Sign Out</button>
                        :
                        <Nav.Link className='nav-item' as={Link} to="/login">Login</Nav.Link>}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;