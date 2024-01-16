import React, { useContext, useEffect, useState } from 'react'
import { Container, Row} from 'react-bootstrap'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import logoImg from '../../Images/whatsapp.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Footer from '../../Components/Footer/Footer'
import './Courses.css'
import { AppContext } from '../../Context/AppContext'
import CourseCard from '../../Components/CourseCard/CourseCard'
import LoadingOverlay from 'react-loading-overlay-nextgen'
import { InfinitySpin } from 'react-loader-spinner'

const Courses = () => {
  const context = useContext(AppContext);
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
      <Container fluid className='p-0'>

        <div className='bg-img3' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
          <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
          <Row>
            {context.courses.map(courses => <CourseCard key={courses.id} courses={courses} />)}
          </Row>
          <Footer></Footer>
        </div>
      </Container >
      </LoadingOverlay>
    </>
  )
}

export default Courses