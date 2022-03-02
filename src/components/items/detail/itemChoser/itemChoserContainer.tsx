import React, { useEffect, useState, useContext } from 'react'

import ItemChooser from './itemChoser'

import Flavor from '../../../../dataTypes/items/flavor';
import ProductDetail from '../../../../dataTypes/items/ProductDetail';
import ProductDetailRecipiente from '../../../../dataTypes/items/ProductDetailRecipiente';
import { DatabaseContext } from '../../../../context/databaseContext';

interface IProps {
  id: string;
  setProductDetail(pd: ProductDetail): any;
}

const ItemChoserContainer: React.FC<IProps> = ({id, setProductDetail}) => {
  const databaseContext = useContext(DatabaseContext);
  const { getFlavors, getNumberOfFlavors } = databaseContext;

  const [flavors, setFlavors] = useState<Flavor[]>([]);
  const [selectedFlavors, setSelectedFlavors] = useState<Flavor[]>([]);
  const [numberOfFlavors, setNumberOfFlavors] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;

    const setFlavorsIfMounted = (flavors: Flavor[]) => {
      if (isMounted) setFlavors(flavors);
    }

    const setAmountIfMounted = (amount: number) => {
      if (isMounted) setNumberOfFlavors(amount);
    }
    
    try {
      getNumberOfFlavors(setAmountIfMounted, id);
      getFlavors(setFlavorsIfMounted);
    }
    catch(err: any) {
      if (err instanceof Error) {
        console.warn(err);
      }
    }
    
    return () => {isMounted = false}
  }, [id, getFlavors, getNumberOfFlavors])

  useEffect(() => {
    setProductDetail(new ProductDetailRecipiente(selectedFlavors.slice()));
  }, [selectedFlavors, setProductDetail])

  return (
    <ItemChooser 
      maxFlavors={numberOfFlavors}
      imgWidth={500}
      imgHeight={500*2/3}
      itemId={id}
      flavors={flavors}
      selectedFlavors={selectedFlavors}
      setSelectedFlavors={setSelectedFlavors}
    />
  )
}

export default ItemChoserContainer