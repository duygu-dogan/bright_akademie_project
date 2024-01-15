import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import { AppContext } from '../../Context/AppContext'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logoImg from '../../Images/whatsapp.png'
import whyImg from '../../Images/why_this_course.png'
import forWhoImg from '../../Images/for_who.png'
import education from '../../Images/education.png'
import './CoursesDetail.css'
import CourseContents from '../../Components/CourseContents/CourseContents'
import { v4 as uuidv4 } from 'uuid';

const CoursesDetail = () => {
  const context = useContext(AppContext);
  const [currentCourse, setCurrentCourse] = useState({});
  const [contentArr, setContentArr] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const foundCourse = context.courses.find(course => course.id == id);
    setCurrentCourse(foundCourse);
  }, [context.courses, id]);

  useEffect(() => {
    if (currentCourse && currentCourse.educational_content && currentCourse.educational_content.weeks) {
      const weeksArray = currentCourse.educational_content.weeks;
      setContentArr(weeksArray);
    }
  }, [currentCourse]);

  return (
    <>
      <Container fluid className='p-0 main-course-details'>
        <div className='bg-coursedetail' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
          <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
          <Card className='course-card-detail' style={{ maxWidth: '75rem' }} >
            <Row className='g-0'>
              <Col md={12}>
                <Card.Body>
                  <div className='card-detail-title m-0'>
                    <Card.Title style={{color:"#E26EE5"}} className='mb-3 fs-3'>{currentCourse?.name} Course</Card.Title>
                  </div>
                  <div className='row mb-3'>
                    <div className='col-md-5 course-detail-body'>
                    <Card.Title className='fs-5 mb-4 detail-title'>Why should you choose this course?</Card.Title>
                    <Card.Text className='detail-text'>{currentCourse?.why_this_training}</Card.Text>
                    </div>
                    <div className='col-md-5 why-img'>
                      <img style={{width: "400px", height:"400px"}} src={whyImg} alt=''></img>
                    </div>
                  </div>
                  <div className='row mb-5'>
                    <div className='col-md-5 d-flex course-detail-img'>
                      <img className='for-who' src={forWhoImg} alt=''></img>
                    </div>
                    <div className='col-md-5 course-detail-body'>
                    <Card.Title className='fs-5 mb-4 detail-title'>Who is this course for?</Card.Title>
                    <Card.Text className='detail-text'>{currentCourse?.who_is_this_for}</Card.Text>
                    </div>
                  </div>
                  <div className='row mb-5'>
                    <div className='col-md-5 course-detail-body'>
                    <Card.Title className='fs-5 mb-4 detail-title'>Educational Requirements</Card.Title>
                    <Card.Text className='detail-text'>{currentCourse?.educational_conditions}</Card.Text>
                    </div>
                    <div className='col-md-5 course-detail-img'>
                      <img style={{width: "300px", height:"250px"}} src={education} alt=''></img>
                    </div>
                  </div>
                  <div>
                    <Card.Title className='fs-5 detail-title mb-5'>Course Content</Card.Title>
                    <div className='row'>
                      {contentArr.map(week => <CourseContents key={uuidv4()} week={week}/>)}
                    </div>
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