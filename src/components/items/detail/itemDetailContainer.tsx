import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

import ItemDetail from "./itemDetail";
import Loading from '../../loading/loading';

import ItemShowcase from '../../../dataTypes/items/itemShowcase';

import './itemDetailContainer.css'
import { getItem } from '../../../data/itemHandler';

const ItemDetailContainer: React.FC<{}> = () => {
  const { id } = useParams<{id?: string}>();
  const [item,setItem] = useState<ItemShowcase | null>(null);

  useEffect(() => {
    
    // SetItem shouldn't be used after being unmounted
    let isMounted = true;
    const setIfMounted = (itm: ItemShowcase) => {
      if (isMounted) setItem(itm);
    }

    //Gets item according to parameters
    try {
      if (id) getItem(id,setIfMounted);
    } 
    catch (err: any) {
      if (err instanceof Error) {
        console.warn(err.message);
      }
    }
    
    return () => {isMounted = false};
  }, [id]);

  return <div>
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
    {item? 
    <ItemDetail item={item}/>:
    <Loading />
    }
  </div>;
    
}

export default ItemDetailContainer;