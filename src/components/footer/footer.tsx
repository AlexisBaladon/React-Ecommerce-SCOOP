import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import './footer.css'
import GithubWidget from './widgets/githubWidget'
import InstagramWidget from './widgets/instagramWidget'
import LocationWidget from './widgets/locationWidget'
import MailWidget from './widgets/mailWidget'
import PhoneWidget from './widgets/phoneWidget'

const Footer = () => {
  const widgetColor = "white";

  return <>
    <div id="footer" className="font-small pt-4">
      <Container fluid className="text-center text-md-left pt-4">
        <Row>
          <Col md="6">
            <h3>Acerca de Scoop</h3>
            <p>
              Scoop es una empresa ficticia creada con fines didácticos y recreativos.
              Cualquier parecido con una marca real es pura coincidencia 
            </p>
            <div id="social-footer" className="pb-4">
              <a href="https://github.com/AlexisBaladon/" target="_blank" rel="noreferrer noopener">
                <GithubWidget width='25px' height='25px' color={widgetColor}/>
              </a>
              <a href="https://www.instagram.com/alexis.baladon/" target="_blank" rel="noreferrer noopener">
                <InstagramWidget id="instagram-footer" width='25px' height='25px' color={widgetColor}/>
              </a>
            </div>
          </Col>
          <Col md="6" id="contact-footer">
            <h3 className="title">Contacto</h3>
            <div id="contact-innter-footer">
              <Row className="py-2">
                <Col md="4" sm="12" className="py-2">
                  <LocationWidget width='25px' height='25px' color={widgetColor}/>
                  <p>Canelones, Uruguay</p>
                </Col>
                <Col md="4" sm="12" className="py-2">
                  <PhoneWidget width='25px' height='25px' color={widgetColor}/>
                  <p>+123-456-789</p>
                </Col>
                <Col md="4" sm="12" className="py-2">
                  <MailWidget width='25px' height='25px' color={widgetColor}/>
                  <p>scoop@helados.uy</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-1">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: Scoop Inc. 🍧
        </Container>
      </div>
    </div>
    
  </>
}

export default Footer