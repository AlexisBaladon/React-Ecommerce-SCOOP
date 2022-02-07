import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import DtItem from '../../../dataTypes/item';
import { getItem } from "../../../helpers/promises";
import ItemDetail from "./itemDetail";
import './itemDetailContainer.css'
import Loading from '../../loading/loading';
import { Link, useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams<{id?: string}>();
  const [helado,setHelado] = useState<DtItem | null>(null);

  // SetItem shouldn't be usesd after being unmounted
  let isMounted = true;

  const setIfMounted = (item: DtItem) => {
    if (isMounted) setHelado(item);
  }
    
  //Gets item according to parameters
  useEffect(() => {
    isMounted = true;
    getItem(Number(id),setIfMounted);
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
    {helado? 
    <ItemDetail item={helado}/>:
    <Loading />
    }
  </div>;
    
}

export default ItemDetailContainer;