import React, { useEffect, useState } from 'react'

import Flavor from '../../../dataTypes/flavor';
import ModalRecipientes from './itemChoserModal';

import './itemChoser.css'


interface IProps {
  imgWidth: number;
  itemId: number;
  flavors: Flavor[];
  selectedFlavors: Flavor[];
  setSelectedFlavors: any;
}

const ItemChooser: React.FC<IProps> = ({imgWidth, itemId, flavors, selectedFlavors, setSelectedFlavors}) => {
  const [show, setShow] = useState<boolean>(false);
  const [changedItemIndex, setChangedItemIndex] = useState<number>(0);

  const magicNumberById = new Map([[5, 200], //1/2 Litre
                                   [6, 150], //1   Litre
                                   [7, 133], //2   Litre
                                   ])                       

  useEffect(() => {
    //Number of flavors according to item id
    const numFlavorsById = new Map([
      [5, 2], //1/2 Litre
      [6, 3], //1   Litre
      [7, 4], //2   Litre
    ])

    setSelectedFlavors(flavors.slice(0,numFlavorsById.get(itemId)));
  }, [flavors,   setSelectedFlavors, itemId])

  const selectItemById = (newItemId: number) => {
    let newSelectedItems = selectedFlavors;
    const newItem = flavors.find(i => i.id === newItemId)

    if (newItem instanceof Flavor) {
      newSelectedItems[changedItemIndex] = newItem;
      //Slice makes a copy of the item, otherwise it will have the same reference
      setSelectedFlavors(newSelectedItems.slice());
    }
    else {
      console.warn("Changed item couldn't be finded");
    }
  }

  //numImages destructuring
  const numImages: number = selectedFlavors.length;

  return <>
    <ModalRecipientes items={flavors} show={show} onHide={() => setShow(false)}
                      selectItemById={selectItemById}/>
    <div id="images-container-item-choser" style={{ width: imgWidth, height: imgWidth*2/3}}>
      
      {//Image mapping
      selectedFlavors.map((dtItem, i) => {

        //Item destructuring
          const [magicNumber, pictureUrl, title]: [number , string, string] = 
                [magicNumberById.get(itemId) || 150, dtItem.pictureUrl, dtItem.title];

          return (
          <div key={i} className="img-container-item-choser"style={{ width: 100/numImages+"%",  left: `${i*100/numImages}%`}} >
            <span onClick={() => {setShow(true); setChangedItemIndex(i);}}>
              <img 
                  className="img-item-choser"
                  style={{ objectPosition:i*magicNumber/numImages+"% 0"}}
                  src={window.location.origin + pictureUrl}
                  alt={title}
              />
            </span>
          </div>
      )})}
    </div>
  </>
}

export default ItemChooser;