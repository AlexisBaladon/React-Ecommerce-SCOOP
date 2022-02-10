import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemChooser from './components/items/detail/itemChooser';
import Routes from './routes/routes';
import ImageInfo from './dataTypes/imageInfo'
import ShowedImageInfo from './dataTypes/ShowedImageInfo';
import { getFilteredItems, getItems } from './helpers/promises';
import { obtenerHelados } from './data/item';
import DtItem from './dataTypes/item';
import ItemCategory from './dataTypes/itemCategory';
import { useState } from 'react';


function App() {
  const imgInfo: ImageInfo = new ImageInfo(
    [new ShowedImageInfo('1','/images/helados/recipientes/frutilla.jpg'),
     new ShowedImageInfo('2','/images/helados/recipientes/mora.jpg'),
     new ShowedImageInfo('3','/images/helados/recipientes/vainilla.jpg'),
    ], 500)

  return <div id="app">
    {/*<Routes />*/}
    
    < ItemChooser 
    imgInfo={imgInfo} items={obtenerHelados().filter((i: DtItem) => i.category === ItemCategory.Recipiente)}
    />
  </div>
}

export default App;
