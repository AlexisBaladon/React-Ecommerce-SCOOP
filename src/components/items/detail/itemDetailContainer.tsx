import { useEffect, useState } from "react";
import DtItem from '../../../dataTypes/item';
import { getItem } from "../../../helpers/promises";
import ItemDetail from "./itemDetail";

interface IProps {
    itemId: number;
}

const ItemDetailContainer = ({itemId}: IProps) => {
  const [helado,setHelado] = useState<DtItem | null>(null);

  useEffect(() => {
    getItem(itemId,setHelado);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>
    {helado? 
    <ItemDetail item={helado}/>:
    <p>No se ha seleccionado ningún item</p>
    }
  </div>;
}

export default ItemDetailContainer;