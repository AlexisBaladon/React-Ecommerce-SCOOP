import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import DtItem from '../../../dataTypes/item';
import { getItem } from "../../../helpers/promises";
import ItemDetail from "./itemDetail";
import './itemDetailContainer.css'
import Loading from '../../loading/loading';
import { Link, NavLink, useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams<{id?: string}>();
  const [helado,setHelado] = useState<DtItem | null>(null);

  useEffect(() => {
    getItem(Number(id),setHelado);
  }, [id]);


  return <div>
    <Row id="routes-item-detail">
        <Navbar variant="light">
          <Container id="nav-container" className="justify-content-center" >
            <Nav>
              <Nav.Link><Link to="/">Volver al listado</Link></Nav.Link>
              <Navbar.Text>|</Navbar.Text>
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Navbar.Text>{" > "}</Navbar.Text>
              <Nav.Link href="#Listado"><Link to="/">Listado</Link></Nav.Link>
              <Navbar.Text>{" > "}</Navbar.Text>
              <Nav.Link href="#Listado"><Link to="/">Producto</Link></Nav.Link>
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