import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";

import { DatabaseContext } from '../../../context/databaseContext';
import ItemDetail from "./itemDetail";
import Loading from '../../loading/loading';
import NotFound from "../../errors/error";

import ItemShowcase from '../../../dataTypes/items/itemShowcase';

import './itemDetailContainer.css'

const ItemDetailContainer: React.FC<{}> = () => {
  const { id } = useParams<{id?: string}>();

  const databaseContext = useContext(DatabaseContext);
  const { getItem } = databaseContext;

  const [item,setItem] = useState<ItemShowcase | null>(null);
  const [notFoundMessage, setNotFoundMessage] = useState<{title: string, description: string} | null>(null)

  useEffect(() => {
    let isMounted = true;
    const setIfMounted = (itm: ItemShowcase) => {
      if (isMounted) setItem(itm);
    }

    if (id) getItem(id,setIfMounted)
    .then(() => {
      setNotFoundMessage(null);
    })
    .catch(err => {
      if (err instanceof Error) {
        setNotFoundMessage({title: "Item no encontrado 😭",
                            description: err.message})
      }
    });
    
    return () => {isMounted = false};
  }, [id, getItem]);

  return <>
    <div>
      <Row id="routes-item-detail">
        <Navbar className="routes-nav-item-detail" variant="light">
          <Container id="routes-container-item-detail" className="justify-content-center" >
            <Nav>
              <Nav.Link as={Link} to="/">Volver al listado</Nav.Link>
              <Navbar.Text>|</Navbar.Text>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Navbar.Text>{" > "}</Navbar.Text>
              <Nav.Link as={Link} to="/">Listado</Nav.Link>
              <Navbar.Text>{" > "}</Navbar.Text>
              <Nav.Link as={Link} to="">Producto</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Row>
      {notFoundMessage?
        <NotFound {...notFoundMessage} />:
        <>
        {item? 
          <ItemDetail item={item}/>:
          <Loading />
        }
        </>
      }
    </div>
  </>
    
}

export default ItemDetailContainer;