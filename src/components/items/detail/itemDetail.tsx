import { Button, Col, Row } from 'react-bootstrap';
import DtItem from '../../../dataTypes/item';
import ItemCount from './itemCount';
import './itemDetailContainer.css';

interface IProps {
    item: DtItem;
}

const ItemDetail = ({item}: IProps) => {

  //ItemCount
  const onAdd = (num: number, setNum: React.Dispatch<number>): void => setNum(num + 1);
  const onSub = (num: number, setNum: React.Dispatch<number>): void => setNum(num - 1);
  const initial: number = 0;

  const [title, description, price, pictureUrl, stock]:
        [string, string, number, string, number] =
        [item.title, item.description, item.price, item.pictureUrl, item.stock];

  return <div id="item-detail">
    <Row id="rutas-item-detail">
      <a>Volver al listado</a>
      <p>|</p>
      <a>Listado</a>
    </Row>
    <Row id="info-item-detail">
      <Col id="img-item-detail">
        <img height="500px" src={pictureUrl} alt={"Imagen "+title}></img>
      </Col>
      <Col id="img-item-detail">
        <h3>{title}</h3>
        <h1>{price} US$</h1>
        <p>{description}</p>
        <p>Stock: {stock}</p>
        <div className = "item-count-container">
          <ItemCount 
            stock = {stock}
            initial = {initial}
            onAdd = {onAdd}
            onSub = {onSub}
          />
        </div>
        <div className ="aniadir-carro-container input-group py-2 display-content-center">
          <Button className = "aniadir-carro" variant="primary">Agregar al carro</Button>
        </div>
      </Col>
    </Row>
    <Row id="productos-similares-item-detail">
      <h1>Productos similares:</h1>
    </Row>
  </div>;
}

export default ItemDetail;