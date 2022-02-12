import { Button, Col, Row } from 'react-bootstrap';
import ItemCount from './itemCount';

import DtItem from '../../../dataTypes/item';
import ItemCategory from '../../../dataTypes/itemCategory';

import './itemDetail.css';
import ItemChoserContainer from './itemChoserContainer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    item: DtItem;
}

const ItemDetail: React.FC<IProps> = ({item}: IProps) => {

  //Item destructuring
  const [itemId, title, description, price, pictureUrl, stock, category]:
        [number, string, string, number, string, number, ItemCategory] =
        [item.id, item.title, item.description, item.price, item.pictureUrl, item.stock, item.category];

  //ItemCount
  const initial: number = 0;
  const [productCount, setProductCount] = useState<number>(initial);
  const [inCart, setInCart] = useState<boolean>(false);
  
  const increase = (): void => {
    if (productCount < stock) setProductCount(productCount + 1);
  }
  
  const decrease = (): void => {
    if (productCount > 0) setProductCount(productCount - 1);
  }

  const onAdd = (): void => {
    if (productCount > 0) setInCart(true);
  }
  
  //Image size according to category
  const imgWidth = new Map([[ItemCategory.Paleta    , "450px"],
                            [ItemCategory.Recipiente, "575px"],
                            [ItemCategory.Postre    , "600px"],
                          ])

  return <>
    <div id="item-detail">
      <Row id="info-item-detail" className="align-items-center">
        <Col xl="6" id="img-container-item-detail" className="justify-content-center">
          {/* Dynamically selected component*/}
          <>{
            category!==ItemCategory.Recipiente?
              <img id="img-item-detail" width={imgWidth.get(category)} 
                  src={window.location.origin + pictureUrl} alt={"Imagen "+title} />
              :
              <Row className="justify-content-center">
                <div id="title-item-choser"><h3>Personaliza tu helado:</h3></div>
                <ItemChoserContainer id={itemId}/>
              </Row>
            }</>
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
                {/* Dynamically selected component*/}
                {inCart ?
                <>
                  <div style={{fontStyle:"italic"}}>
                    <p style={{marginBottom:"0px"}}> Producto agregado al carrito! </p>
                  </div>
                  <Link to="/cart">
                    <div className = "py-2">
                      <Button className = "add-cart" variant="primary">Ver carrito</Button>
                    </div>
                  </Link>
                </>
                :
                <ItemCount
                  stock = {stock}
                  productCount = {productCount}
                  increase = {increase}
                  decrease = {decrease}
                  onAdd = {onAdd}
                />}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </>
}

export default ItemDetail;