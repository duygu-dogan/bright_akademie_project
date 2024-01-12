import React, { useContext, useState } from 'react'
import { Container, Card, Col, Row, Button } from 'react-bootstrap'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import logoImg from '../../Images/whatsapp.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Footer from '../../Components/Footer/Footer'
import './Courses.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faLaptopCode, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../../Context/AppContext'
import { Navigate } from 'react-router-dom'
import CourseCard from '../../Components/CourseCard/CourseCard'

const Courses = () => {
  const context = useContext(AppContext);

  return (
    <>
      <Container fluid className='p-0'>

        <div className='bg-img2' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
          <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
          <Row>
            <Col>
              {context.courses.map(courses => <CourseCard key={courses.id} courses={courses} />)}
            </Col>
          </Row>
          <Footer></Footer>
        </div>
      </Container >
    </>
  )
}

export default Courses