import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/cartContext';
import { Button, Col, Row } from 'react-bootstrap';

import ItemChoserContainer from './itemChoserContainer';
import ItemCount from './itemCount';

import ItemTicket from '../../../dataTypes/itemTicket';
import ItemShowCase from '../../../dataTypes/itemShowcase';
import ItemCategory from '../../../dataTypes/category';
import ProductDetail from '../../../dataTypes/ProductDetail';
import { createTicket } from '../../../helpers/itemFactory';
import ProductDetailSimple from '../../../dataTypes/ProductDetailSimple';

import './itemDetail.css';

interface IProps {
  item: ItemShowCase;
}

const ItemDetail: React.FC<IProps> = ({item}: IProps) => {

  //Cart context
  const cartContext = useContext(CartContext);

  //Item destructuring
  const [itemId, title, description, price, pictureUrl, stock, category]:
        [string, string, string, number, string, number, ItemCategory] =
        [item.id, item.title, item.description, item.price, item.pictureUrl, item.stock, item.category];

  //Product details (different categories have different details)
  const [productDetail, setProductDetail] = useState<ProductDetail>(new ProductDetailSimple());
  const [inCart, setInCart] = useState<boolean>(false);
  const [amountInCart, setAmountInCart] = useState<number>(cartContext.amountInCart(itemId));
  const [inCartMessage, setInCartMessage] = useState("Producto agregado al carrito!");

  useEffect(() => {
    setInCart(cartContext.isInCart(itemId, productDetail));
    if (amountInCart >= stock) {
      setInCart(true);
      setInCartMessage("No queda stock para este producto!");
    }
  }, [productDetail, amountInCart,   cartContext, itemId, stock])

  //ItemCount
  const initial: number = 0;
  
  const increase = (productCount: number, setProductCount:(pc: number) => any): void => {
    if ((productCount < stock) && (amountInCart + productCount < stock)) setProductCount(productCount + 1);
  }
  
  const decrease = (productCount: number, setProductCount:(pc: number) => any): void => {
    if (productCount > 0) setProductCount(productCount - 1);
  }

  //Add to cart
  const onAdd = (productCount: number): void => {
    if (productCount > 0) {
      try {
        //Almost every function here throws an exception
        const newTicket: ItemTicket = createTicket(item, productDetail, productCount);
        cartContext.addItem(newTicket);
        setInCart(cartContext.isInCart(itemId,productDetail));
        setAmountInCart(cartContext.amountInCart(itemId));
        if (amountInCart > stock) {
          throw new Error("La cantidad de items en el carrito supera al stock");
        }
      }
      catch (err: any) {
        if (err instanceof Error) {
          //If something goes wrong, items won't be able to get added
          console.warn(err.message);
          setInCartMessage(err.message);
          setInCart(true);
        }
      }
    }
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
                  src={pictureUrl} alt={"Imagen "+title} />
              :
              <Row className="justify-content-center">
                <div id="title-item-choser"><h3>Personaliza tu helado:</h3></div>
                <ItemChoserContainer id={itemId} setProductDetail={setProductDetail}/>
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
              <div id="cart-stock-item-detail">
                <p id="stock-item-detail"><strong>Stock:</strong> {stock}</p>
                <small id="in-cart-item-detail">({amountInCart} en carrito)</small>
              </div>
              <Row className = "item-count-container ">
                {/* Dynamically selected component*/}
                {inCart ?
                <>
                  <div style={{fontStyle:"italic"}}>
                    <p style={{marginBottom:"0px"}}> {inCartMessage} </p>
                  </div>
                  <Link to="/cart">
                    <div className = "py-2">
                      <Button className = "add-cart" variant="primary">Terminar mi compra</Button>
                    </div>
                  </Link>
                </>
                :
                <ItemCount
                  stock = {stock}
                  initial = {initial}
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