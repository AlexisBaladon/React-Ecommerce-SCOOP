import {Navbar as BTNavBar, Nav, Container, NavDropdown} from 'react-bootstrap';
import CartWidget from '../cartWidget/cartWidget';
import { Link } from 'react-router-dom';
import ItemCategory from '../../dataTypes/category';

import './navbar.css';

const NavBar: React.FC<{}> = () => {
  //Enum destructuring
  const {Paleta, Recipiente, Postre} = ItemCategory;

  return <header>
    <BTNavBar id="navigator" className="top-0" expand="lg" variant="dark" >
      <Container id="nav-container">
        <BTNavBar.Brand as={Link} to="/"><h2 id="logo">SCOOP</h2></BTNavBar.Brand>
          <BTNavBar.Toggle id="nav-toggle" aria-controls="basic-navbar-nav" />
          <BTNavBar.Collapse id="navbarScroll" className="">
            <Nav>
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">Todos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/category/"+Paleta}>Paletas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/category/"+Recipiente}>Recipientes</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/category/"+Postre}>Postres</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            </Nav>
            <Link to="/cart"><CartWidget id="cart" alt="Tienda" /></Link>
        </BTNavBar.Collapse>
      </Container>
    </BTNavBar>
  </header>;

};

export default NavBar;
