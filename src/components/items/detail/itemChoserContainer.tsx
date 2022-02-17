import React, { useEffect, useState } from 'react'
import { getFlavors } from '../../../data/flavorHandler';
import Flavor from '../../../dataTypes/flavor';
import ProductDetail from '../../../dataTypes/ProductDetail';
import ProductDetailRecipiente from '../../../dataTypes/ProductDetailRecipiente';
import ItemChooser from './itemChoser'

interface IProps {
  id: string;
  setProductDetail(pd: ProductDetail): any;
}

const ItemChoserContainer: React.FC<IProps> = ({id, setProductDetail}) => {
  const [flavors, setFlavors] = useState<Flavor[]>([]);
  const [selectedFlavors, setSelectedFlavors] = useState<Flavor[]>([]);

  useEffect(() => {
    let isMounted = true;

    const setIfMounted = (flavors: Flavor[]) => {
      if (isMounted) setFlavors(flavors);
    }

    getFlavors(setIfMounted);
    
    return () => {isMounted = false}
  }, [])

  //update details according to flavors showed on screen
  useEffect(() => {
    //slice passes the value by copy
    setProductDetail(new ProductDetailRecipiente(selectedFlavors.slice()));
  }, [selectedFlavors,   setProductDetail])
  
  //Number of flavors according to item id
  const numFlavorsById = new Map([
    ["RzDoHkT1HVjWxrWWCoz6", 2], //1/2 Litre
    ["d6UNi3yFX3kJoYWH5qkI", 3], //1   Litre
    ["a5TdN0VbenQs6A9dlk1j", 4], //2   Litre
  ])

  return (
    <ItemChooser 
      maxFlavors={numFlavorsById.get(id) || 0}
      imgWidth={500}
      itemId={id}
      flavors={flavors}
      selectedFlavors={selectedFlavors}
      setSelectedFlavors={setSelectedFlavors}
    />
  )
}

export default ItemChoserContainer