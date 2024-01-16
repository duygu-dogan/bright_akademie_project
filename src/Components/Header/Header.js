import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, NavbarBrand, Offcanvas, Image, NavDropdown } from 'react-bootstrap';
import logo from '../../Images/HeaderLogo.png';
import "./Header.css"
import { NavLink } from 'react-router-dom';

//offcanvas'ta linke tıklandığında kendisinin kapanması gerekli.

function Header() {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const toggleMenu = () => {
        if (windowWidth <= 992) {
            setMenuOpen(!menuOpen);
        }
    };

    const handleClose = () => setMenuOpen(false)
    const changeNavbarColor = () => {
        if (window.scrollY >= 90) {
            setScroll(true)
        } else {
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
                                <Image className='logo' src={logo} />
                            </NavLink>
                        </NavbarBrand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={toggleMenu} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            restoreFocus={false}
                            show={menuOpen}
                            onHide={handleClose}
                            className="offcanvas">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                                    <Image className='logo' src={logo} />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='pt-0'>
                                <Nav className='justify-content-end flex-grow-1 pe-3'>
                                    <NavLink onClick={toggleMenu} className='nav-link' to="/" aria-current="page">Home</NavLink>
                                    <NavLink onClick={toggleMenu} className='nav-link' to='/about-us'>About Us</NavLink>
                                    <NavDropdown title="Courses" id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={toggleMenu} href="/courses">All Courses</NavDropdown.Item>
                                        <NavDropdown.Item onClick={toggleMenu} href="/courses/details/1">Full Stack Programming</NavDropdown.Item>
                                        <NavDropdown.Item onClick={toggleMenu} href="/courses/details/2">
                                            Network, System, and Cyber Security
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={toggleMenu} href="/courses/details/3">Cloud Computing System</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavLink onClick={toggleMenu} className='nav-link' to='/instructors'>Instructors</NavLink>
                                    <NavLink onClick={toggleMenu} className='nav-link' to='/contact'>Contact</NavLink>
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