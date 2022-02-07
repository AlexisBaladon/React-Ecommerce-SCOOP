import Item from './item';
import DtItem from '../../../dataTypes/item';

interface IProps {
  items: DtItem[];
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