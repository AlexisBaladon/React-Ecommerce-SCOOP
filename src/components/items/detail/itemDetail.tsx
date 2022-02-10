import { Button, Col, Row } from 'react-bootstrap';
import ItemCount from './itemCount';

import DtItem from '../../../dataTypes/item';
import ItemCategory from '../../../dataTypes/itemCategory';

import './itemDetail.css';
import ItemChoserContainer from './itemChoserContainer';

interface IProps {
    item: DtItem;
}

const ItemDetail: React.FC<IProps> = ({item}: IProps) => {

  //ItemCount
  const onAdd = (num: number, setNum: React.Dispatch<number>): void => setNum(num + 1);
  const onSub = (num: number, setNum: React.Dispatch<number>): void => setNum(num - 1);
  const initial: number = 0;

  //Image size according to category
  const imgWidth = new Map([[ItemCategory.Paleta    , "450px"],
                            [ItemCategory.Recipiente, "575px"],
                            [ItemCategory.Postre    , "600px"],
                          ])

  //Item destructuring
  const [title, description, price, pictureUrl, stock, category]:
        [string, string, number, string, number, ItemCategory] =
        [item.title, item.description, item.price, item.pictureUrl, item.stock, item.category];

  return <>
    <div id="item-detail">
      <Row id="info-item-detail" className="align-items-center">
        <Col xl="6" id="img-container-item-detail">
          {
            category!==ItemCategory.Recipiente?
            <img id="img-item-detail" width={imgWidth.get(category)} 
                  src={window.location.origin + pictureUrl} alt={"Imagen "+title} />
            :
            <div id="img-item-detail" style={{width: imgWidth.get(category) }} >
              <ItemChoserContainer />
            </div>
          }
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
              <Row className ="add-cart-container input-group py-2 display-content-center">
                <Button className = "add-cart" variant="primary">Agregar al carro</Button>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </>
}

export default ItemDetail;