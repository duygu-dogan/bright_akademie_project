import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../../Images/HeaderLogo.png'
import BgTechno from '../../Images/BgTechno.jpg'

const Instructors = () => {
  return (
    <>
      <Container fluid className='p-0 main-page'>
        <div className='main-page-logo' style={{ backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundSize: '50rem', backgroundPositionY: 'center', backgroundPositionX: 'center' }}>
          <h1 className='main-title'></h1>
          <h3 className='sub-title'></h3>

        </div>

        <div className='bg-img' style={{ backgroundImage: `url(${BgTechno})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
        </div>
      </Container>
    </>
  )
}

export default Instructors