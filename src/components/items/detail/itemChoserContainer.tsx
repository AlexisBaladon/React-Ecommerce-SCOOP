import React, { useEffect, useState } from 'react'
import { getFlavors } from '../../../data/flavors';
import { obtenerHelados } from '../../../data/item';
import Flavor from '../../../dataTypes/flavor';
import Item from '../../../dataTypes/item';
import DtItem from '../../../dataTypes/item';
import ItemCategory from '../../../dataTypes/itemCategory';
import { getPromiseFlavors } from '../../../helpers/promises';
import ItemChooser from './itemChooser'

interface IProps {
  id: number;
}

const ItemChoserContainer: React.FC<IProps> = ({id}) => {
  const [flavors, setFlavors] = useState<Flavor[]>([]);
  const [selectedFlavors, setSelectedFlavors] = useState<Flavor[]>([]);

  useEffect(() => {
    getPromiseFlavors(setFlavors);
  }, [])

  return (
    <ItemChooser 
      imgWidth={500}
      itemId={id}
      items={flavors}
      selectedItems={selectedFlavors}
      setSelectedItems={setSelectedFlavors}
    />
  )
}

export default ItemChoserContainer