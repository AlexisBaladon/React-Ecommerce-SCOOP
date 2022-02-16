import React, { useEffect, useState } from 'react'
import Flavor from '../../../dataTypes/flavor';
import ProductDetail from '../../../dataTypes/ProductDetail';
import ProductDetailRecipiente from '../../../dataTypes/ProductDetailRecipiente';
import { getPromiseFlavors } from '../../../helpers/promises';
import ItemChooser from './itemChoser'

interface IProps {
  id: number;
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

    getPromiseFlavors(setIfMounted)
    
    return () => {isMounted = false}
  }, [])

  //update details according to flavors showed on screen
  useEffect(() => {
    //slice passes the value by copy
    setProductDetail(new ProductDetailRecipiente(selectedFlavors.slice()));
  }, [selectedFlavors,   setProductDetail])
  
  return (
    <ItemChooser 
      imgWidth={500}
      itemId={id}
      flavors={flavors}
      selectedFlavors={selectedFlavors}
      setSelectedFlavors={setSelectedFlavors}
    />
  )
}

export default ItemChoserContainer