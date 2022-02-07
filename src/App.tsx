import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import ItemDetailContainer from './components/items/detail/itemDetailContainer';
import ItemListContainer from './components/items/list/itemListContainer';
import NavBar from './components/navbar/navbar';

function App() {
  const [id, setId] = useState<number | null>(null);

  return (
    <div className="App">
      <NavBar />
      {/* Elige entre Detail y List */}
      {id ? 
        <ItemDetailContainer setId={setId} itemId={id} /> :
        <ItemListContainer setId={setId} greeting="Bienvenido a Scoop, tu tienda de helados favorita!"/>
      }

    </div>
  );
}

export default App;
