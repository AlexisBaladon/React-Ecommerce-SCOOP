import {Navbar as BTNavBar, Nav, Container} from 'react-bootstrap';
import './navbar.css';
import CartWidget from '../cartWidget/cartWidget';
const logo = require('./scoop.png');

const NavBar = () => {
  return <>
    <BTNavBar id="navegador" className="top-0" expand="lg" variant="dark" >
      <Container id="nav-container">
        <BTNavBar.Brand href="#home">
            <h2 id="logo">SCOOP</h2>
        </BTNavBar.Brand>
          <BTNavBar.Toggle id="nav-toggle" aria-controls="basic-navbar-nav" />
          <BTNavBar.Collapse id="navbarScroll" className="">
            <Nav>
              <Nav.Link href="#Inicio">Inicio</Nav.Link>
              <Nav.Link href="#Productos">Productos</Nav.Link>
              <Nav.Link href="#Contacto">Contacto</Nav.Link>
            </Nav>
            <a href="#Tienda">
              <CartWidget id="cart" alt="Tienda" />
            </a>
        </BTNavBar.Collapse>
      </Container>
    </BTNavBar>
  </>;

};

export default NavBar;
