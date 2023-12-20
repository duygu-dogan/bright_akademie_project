import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Image } from 'react-bootstrap'
import logo from '../../Images/HeaderLogo.png'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
const Footer = () => {
  return (
      <Container fluid className='p-0'>
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-5 footer-bg">
              <div className="col-md-4 d-flex align-items-center">
                  <span className="mb-3 mb-md-0 text-muted">© 2023 DDesign, Inc</span>
              </div>
              <div><a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                  <Image className="logo" style={{ width: "10", height: "24" }} src={logo} />
              </a></div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                  <li className="ms-3"><a className="text-muted" href="/"><FontAwesomeIcon className="icons" style={{ width: "24", height: "24"}} icon={faXTwitter}/></a></li>

                  <li className="ms-3"><a className="text-muted" href="/"><FontAwesomeIcon className="icons" style={{ width: "24", height: "24" }} icon={faInstagram}/></a></li>

                  <li className="ms-3"><a className="text-muted" href="/"><FontAwesomeIcon className="icons" style={{ width: "24", height: "24" }} icon={faFacebook}/></a></li>
              </ul>
          </footer>
      </Container>
  )
}

export default Footer