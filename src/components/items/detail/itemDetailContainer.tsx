import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import DtItem from '../../../dataTypes/item';
import { getItem } from "../../../helpers/promises";
import ItemDetail from "./itemDetail";
import './itemDetailContainer.css'
import Loading from '../../loading/loading';

interface IProps {
  setId: Function;
  itemId: number;
}

const ItemDetailContainer = ({setId, itemId}: IProps) => {
  const [helado,setHelado] = useState<DtItem | null>(null);

  useEffect(() => {
    getItem(itemId,setHelado);
  }, [itemId]);

  return <div>
    <Row id="routes-item-detail">
        <Navbar variant="light">
          <Container id="nav-container" className="justify-content-center" >
            <Nav>
              <Nav.Link onClick={() => setId(null)} href="#Listado">Volver al listado</Nav.Link>
              <Navbar.Text>|</Navbar.Text>
              <Nav.Link onClick={() => setId(null)} href="#Home">Home</Nav.Link>
              <Navbar.Text>{" > "}</Navbar.Text>
              <Nav.Link onClick={() => setId(null)} href="#Listado">Listado</Nav.Link>
              <Navbar.Text>{" > "}</Navbar.Text>
              <Nav.Link onClick={() => setId(itemId)} href="#Listado">Producto</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Row>
    {helado? 
    <ItemDetail setId={setId} item={helado}/>:
    <Loading />
    }
  </div>;
    
}

export default ItemDetailContainer;