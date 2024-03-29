import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container } from 'react-bootstrap'
// import logo from '../../Images/HeaderLogo.png'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
const Footer = () => {
  return (
      <Container fluid className='p-0'>
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 px-5 footer-bg">
              <div className="col-md-4 d-flex align-items-center">
                  <span className="mb-md-0 text-muted">© 2023 DDesign, Inc</span>
              </div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex footer-icons">
                  <li className="ms-3"><a className="text-muted" href="/"><FontAwesomeIcon className="icons" style={{ width: "24", height: "24"}} icon={faXTwitter}/></a></li>

                  <li className="ms-3"><a className="text-muted" href="/"><FontAwesomeIcon className="icons" style={{ width: "24", height: "24" }} icon={faInstagram}/></a></li>

                  <li className="ms-3"><a className="text-muted" href="/"><FontAwesomeIcon className="icons" style={{ width: "24", height: "24" }} icon={faFacebook}/></a></li>
              </ul>
          </footer>
      </Container>
  )
}

export default Footer