import {Navbar as BTNavBar, Nav, Container, NavDropdown} from 'react-bootstrap';
import CartWidget from './cartWidget/cartWidget';
import { Link } from 'react-router-dom';
import ItemCategory from '../../dataTypes/category';

import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import LoginWidget from './loginWidget/loginWidget';
import AccountWidget from './accountWidget/accountWidget';
import LogoutWidget from './loginWidget/loginWidget';

import './navbar.css';
import Login from '../sessions/login';
import LoginContainer from '../sessions/loginContainer';

const NavBar: React.FC<{}> = () => {
  const widgetsColor = "white";

  //Enum destructuring
  const {Paleta, Recipiente, Postre} = ItemCategory;

  //loggedUser context
  const [isLogged, setIsLogged] = useState(false);

  //Cart context
  const cartContext = useContext(CartContext);
  const [numItemsCart, setNumItemsCart] = useState<number>(0);

  useEffect(() => {
    setNumItemsCart(cartContext.getNumberOfProducts());
  }, [cartContext])
  

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
              {!isLogged &&
                <>
                  <LoginContainer initialShow={false}>
                    <Nav.Link> Registrarse </Nav.Link>
                  </ LoginContainer>
                  <LoginContainer initialShow={false}>
                    <Nav.Link> Iniciar Sesión </Nav.Link>
                  </ LoginContainer>
                </>
                }
            </Nav>
            { isLogged &&
              <Link onClick={()=>setIsLogged(!isLogged)} to="profile" id="profile-navbar">
                {/* {<AccountWidget color={widgetsColor} width="37.5px" height="37.5px"/>} */}
                <LogoutWidget color={widgetsColor} width="35.5px" height="35.5px" />
              </Link>
            }
            { numItemsCart > 0 &&
             <Link to="/cart" id="link-cart-navbar">
               <CartWidget id="cart" color={widgetsColor} width="40px" height="40px" />
              <h1 id="cant-items-navbar">{numItemsCart}</h1>
             </Link> 
             }
        </BTNavBar.Collapse>
      </Container>
    </BTNavBar>
  </header>;

};

export default NavBar;
