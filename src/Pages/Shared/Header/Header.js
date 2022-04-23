import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">SPHOTOGRAPHY</Navbar.Brand>
                <Nav className="justify-content-around">
                    <Nav.Link className='nav-item' as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link className='nav-item' as={Link} to="/login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;