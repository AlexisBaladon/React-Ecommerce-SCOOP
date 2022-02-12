import React, { useEffect, useState } from 'react'

import Flavor from '../../../dataTypes/flavor';
import ModalRecipientes from './itemChoserModal';

import './itemChoser.css'


interface IProps {
  imgWidth: number;
  itemId: number;
  items: Flavor[];
  selectedItems: Flavor[];
  setSelectedItems: any;
}

const ItemChooser: React.FC<IProps> = ({imgWidth, itemId, items, selectedItems, setSelectedItems}) => {
  const [show, setShow] = useState<boolean>(false);
  const [changedItemIndex, setChangedItemIndex] = useState<number>(0);

  
  //Number of flavors according to item id
  const numFlavorsById = new Map([[5, 2], //1/2 Liter
                                  [6, 3], //1   Liter
                                  [7, 4], //2   Liter
                                 ])

  const magicNumberById = new Map([[5, 200], //1/2 Liter
                                   [6, 150], //1   Liter
                                   [7, 133], //2   Liter
                                   ])                       

  useEffect(() => {
    setSelectedItems(items.slice(0,numFlavorsById.get(itemId)));
  }, [items])


  const selectItemById = (newItemId: number) => {
    let newSelectedItems = selectedItems;
    const newItem = items.find(i => i.id === newItemId)

    if (newItem instanceof Flavor) {
      newSelectedItems[changedItemIndex] = newItem;
      setSelectedItems(newSelectedItems);
    }
    else {
      console.warn("Changed item couldn't be finded");
    }
  }

  //numImages destructuring
  const numImages: number = selectedItems.length;

  return <>
    <ModalRecipientes items={items} show={show} onHide={() => setShow(false)}
                      selectItemById={selectItemById}/>
    <div id="images-container-item-choser" style={{ width: imgWidth, height: imgWidth*2/3}}>
      
      {//Image mapping
      selectedItems.map((dtItem, i) => {

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