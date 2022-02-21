import React, { useEffect, useState } from 'react'
import { getFlavors, getNumberOfFlavors } from '../../../data/flavorHandler';
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
  }, [id])

  //update details according to flavors showed on screen
  useEffect(() => {
    //slice passes the value by copy
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