import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CartProvider } from './context/cartContext';
import Routes from './routes/routes';

function App() {
  return <div id="app">
  <CartProvider>
    <Routes />
  </CartProvider>
  </div>
}

export default App;
