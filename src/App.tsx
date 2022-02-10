import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemChooser from './components/items/detail/itemChooser';
import Routes from './routes/routes';
import { obtenerHelados } from './data/item';
import DtItem from './dataTypes/item';
import ItemCategory from './dataTypes/itemCategory';
import { useState } from 'react';


function App() {


  return <div id="app">
    <Routes />
  </div>
}

export default App;
