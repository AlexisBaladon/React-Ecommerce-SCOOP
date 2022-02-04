import { Button, Col, Row } from 'react-bootstrap';
import DtItem from '../../../dataTypes/item';
import ItemCount from './itemCount';
import './itemDetail.css';

interface IProps {
    setId: Function;
    item: DtItem;
}

const ItemDetail = ({setId, item}: IProps) => {

  //ItemCount
  const onAdd = (num: number, setNum: React.Dispatch<number>): void => setNum(num + 1);
  const onSub = (num: number, setNum: React.Dispatch<number>): void => setNum(num - 1);
  const initial: number = 0;

  const [title, description, price, pictureUrl, stock]:
        [string, string, number, string, number] =
        [item.title, item.description, item.price, item.pictureUrl, item.stock];

  return <>
  <div id="item-detail">
    <Row id="rutas-item-detail">
      <Col xs="2">
        <a onClick={() => setId(null)} className="">
          Volver al listado</a>
      </Col>
      <Col xs="1">
        <p className="">|</p>
      </Col>
      <Col xs="1">
        <a onClick={() => setId(null)} className="">Listado</a>
      </Col>
    </Row>
    <Row id="info-item-detail align-items-center">
      <Col md="5" id="img-container-item-detail">
        <img id="img-item-detail" height="300px" src={pictureUrl} alt={"Imagen "+title} />
      </Col>
      <Col md="7" id="text-info-item-detail" className="">
        <div id="text-info-inner-item-detail">
          <div id="title-item-detail">
            <h3>{title}</h3>
          </div>
          <p id="description-item-detail">{description}</p>
          <div id="bottom-info-item-detail">
            <p id="stock-item-detail">Stock: {stock}</p>
            <h1>{price} US$</h1>
            <Row className = "item-count-container ">
              <ItemCount
                stock = {stock}
                initial = {initial}
                onAdd = {onAdd}
                onSub = {onSub}
              />
            </Row>
            <Row className ="aniadir-carro-container input-group py-2 display-content-center">
              <Button className = "aniadir-carro" variant="primary">Agregar al carro</Button>
            </Row>
          </div>
        </div>
        
      </Col>
    </Row>
  </div>
  <Row id="productos-similares-item-detail">
  <h1>Productos similares:</h1>
  </Row>
  </>
}

export default ItemDetail;