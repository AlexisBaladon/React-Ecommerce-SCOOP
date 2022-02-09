import ShowedImageInfo from './ShowedImageInfo';

class ImageInfo {
  showedInfo: ShowedImageInfo[];
  widthPX: number; //Shared by every picture!

  constructor(showedInfo: ShowedImageInfo[], widthPX: number) {
    this.showedInfo = showedInfo;
    this.widthPX = widthPX;
  }
}

export default ImageInfo;