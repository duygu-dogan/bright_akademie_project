import React from 'react'
import { Container } from 'react-bootstrap'
import logoImg from '../../Images/whatsapp.png'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Footer from '../../Components/Footer/Footer'
import InstructorCard from '../../Components/InstructorCard/InstructorCard'

const Instructors = () => {
  return (
    <>
      <Container fluid className='p-0 main-page'>
        <div className='bg-img2' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
          <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
            <div>
              <InstructorCard></InstructorCard>
            </div>
          <Footer></Footer>
        </div>
      </Container>
    </>
  )
}

export default Instructors