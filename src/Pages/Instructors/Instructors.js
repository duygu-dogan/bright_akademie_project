import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logoImg from '../../Images/whatsapp.png'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Footer from '../../Components/Footer/Footer'
import InstructorCard from '../../Components/InstructorCard/InstructorCard'
import { AppContext } from '../../Context/AppContext'
import './Instructors.css'

const Instructors = () => {
  const context = useContext(AppContext);
  return (
    <>
      <Container fluid className='p-0 main-page'>
        <div className='bg-ins' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
          <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
            <Col>
              <Row className='m-3 ins-row'>
                {context.instructor.map(instructor => <InstructorCard key={instructor.id} instructor={instructor} />)}
              </Row>
            </Col>
          <Footer />
        </div>
      </Container>
    </>
  )
}

export default Instructors