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
  const imgWidth: {paleta: string , recipiente: string } = 
                  {paleta: "450px", recipiente: "650px"};

  const [title, description, price, pictureUrl, stock]:
        [string, string, number, string, number] =
        [item.title, item.description, item.price, item.pictureUrl, item.stock];

  return <>
    <div id="item-detail">
      <Row id="info-item-detail" className="align-items-center">
        <Col xl="6" id="img-container-item-detail">
          <img id="img-item-detail" width={imgWidth.paleta} src={pictureUrl} alt={"Imagen "+title} />
        </Col>
        <Col xl="6" id="text-info-item-detail" className="d-flex justify-content-center">
          <div id="text-info-inner-item-detail">
            <div id="title-item-detail">
              <h3>{title}</h3>
            </div>
            <p id="description-item-detail">{description}</p>
            <h1 id="price-item-detail">{price} US$</h1>
            <div id="bottom-info-item-detail">
              <p id="stock-item-detail">Stock: {stock}</p>
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
    </Row>
  </>
}

export default ItemDetail;