import React, { useState } from 'react'

import DtItem from '../../../dataTypes/item';

import './itemChooser.css'
import ModalRecipientes from './itemChooserModal';

interface IProps {
  imgWidth: number;
  items: DtItem[];
  selectedItems: DtItem[];
  setSelectedItems: any;
}

const ItemChooser: React.FC<IProps> = ({imgWidth, items, selectedItems, setSelectedItems}) => {
  const [show, setShow] = useState<boolean>(false);
  const [changedItemIndex, setChangedItemIndex] = useState<number>(0);

  const selectItemById = (newItemId: number) => {
    let newSelectedItems = selectedItems;
    const newItem = items.find(i => i.id === newItemId)

    if (newItem instanceof DtItem) {
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
    <div id="img-container-item-choser" style={{overflow: "hidden", minWidth:imgWidth}}>
      {selectedItems.map((dtItem, i) => {

      //Item destructuring
        const [pictureUrl, title]: [string, string] = 
              [dtItem.pictureUrl, dtItem.title];

        return <div key={i}>
          <span className="selected-image-item-choser" onClick={() => {setShow(true); setChangedItemIndex(i);}}>
            <img 
                className="img-item-choser"
                style={{clip: `rect(0, ${imgWidth*(i+1)/numImages}px, 350px, ${imgWidth*i/numImages}px)`}}
                width={imgWidth+"px"}
                src={window.location.origin + pictureUrl}
                alt={title}
                />
          </span>
        </div>
        })}
    </div>
  </>
}

export default ItemChooser;