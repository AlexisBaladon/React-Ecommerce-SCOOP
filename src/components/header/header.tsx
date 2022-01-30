import './header.css'
import NavBar from "../navbar/navbar";
import { Col, Row } from 'react-bootstrap';

const Header = () => {
  return <>
    <div id="bg-superior">
        <NavBar />
        <Row lg="4" sm="12" className="header-row">
          <Col className="header-img-col">
            <div className="header-img justify-content-center">
              <img className="" width="390px" src="./favicon.ico" alt="Scoop"></img>
            </div>
          </Col>
          <Col lg="8" sm="12" className="header-greeting">
              <Row className="header-title">
                <h1>Derrítete antes que tu helado</h1>
              </Row>
              <Row className="header-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti qui perspiciatis totam officiis ipsam explicabo dolore ratione lorem ipsum ipsum lorem.</p>
              </Row>
              <Row className="">
                <a href="#MuchoTexto" className="header-btn">Leer más</a>
              </Row>
          </Col>
        </Row>
        <div id="bg-superior-inner"/>
    </div>
    </>
}

export default Header;