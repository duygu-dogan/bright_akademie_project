import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import logoImg from '../../Images/HeaderLogo-img.png'
import './Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faBuilding, faExclamation, faLaptopCode, faPeopleGroup, faUserTie, faUsersRectangle } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../Components/Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import {Carousel} from '3d-react-carousal';
import { AppContext } from '../../Context/AppContext'
import CourseCarousel from '../../Components/CourseCarousel/CourseCarousel'

//Küçük ekranda aşağı taşma sorunu var
const Homepage = () => {
  const context = useContext(AppContext);

  let slides = context.courses?.map(course =>
      <CourseCarousel 
      key = {course.id}
        id={course?.id}
        name={course?.name}
        why_this_training={course?.why_this_training}
        icon={course?.icon}      
      />)

  return (
    <>
      <Container fluid className='p-0'>
        <div className='main-page-bg' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: 'center', backgroundPositionX: 'center' }}>
          <h1 className='main-title'>Code the technologies of the future with <span style={{ color: "#f43dd9" }}>Bright <FontAwesomeIcon icon={faExclamation}/> </span></h1>
          <h3 className='sub-title'>Get your university-approved certificate and become a leading IT scientist!</h3>
          <Button className='btn'>Apply now!</Button>
          <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
        </div>

        <Carousel style={{backgroundColor: "#1d1f22"}} slides={slides} autoplay={true} interval={4000}/>

        <div className='bg-img' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
          <h1 className='main-title2'>So what does <span style={{ color: "#f43dd9" }}>Bright</span> promise you?</h1>
          <p className='sub-title2'>It is a career program run by Turing University that trains software and system experts who will make a difference with its highly experienced instructors. <span style={{ color: "#f43dd9", fontSize: '18px', textDecoration: 'underline' }}>Bright</span> training continues with up-to-date and cutting-edge training content prepared taking into account industry needs! Candidates who complete their education are placed in jobs in the IT sector.</p>
          <Row className='row-container w-75'>
            <Col className='main-item' lg={4} sm={6} xs={12}>
              <p className='main-item-bg'><FontAwesomeIcon className='icons' icon={faLaptopCode} /></p>
              <p className='main-item-text'>Innovative Education Approach</p>
            </Col>
            <Col className='main-item' lg={4} sm={6} xs={12}>
              <p className='main-item-bg'><FontAwesomeIcon className='icons' icon={faPeopleGroup} /></p>
              <p className='main-item-text'>Group Projects</p>
            </Col>
            <Col className='main-item' lg={4} sm={6} xs={12}>
              <p className='main-item-bg'><FontAwesomeIcon className='icons' icon={faBuilding} /></p>
              <p className='main-item-text'>Internship Opportunity</p>
            </Col>
            <Col className='main-item' lg={4} sm={6} xs={12}>
              <p className='main-item-bg'><FontAwesomeIcon className='icons' icon={faBriefcase} /></p>
              <p className='main-item-text'>Job Placement Support</p>

            </Col>
            <Col className='main-item' lg={4} sm={6} xs={12}>
              <p className='main-item-bg'><FontAwesomeIcon className='icons' icon={faUserTie} /></p>
              <p className='main-item-text'>Expert staff</p>
            </Col>
            <Col className='main-item' lg={4} sm={6} xs={12}>
              <p className='main-item-bg'><FontAwesomeIcon className='icons' icon={faUsersRectangle} /></p>
              <p className='main-item-text'>Interview Simulation</p>
            </Col>
          </Row>
          <Footer></Footer>
        </div>
      </Container>

    </>
  )
}

export default Homepage