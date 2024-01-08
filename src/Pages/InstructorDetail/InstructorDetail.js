import React, { useContext } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import Footer from '../../Components/Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logoImg from '../../Images/whatsapp.png'
import { AppContext } from '../../Context/AppContext'
import { useParams } from 'react-router-dom'
import './InstructorDetail.css'

const InstructorDetail = () => {
  const context = useContext(AppContext);
  const { id } = useParams();
  const currentIns = context.instructor.find(ins => ins.id === String(id));

  return (
    <>
      <Container fluid className='p-0 main-page'>
        <div className='bg-insdetail' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
          <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} /> 
            <Card className='card-detail' style={{maxWidth:'60rem' }} >
                <Row className='g-0'>
                  <Col md={5} className='card-detail-left'> 
                  <Card.Img className='detail-img' src={currentIns.profile_picture} />
                  </Col>
                  <Col md={7}>
                <Card.Body className='card-detail-right'>
                <div className='card-detail-title'>
                <Card.Title className='m-0 fs-3'>{currentIns.first_name + ' ' + currentIns.last_name}</Card.Title>
                <Card.Text>{currentIns.fields_of_work}</Card.Text>
                </div>
                  <Card.Text>
                    <ul className='ins-props'>
                    <li>{currentIns.introduction}</li>
                    
                    <li>{currentIns.experience_background}</li>
                    <li>{currentIns.education}</li>
                    <li>{currentIns.email}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
                </Col>
                </Row>
            </Card>
          <Footer />
        </div>

      </Container>
    </>
  )
}

export default InstructorDetail