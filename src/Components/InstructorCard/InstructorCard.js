import React, { useContext } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import './InstructorCard.css'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'

const InstructorCard = ({instructor}) => {
const context = useContext(AppContext);
  return (
    <>
      <Col className='inscards' lg={4} md={6} sm={12}>
          <Card className='inscard' style={{ width: '18rem' }}>
              <Card.Img className='inscard-img' variant="top" src={instructor.profile_picture} />
              <Card.Body className='inscard-body'>
                  <Card.Title className='inscard-title'>{instructor.first_name + ' ' + instructor.last_name}</Card.Title>
                  <Card.Text className='inscard-text'>
                      {instructor.fields_of_work}
                  </Card.Text>
                  <NavLink onClick={()=> context.getIns()} to={`/${instructor.first_name+'-'+instructor.last_name}`} className='inscard-btn' variant="primary">See Details</NavLink>
              </Card.Body>
          </Card>
      </Col>
    </>
  )
}

export default InstructorCard