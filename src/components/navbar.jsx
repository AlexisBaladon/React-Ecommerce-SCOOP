import {Navbar as BTNavBar, Nav, Navbar, Container} from 'react-bootstrap';
import './navbar.css';

const NavBar = () => {
  return <>
    <BTNavBar id="navegador" bg="" expand="lg" variant="light">
        <Container fluid className="">
            <BTNavBar.Brand href="#">
                <img className="logo" src='icon.png' width="100px" height="100px" alt="Scoop" />
            </BTNavBar.Brand>
            <BTNavBar.Toggle id="nav-toggle" bg=""  variant="light" aria-controls="navbarScroll" />
            <BTNavBar.Collapse id="navbarScroll" className="justify-content-end">
                <Nav
                    className="nav"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Inicio</Nav.Link>
                    <Nav.Link href="#action2">Productos</Nav.Link>
                    <Nav.Link href="#action3">Contacto</Nav.Link>
                </Nav>
            </BTNavBar.Collapse>
        </Container>
    </BTNavBar>
  </>;
};

export default NavBar;
