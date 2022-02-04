import { useEffect, useState } from "react";
import DtItem from '../../../dataTypes/item';
import { getItem } from "../../../helpers/promises";
import ItemDetail from "./itemDetail";

interface IProps {
  setId: Function;
  itemId: number;
}

const ItemDetailContainer = ({setId, itemId}: IProps) => {
  const [helado,setHelado] = useState<DtItem | null>(null);

  useEffect(() => {
    getItem(itemId,setHelado);
  }, [itemId]);

  return <div>
    {helado? 
    <ItemDetail setId={setId} item={helado}/>:
    <p>No se ha seleccionado ningún item</p>
    }
  </div>;
}

export default ItemDetailContainer;