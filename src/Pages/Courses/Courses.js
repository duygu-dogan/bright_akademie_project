import React from 'react'
import { Container, Card, Col, Row, CardImg, Button, Image } from 'react-bootstrap'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import logoImg from '../../Images/whatsapp.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Footer from '../../Components/Footer/Footer'
import './Courses.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faDatabase, faLaptopCode, faShieldHalved } from '@fortawesome/free-solid-svg-icons'

const Courses = () => {
  return (
    <>
      <Container fluid className='p-0 main-page'>
        
        <div className='bg-img2' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
          <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
          <Row xs={1} lg={3} className="g-5 mx-5 mb-4">
              <Col>
                <Card>
                <div className='course-logos'><FontAwesomeIcon icon={faLaptopCode}/></div>
                  <Card.Body>
                  <Card.Title>Full Stack Programming Training</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  <Button>More Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            <Col>
              <Card>
                <div className='course-logos'><FontAwesomeIcon icon={faCloudArrowUp} /></div>
                <Card.Body>
                  <Card.Title>Network, System and Cyber Security Expertise Training</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button>More Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className='course-logos'><FontAwesomeIcon icon={faShieldHalved}/></div>
                <Card.Body>
                  <Card.Title>Cloud Computing Systems Training</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button>More Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        <Footer></Footer>  
        </div>
      </Container>
    </>
  )
}

export default Courses