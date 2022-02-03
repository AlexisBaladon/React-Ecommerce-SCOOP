import { useEffect, useState } from "react";
import DtItem from '../../dataTypes/item';
import { getItem } from "../../helpers/promises";
import ItemDetail from "./itemDetail";

interface IProps {
    itemId: number;
}

const ItemDetailContainer = ({itemId}: IProps) => {
  const [helado,setHelado] = useState<DtItem | null>(null);

  useEffect(() => {
    getItem(itemId,setHelado);
  }, []);
  
  return <div>
    <ItemDetail item={helado}/>
  </div>;
}

export default ItemDetailContainer;
