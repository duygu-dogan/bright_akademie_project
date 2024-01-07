import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import Footer from '../../Components/Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logoImg from '../../Images/whatsapp.png'
import { AppContext } from '../../Context/AppContext'
import { useParams } from 'react-router-dom'

const InstructorDetail = () => {
    const context = useContext(AppContext);
    const { id } = useParams();
    const currentIns = context.instructor.find(ins => ins.id === String(id));
   
  return (
      <>
          <Container fluid className='p-0 main-page'>
          <div className='bg-ins' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
          <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
          <Card style={{ width: '38rem' }}>
            <Col>
      <Card.Img variant="top" src={currentIns.profile_picture} />
      </Col>
      <Col>
      <Card.Body>
        <Card.Title>{currentIns.first_name + ' ' + currentIns.last_name}</Card.Title>
        <Card.Text>
          Other Infos
        </Card.Text>
      </Card.Body>
      </Col>
    </Card>
          <Footer />
        </div>
              
          </Container>
      </>
  )
}

export default InstructorDetail