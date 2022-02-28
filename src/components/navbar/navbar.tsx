import {Navbar as BTNavBar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { SessionContext } from '../../context/sessionContext';
import { CartContext } from '../../context/cartContext';
import AccountWidget from './widgets/accountWidget/accountWidget';
import LogoutWidget from './widgets/loginWidget/loginWidget';
import CartWidget from './widgets/cartWidget/cartWidget';
import LoginContainer from '../sessions/loginContainer';
import SignupContainer from '../sessions/signupContainer';

import ItemCategory from '../../dataTypes/items/category';

import './navbar.css';

const NavBar: React.FC<{}> = () => {
  const widgetsColor = "white";

  const {Paleta, Recipiente, Postre} = ItemCategory;

  const sessionContext = useContext(SessionContext);
  const cartContext = useContext(CartContext);

  const { loggedUser, logout } = sessionContext;
  const { items, getNumberOfProducts } = cartContext;

  const [numItemsCart, setNumItemsCart] = useState<number>(0);

  useEffect(() => {
    setNumItemsCart(getNumberOfProducts());
  }, [items, getNumberOfProducts])
  
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
              {!loggedUser &&
                <>
                  <SignupContainer>
                    <Nav.Link> Registrarse </Nav.Link>
                  </ SignupContainer>
                  <LoginContainer>
                    <Nav.Link> Iniciar Sesión </Nav.Link>
                  </ LoginContainer>
                </>
                }
            </Nav>
            { loggedUser && <>
              <Link to="/history" id="link-account-navbar">
                <AccountWidget color={widgetsColor} width="32.5px" height="37.5px"/>
              </Link>
              <Link onClick={logout} to="/" id="link-profile-navbar">
                <LogoutWidget color={widgetsColor} width="35.5px" height="35.5px" />
              </Link>
            </>
            }
            <Link to="/cart" id="link-cart-navbar">
              <CartWidget id="cart" color={widgetsColor} width="40px" height="40px" />
              {cartContext.items.length > 0 && <h1 id="cant-items-navbar">{numItemsCart}</h1>}
            </Link> 
        </BTNavBar.Collapse>
      </Container>
    </BTNavBar>
  </header>;

};

export default NavBar;
