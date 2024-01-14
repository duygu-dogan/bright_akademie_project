import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import BgTechnoMain from '../../Images/BgTechno0.jpg'
import logoImg from '../../Images/HeaderLogo-img.png'
import './Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faBuilding, faLaptopCode, faPeopleGroup, faUserTie, faUsersRectangle } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../Components/Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

//Küçük ekranda aşağı taşma sorunu var
const Homepage = () => {
  return (
    <>
      <Container fluid className='p-0'>
        <div className='main-page-bg' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: 'center', backgroundPositionX: 'center' }}>
          <h1 className='main-title'>Geleceğin Teknolojilerini <span style={{ color: "#f43dd9" }}>Bright </span>ile Kodla</h1>
          <h3 className='sub-title'>Üniversite onaylı sertifikanı al, lider bilişimci ol!</h3>
          <Button className='btn'>Hemen Başvur!</Button>
          <FloatingWhatsApp phoneNumber='+905558109862' accountName='Bright Akademie' statusMessage='Online' style={{ width: '150px', height: '150px' }} allowClickAway='true' avatar={logoImg} />
        </div>
        <div className='bg-img' style={{ backgroundImage: `url(${BgTechnoMain})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
          <h1 className='main-title2'>Peki <span style={{ color: "#f43dd9" }}>Bright</span> size ne vadediyor?</h1>
          <p className='sub-title2'>Turing Üniversitesi tarafından yürütülen ve proje deneyimi yüksek eğitici kadrosu ile fark yaratacak yazılım - sistem uzmanları yetiştiren bir kariyer programıdır. Sektör ihtiyaçları göz önünde bulundurularak hazırlanmış güncel ve son teknoloji eğitim içerikleriyle <span style={{ color: "#f43dd9", fontSize: '18px', textDecoration: 'underline' }}>Bright</span> eğitimleri devam ediyor! Eğitimini tamamlayan adaylar bilişim sektöründe işe yerleştirilmektedir.</p>
          <Row className='row-container w-75'>
            <Col className='main-item' lg={4} sm={6} xs={12}>
              <p className='main-item-bg'><FontAwesomeIcon className='icons' icon={faLaptopCode} /></p>
              <p className='main-item-text'>Yenilikçi Eğitim Anlayışı</p>
            </Col>
            <Col className='main-item' lg={4} sm={6} xs={12}>
              <p className='main-item-bg'><FontAwesomeIcon className='icons' icon={faPeopleGroup} /></p>
              <p className='main-item-text'>Grup Projeleri</p>
            </Col>
            <Col className='main-item' lg={4} sm={6} xs={12}>
              <p className='main-item-bg'><FontAwesomeIcon className='icons' icon={faBuilding} /></p>
              <p className='main-item-text'>Staj İmkanı</p>
            </Col>
            <Col className='main-item' lg={4} sm={6} xs={12}>
              <p className='main-item-bg'><FontAwesomeIcon className='icons' icon={faBriefcase} /></p>
              <p className='main-item-text'>İşe Yerleştirme Desteği</p>

            </Col>
            <Col className='main-item' lg={4} sm={6} xs={12}>
              <p className='main-item-bg'><FontAwesomeIcon className='icons' icon={faUserTie} /></p>
              <p className='main-item-text'>Uzman Kadro</p>
            </Col>
            <Col className='main-item' lg={4} sm={6} xs={12}>
              <p className='main-item-bg'><FontAwesomeIcon className='icons' icon={faUsersRectangle} /></p>
              <p className='main-item-text'>Mülakat Simülasyonu</p>
            </Col>
          </Row>
          <Footer></Footer>
        </div>
      </Container>

    </>
  )
}

export default Homepage