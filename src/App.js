import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './helado.png';
import Header from './components/header/header.jsx';
import ItemListContainer from './components/items/itemListContainer';


function App() {
  return (
    <div className="App">
      <Header />

      {/* Entrega 3 */}
      <ItemListContainer greeting="Bienvenido a Scoop, tu tienda helados favorita!"/>
      <div style={{height: '5px'}}/>
      <ItemListContainer greeting="Bienvenido a Scoop, tu proveedor de prop greetings favorito!"/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Próximamente: Heladería e-commerce.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Realizada con React
        </a>
      </header>
    </div>
  );
}

export default App;
