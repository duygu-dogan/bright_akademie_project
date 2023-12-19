import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, NavbarBrand, Offcanvas } from 'react-bootstrap';
import logo from '../../Images/HeaderLogo.png';
import "./Header.css"
import { NavLink } from 'react-router-dom';

//offcanvas'ta linke tıklandığında kendisinin kapanması gerekli.

function Header() {
    const[scroll, setScroll] = useState(false);
    const changeNavbarColor = () => {
        if(window.scrollY >= 90){
            setScroll(true)
        }else{
            setScroll(false)
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            {['lg'].map((expand) => (
                <Navbar fixed='top' key={expand} expand={expand} data-bs-theme="dark" className={scroll ? 'navbar-scrolled' : ''} id='navbar'>
                    <Container fluid className='mx-5'>
                        <NavbarBrand>
                            <NavLink className='nav-link' to="/">
                                <img className='logo' src={logo} />
                            </NavLink>
                        </NavbarBrand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className="offcanvas">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                                    <img className='logo' src={logo} />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body variant='dark' className='pt-0'>
                                <Nav className='justify-content-end flex-grow-1 pe-3'>
                                    <NavLink className='nav-link' to="/" aria-current="page">Home</NavLink>
                                    <NavLink className='nav-link' to='/about-us'>About Us</NavLink>
                                    <NavLink className='nav-link' to='/courses'>Courses</NavLink>
                                    <NavLink className='nav-link' to='/instructors'>Instructors</NavLink>
                                    <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar >
            ))}
        </>
    )
}

export default Header