import React from 'react'
import { Container, Navbar, Nav, NavLink, NavbarBrand } from 'react-bootstrap'
import logo from './HeaderLogo.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css"


function Header() {

    return (
        <>
            {['lg'].map((expand) => (
                <Navbar sticky='top' key={expand} expand={expand} bg='dark' variant='dark' className='p-1'>
                    <Container fluid className='mx-5'>
                        <NavbarBrand>
                            <NavLink to="/">
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
                            <Offcanvas.Body className='pt-0'>
                                <Nav className='justify-content-end flex-grow-1 pe-3'>
                                    <NavLink className={(isActive) => (isActive ? "active" : '')} to="/">Homepage</NavLink>
                                    <NavLink className={(isActive) => (isActive ? "active" : '')} to='/about-us'>About Us</NavLink>
                                    <NavLink className={(isActive) => (isActive ? "active" : '')} to='/courses'>Courses</NavLink>
                                    <NavLink className={(isActive) => (isActive ? "active" : '')} to='/instructors'>
                                        Instructors
                                    </NavLink>
                                    <NavLink className={(isActive) => (isActive ? "active" : '')} to='/contact'>
                                        Contact
                                    </NavLink>
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