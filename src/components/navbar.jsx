import {Navbar as BTNavBar, Nav, Container} from 'react-bootstrap';
import './navbar.css';
import logo from './icon.png'

const NavBar = () => {
  return <>
    <BTNavBar id="navegador" bg="" expand="lg" variant="light">
      <Container>
        <BTNavBar.Brand href="#home">
          <div id="logo-nav" className="logo"/>
          <img src={logo} width="100px" height="100px" alt="Scoop" />
        </BTNavBar.Brand>
        <BTNavBar.Toggle id="nav-toggle" bg=""  variant="light" aria-controls="basic-navbar-nav" />
        <BTNavBar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
          </Nav>
        </BTNavBar.Collapse>
      </Container>
    </BTNavBar>
  </>;

};

export default NavBar;
