import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';
import ItemDetailContainer from './components/items/itemDetailContainer';
import ItemListContainer from './components/items/itemListContainer';
import Routes from './routes/routes';
const logo =  require('./helado.png');

function App() {
  return (
    <div className="App">
      <Routes />
      {/*<Header />
      <ItemDetailContainer itemId={1}/>
      <ItemListContainer greeting="Bienvenido a Scoop, tu tienda de helados favorita!"/>
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
      </header>*/}
    </div>
  );
}

export default App;
