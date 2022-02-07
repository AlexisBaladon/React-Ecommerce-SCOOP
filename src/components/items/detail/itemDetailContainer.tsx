import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

import ItemDetail from "./itemDetail";
import Loading from '../../loading/loading';

import { getItem } from "../../../helpers/promises";
import DtItem from '../../../dataTypes/item';

import './itemDetailContainer.css'

const ItemDetailContainer: React.FC<{}> = () => {
  const { id } = useParams<{id?: string}>();
  const [item,setItem] = useState<DtItem | null>(null);

  useEffect(() => {
    
    // SetItem shouldn't be usesd after being unmounted
    let isMounted = true;
    const setIfMounted = (itm: DtItem) => {
      if (isMounted) setItem(itm);
    }

    //Gets item according to parameters
    try {
      getItem(Number(id),setIfMounted);
    } 
    catch (err: any) {
      console.warn('No se ha podido encontrar el item');
    }
    
    return () => {isMounted = false};
  }, [id]);

  return <div>
    <Row id="routes-item-detail">
      <Navbar className="routes-nav-item-detail" variant="light">
        <Container className="justify-content-center" >
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