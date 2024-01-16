import React, { useContext, useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import logoImg from '../../Images/whatsapp.png'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Footer from '../../Components/Footer/Footer'
import InstructorCard from '../../Components/InstructorCard/InstructorCard'
import './Instructors.css'
import { AppContext } from '../../Context/AppContext'
import LoadingOverlay from 'react-loading-overlay-nextgen'
import { InfinitySpin } from 'react-loader-spinner'

const Instructors = () => {
const context = useContext(AppContext)
const [isActive, setIsActive] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsActive(false), 1000)
    }, [])

    return (
        <>
            <LoadingOverlay
                active={isActive}
                styles={{
                    wrapper: {
                        width: '100%',
                        height: '100vh'
                    }
                }}
                spinner={<InfinitySpin
                    width='200'
                    color='#E26EE5'
                />}
            >
      <Container fluid className='p-0 main-page'>
        <div className='bg-ins' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
          <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
              <Row className='ins-row'>
                {context.instructorArr?.map((instructor) => 
                <InstructorCard key={instructor.id} instructor={instructor}/>)}
              </Row>
          <Footer />
        </div>
      </Container>
      </LoadingOverlay>
    </>
  )
}

export default Instructors