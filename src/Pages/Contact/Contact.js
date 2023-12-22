import React from 'react'
import { Container, Col, Button, Form, Row } from 'react-bootstrap'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import logoImg from '../../Images/whatsapp.png'
import Footer from '../../Components/Footer/Footer'
import './Contact.css'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Contact = () => {
    return (
        <>
            <Container fluid className='p-0 main-page'>
                <div className='bg-img2' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                    <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
                        <div className='contact-content'>
                            <div className='form'>
                                <h5 className='mb-4 text-center'>If you want to learn more, let us reach you!</h5>
                        <Form>
                                <Form.Group className='mb-3' controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className='mb-3' controlId="formGridPassword">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your full name" />
                                </Form.Group>
                            

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button className="mt-2" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1384877672613!2d29.001945484836156!3d41.04410049746198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a24975fe5d%3A0xa05d7aa13cfcaf89!2sBah%C3%A7e%C5%9Fehir%20%C3%9Cniversitesi%20Wissen%20Akademie!5e0!3m2!1str!2str!4v1703238766838!5m2!1str!2str" 
                        width="500"
                        style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                <Footer></Footer>
                </div>
            </Container>
        </>
    )
}

export default Contact