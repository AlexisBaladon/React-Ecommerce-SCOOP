import { FunctionComponent, useState } from 'react';
import Item from './item';
import {obtenerPromiseHelados} from '../../logic/promises';
import Helado from '../../dataTypes/item';

const ItemList: FunctionComponent = () => {
  const onAdd = (num: number, setNum: React.Dispatch<number>): void => setNum(num + 1);
  const onSub = (num: number, setNum: React.Dispatch<number>): void => setNum(num - 1);
  const initial: number = 0;
  const [helados,setHelados] = useState<Helado[]>([]);
  obtenerPromiseHelados(helados, setHelados);
  
  //Promesa helados

  return <> {
    helados.map(h =>
      <Item 
        key={h.id} 
        item = {h}
        setSelectedItem = {null}
        onClick={()=>{}}
        initial = {initial}
        onAdd = {onAdd}
        onSub = {onSub}
      />
    )}
  </>
}

export default ItemList;