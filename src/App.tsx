import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import ItemDetailContainer from './components/items/detail/itemDetailContainer';
import ItemListContainer from './components/items/list/itemListContainer';
import Routes from './routes/routes';

function App() {
  const [id, setId] = useState<number | null>(null);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
