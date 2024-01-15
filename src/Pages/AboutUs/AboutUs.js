import React from 'react'
import { Container } from 'react-bootstrap'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import logoImg from '../../Images/whatsapp.png'
import Footer from '../../Components/Footer/Footer'
import './AboutUs.css'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

const AboutUs = () => {
    return (
        <>
            <Container fluid className='p-0 about-page'>
                <div className='bg-img2' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                    <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
                    <div className='aboutus-text'>
                        <h1 className='main-title2'>Why <span style={{ color: "#f43dd9" }}>Bright</span> Akademie <FontAwesomeIcon style={{ color: "#f43dd9", fontSize: "45px"}} icon={faQuestion}/> </h1>
                        <p className='sub-title2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a semper diam. Nullam sit amet tellus augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non nisi felis. Etiam tristique maximus risus. Fusce a ultricies nisi. Integer ut fringilla nisl, eu congue lacus.

                            Cras blandit nulla felis, sit amet dignissim mi suscipit quis. Pellentesque felis ante, pharetra vel auctor eu, maximus a dui. Vivamus scelerisque lectus dui, eget varius dui tempus a. Vestibulum id elementum ligula. Duis dapibus in massa eleifend malesuada. Fusce non facilisis sapien. Phasellus molestie quis leo id maximus. Curabitur quam diam, egestas vel mattis in, porttitor ornare libero. Aliquam non placerat lorem.

                            Quisque egestas nisl sit amet sem ullamcorper, nec aliquam tellus rhoncus. Nam convallis lorem et tellus vestibulum convallis. Proin id maximus enim, sed mattis felis. Vestibulum ut nulla nec dolor hendrerit cursus. </p>
                            
                    </div>
                    <Footer></Footer>
                </div>
                
            </Container>
        </>
    )
}

export default AboutUs