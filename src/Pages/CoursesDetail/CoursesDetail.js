import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import { AppContext } from '../../Context/AppContext'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logoImg from '../../Images/whatsapp.png'
import './CoursesDetail.css'

const CoursesDetail = () => {
    const context = useContext(AppContext);
    const [currentCourse, setCurrentCourse] = useState({});
    const { id } = useParams();
    console.log(context.courses)

  useEffect(() => {
    const foundCourse = context.courses.find(course => course.id == id);
    setCurrentCourse(foundCourse);
  }, []);
  console.log(currentCourse);
    
    return (
        <>
        <Container fluid className='p-0 main-page'>
        <div className='bg-insdetail' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
          <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
          <Card className='course-card-detail' style={{ maxWidth: '70rem' }} >
            <Row className='g-0'>
              <Col md={7}>
                <Card.Body className='card-detail-right'>
                  <div className='card-detail-title'>
                    <Card.Title className='m-0 fs-3'>{currentCourse.name} Course</Card.Title>
                    <Card.Text>{currentCourse.why_this_course}</Card.Text>
                  </div>
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

export default CoursesDetail