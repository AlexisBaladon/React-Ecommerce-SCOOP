import Item from './item';
import ItemShowcase from '../../../dataTypes/itemShowcase';

interface IProps {
  items: ItemShowcase[];
}

const ItemList: React.FC<IProps> = ({items}: IProps) => {
  
  return <> {
    items.map(h =>
      <Item 
        key = {h.id}
        item = {h}
        setSelectedItem = {null}
      />
    )}
  </>
}

export default ItemList;