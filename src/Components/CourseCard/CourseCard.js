import React, { useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CourseCard.css'
import { Navigate } from 'react-router-dom';

const CourseCard = ({ courses }) => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const handleDetailClick = () => {
    setIsBtnClicked(true);
  }
  if (isBtnClicked) {
    return <Navigate to={`details/${courses.id}`} />
  }
  return (
    <>
      <Col xl={4} md={6} sm={12} className='course-col g-5 mx-3 mb-4'>
        <Card className='card'>
          <div className='course-logos'><FontAwesomeIcon icon={courses.icon} /></div>
          <Card.Body>
            <Card.Title>{courses.name} Course</Card.Title>
            <Card.Text>
              {courses.abstract}
            </Card.Text>
            <Button onClick={handleDetailClick}>More Details</Button>
          </Card.Body>
        </Card>
      </Col>

    </>
  )
}

export default CourseCard