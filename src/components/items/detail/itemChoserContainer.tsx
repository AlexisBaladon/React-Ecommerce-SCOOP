import React, { useState } from 'react'
import { obtenerHelados } from '../../../data/item';
import DtItem from '../../../dataTypes/item';
import ItemCategory from '../../../dataTypes/itemCategory';
import ItemChooser from './itemChooser'

const ItemChoserContainer = () => {
  //RECONTRA PROVISORIO
  const items = obtenerHelados().filter((i: DtItem) => i.category === ItemCategory.Recipiente);
  const [selectedItems, setselectedItems] = useState([items[3],items[1],items[2]])

  return (
    <ItemChooser 
      imgWidth={575}
      items={items}
      selectedItems={selectedItems}
      setSelectedItems={setselectedItems}
    />
  )
}

export default ItemChoserContainer