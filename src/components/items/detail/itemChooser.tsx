import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

import ImageInfo from '../../../dataTypes/imageInfo'
import DtItem from '../../../dataTypes/item';

import './itemChooser.css'
import ModalRecipientes from './itemChooserModal';

interface IProps {
  imgInfo: ImageInfo;
  items: DtItem[];
}

const ItemChooser: React.FC<IProps> = ({imgInfo, items}) => {
  const [show, setShow] = useState<boolean>(false);

  //ImageWidth destructuring
  const imgWidth: number = imgInfo.widthPX;
  const numImages: number = imgInfo.showedInfo.length;

  return <>
    <ModalRecipientes items={items} show={show} onHide={() => setShow(false)}/>
    <div id="img-container-item-detail" style={{width: imgWidth, height:"333px",  borderRadius: "10%", overflow: "hidden"}}>
      {imgInfo.showedInfo.map((shwInf, i) => {
      //ShowedInfo destructuring
      //CAMBIAR KEY POR ID
        const [pictureUrl, title]: [string, string] = [shwInf.pictureUrl, shwInf.title];


        return <div key={title}>
          <span className="selected-image-item-detail" onClick={() => {setShow(true);}}>
            <img 
                className="img-item-detail"
                style={{clip: `rect(0, ${imgWidth*(i+1)/numImages}px, 350px, ${imgWidth*i/numImages}px)`}}
                width={imgWidth}
                src={window.location.origin + items[i].pictureUrl}
                alt={"Imagen "+items[i].title}
                />
          </span>
        </div>
        })}
    </div>
  </>
}

export default ItemChooser;