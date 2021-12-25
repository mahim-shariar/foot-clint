import { Button, Typography } from '@mui/material';
import React from 'react';
import { Nav, Navbar, Offcanvas, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Headers.css'

const Header = () => {
    let { logOut, user } = useFirebase();
    return (
        <Navbar className='footer-color' expand={false}>
            <Container fluid>
                <NavLink className='text-light nav-link ' to="/">
                    <Typography variant='h6' >
                        Foot Store
                    </Typography>
                </NavLink>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavLink className='nav-link' to="/home">
                                <Button sx={{ width: '100%', fontWeight: 600 }} variant='text' > Home </Button>
                            </NavLink>
                            <NavLink className='nav-link' to="/Login">
                                <Button sx={{ width: '100%', fontWeight: 600 }} variant='text' > LOGIN </Button>
                            </NavLink>
                        </Nav>
                        {user.email && <Button sx={{ width: '100%', fontWeight: 600 ,  }} onClick={logOut} variant='text' > LOG OUT </Button>}
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Header;