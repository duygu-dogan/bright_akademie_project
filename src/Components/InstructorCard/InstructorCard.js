import React, { useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import './InstructorCard.css'
import { Navigate } from 'react-router-dom'

const InstructorCard = ({ instructor }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleSeeDetailsClick = () => {
    setIsClicked(true);
  }
  if (isClicked) {
    return <Navigate to={`/details/${instructor.id}`} />
  }
  return (
    <>
      <Col className='inscards' xl={4} md={6} sm={12}>
        <Card className='inscard' style={{ width: '18rem' }}>
          <Card.Img className='inscard-img' variant="top" src={instructor?.profile_picture} />
          <Card.Body className='inscard-body'>
            <Card.Title className='inscard-title'>{instructor?.first_name + ' ' + instructor?.last_name}</Card.Title>
            <Card.Text className='inscard-text'>
              {instructor?.fields_of_work}
            </Card.Text>
            <Button onClick={handleSeeDetailsClick} className='inscard-btn' variant="primary">See Details</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default InstructorCard