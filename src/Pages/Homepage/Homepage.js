import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import logo from '../../Components/Header/HeaderLogo.png'
import './Homepage.css'


const Homepage = () => {
  return (
    <>
      <Container fluid className='p-0 main-page'>
        <div className='main-page-logo' style={{ backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundSize: '50rem', backgroundPositionY: 'center', backgroundPositionX: 'center' }}>
          <h1 className='main-title'>Geleceğin Teknolojilerini <span style={{color: "#f43dd9"}}>Bright </span>ile Kodla</h1>
          <h3 className='sub-title'>Üniversite onaylı sertifikanı al, lider bilişimci ol!</h3>
          <Button className='btn'>Hemen Başvur!</Button>
        </div>
      </Container>
    </>
  )
}

export default Homepage