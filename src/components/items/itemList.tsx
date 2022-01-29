import { FunctionComponent } from 'react';
import Item from './item';
import DtItem from '../../dataTypes/item';

interface IProps {
  items: DtItem[];
}

const ItemList: FunctionComponent<IProps> = ({items}: IProps) => {
  const onAdd = (num: number, setNum: React.Dispatch<number>): void => setNum(num + 1);
  const onSub = (num: number, setNum: React.Dispatch<number>): void => setNum(num - 1);
  const initial: number = 0;
  
  return <> {
    items.map(h =>
      <Item 
        key = {h.id} 
        item = {h}
        setSelectedItem = {null}
        onClick = {()=>{}}
        initial = {initial}
        onAdd = {onAdd}
        onSub = {onSub}
      />
    )}
  </>
}

export default ItemList;