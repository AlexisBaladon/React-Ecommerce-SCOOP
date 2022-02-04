import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import ItemDetailContainer from './components/items/detail/itemDetailContainer';
import ItemListContainer from './components/items/list/itemListContainer';
const logo =  require('./helado.png');

function App() {
  const [id, setId] = useState<number | null>(null);

  return (
    <div className="App">
      <ItemListContainer setId={setId} greeting="Bienvenido a Scoop, tu tienda de helados favorita!"/>
      <h1>Item seleccionado: </h1>
      {id ? 
       <ItemDetailContainer itemId={id} /> :
       <p>No se ha seleccionado ningún item</p>
      }

    </div>
  );
}

export default App;
