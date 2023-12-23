import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../../Images/HeaderLogo.png'
import BgTechno from '../../Images/BgTechno.jpg'

const Instructors = () => {
  return (
    <>
      <Container fluid className='p-0 main-page'>
        <div className='bg-img' style={{ backgroundImage: `url(${BgTechno})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
        </div>
      </Container>
    </>
  )
}

export default Instructors