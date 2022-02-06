import {Navbar as BTNavBar, Nav, Container, NavDropdown} from 'react-bootstrap';
import './navbar.css';
import CartWidget from '../cartWidget/cartWidget';
import { Link } from 'react-router-dom';
import ItemCategory from '../../dataTypes/itemCategory';
const logo = require('./scoop.png');

const NavBar = () => {
  return <>
    <BTNavBar id="navegador" className="top-0" expand="lg" variant="dark" >
      <Container id="nav-container">
        <BTNavBar.Brand as={Link} to="/"><h2 id="logo">SCOOP</h2></BTNavBar.Brand>
          <BTNavBar.Toggle id="nav-toggle" aria-controls="basic-navbar-nav" />
          <BTNavBar.Collapse id="navbarScroll" className="">
            <Nav>
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">Todos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/category/"+ItemCategory.Paleta}>Paletas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/category/"+ItemCategory.Recipiente}>Recipientes</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/category/"+ItemCategory.Postre}>Postres</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            </Nav>
            <Link to="/cart"><CartWidget id="cart" alt="Tienda" /></Link>
        </BTNavBar.Collapse>
      </Container>
    </BTNavBar>
  </>;

};

export default NavBar;
