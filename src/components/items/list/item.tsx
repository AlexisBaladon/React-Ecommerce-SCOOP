import React, { FunctionComponent } from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DtItem from '../../../dataTypes/item';
import './item.css';

interface IProps {
  item: DtItem;
  setSelectedItem: React.Dispatch<DtItem> | null;
  initial: number;
  onClick: Function;
  onAdd(num: number, set: React.Dispatch<number>): void;
  onSub(num: number, set: React.Dispatch<number>): void;
}

const Item: FunctionComponent<IProps> = 
  ({item, setSelectedItem, initial, onClick}: IProps) => {
  
  const [title, description, price, pictureUrl, stock]:
        [string, string, number, string, number] =
        [item.title, item.description, item.price, item.pictureUrl, item.stock];
  
  const selectItem = (): void => {
    if (setSelectedItem) setSelectedItem(item);
    if (onClick) onClick()
  };

  return <>
    <Card className="carta" >
        <Card.Img className="item-img" variant="top" src={pictureUrl}/>
      <Card.Body className="body-card">
        <Link to={"/item/"+item.id}>
          <Card.Title className="titulo-carta btn stretched-link" onClick={selectItem}>
            <strong>{title}</strong>
          </Card.Title>
        </Link>
        <hr />
        <Card.Text className ="item-desc texto-carta">
          {description}
        </Card.Text>
        <Card.Text className ="item-price texto-carta">
          <strong>{price} US$</strong>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="item-footer">
        Stock: {stock}
      </Card.Footer>
    </Card>
  </>;
};

export default Item;
