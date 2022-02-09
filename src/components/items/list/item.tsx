import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import DtItem from '../../../dataTypes/item';

import './item.css';

interface IProps {
  item: DtItem;
  setSelectedItem: React.Dispatch<DtItem> | null;
}

const Item: React.FC<IProps> = 
  ({item, setSelectedItem}: IProps) => {
  
  const [title, description, price, pictureUrl, stock]:
        [string, string, number, string, number] =
        [item.title, item.description, item.price, item.pictureUrl, item.stock];
  
  const onClick = (): void => {
    if (setSelectedItem) setSelectedItem(item);
  };

  return <>
    <Card className="item-card" >
        <Card.Img className="item-img" variant="top" src={pictureUrl}/>
      <Card.Body className="body-card">
        <Link to={"/item/"+item.id}>
          <Card.Title className="item-title btn stretched-link" onClick={onClick}>
            <strong>{title}</strong>
          </Card.Title>
        </Link>
        <hr />
        <Card.Text className ="item-desc item-text" >
          {description}
        </Card.Text>
        <Card.Text className ="item-price item-text">
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
