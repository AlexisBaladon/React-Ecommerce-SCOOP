import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

import ItemDetail from "./itemDetail";
import Loading from '../../loading/loading';

import { getPromiseItem } from "../../../helpers/promises";
import ItemShowcase from '../../../dataTypes/itemShowcase';

import './itemDetailContainer.css'

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
      getPromiseItem(Number(id),setIfMounted);
    } 
    catch (err: any) {
      console.warn('No se ha podido encontrar el item');
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