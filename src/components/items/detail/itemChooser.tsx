import React from 'react'

import ImageInfo from '../../../dataTypes/imageInfo'

import './itemChooser.css'

interface IProps {
  imgInfo: ImageInfo;
}

const ItemChooser: React.FC<IProps> = ({imgInfo}) => {
  //ImageWidth destructuring
  const imgWidth: number = imgInfo.widthPX;
  const numImages: number = imgInfo.showedInfo.length;

  return <>
    
    <div id="img-container-item-detail" style={{width: imgWidth, height:"500px"}}>
      {imgInfo.showedInfo.map((shwInf, i) => {
      //ShowedInfo destructuring
      //CAMBIAR KEY POR ID
        const [pictureUrl, title]: [string, string] = [shwInf.pictureUrl, shwInf.title];
        return <img 
            key={title}
            className="img-item-detail"
            style={{clip: `rect(0, ${imgWidth*(i+1)/numImages}px, 350px, ${imgWidth*i/numImages}px)
                    
            `}}
            width={imgWidth}
            src={window.location.origin + pictureUrl}
            alt={"Imagen "+title}
          />
        })}
    </div>
  </>
}

export default ItemChooser;