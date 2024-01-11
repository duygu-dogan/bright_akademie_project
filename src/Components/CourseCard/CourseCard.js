import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CourseCard.css'
import { Navigate } from 'react-router-dom';

const CourseCard = ({ courses }) => {
  const context = useContext(AppContext);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const handleDetailClick = () => {
    setIsBtnClicked(true);
  }
  if (isBtnClicked) {
    return <Navigate to={`course-details/${courses.id}`}/>
  }
  return (
    <>
      <Row xs={1} lg={3} className="g-5 mx-3 mb-4 course-row">
        <Col className='course-col'>
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
      </Row>
    </>
  )
}

export default CourseCard