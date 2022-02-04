import { FunctionComponent } from 'react';
import Item from './item';
import DtItem from '../../../dataTypes/item';

interface IProps {
  setId: Function;
  items: DtItem[];
}

const ItemList: FunctionComponent<IProps> = ({setId, items}: IProps) => {
  const onAdd = (num: number, setNum: React.Dispatch<number>): void => setNum(num + 1);
  const onSub = (num: number, setNum: React.Dispatch<number>): void => setNum(num - 1);
  const initial: number = 0;
  
  return <> {
    items.map(h =>
      <Item 
        key = {h.id}
        item = {h}
        setSelectedItem = {null}
        onClick = {() => {setId(h.id);}}
        initial = {initial}
        onAdd = {onAdd}
        onSub = {onSub}
      />
    )}
  </>
}

export default ItemList;