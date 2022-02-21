import Routes from './routes/routes';

import { CartProvider } from './context/cartContext';
import { ModalProvider } from './context/modalContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  return <div id="app">
    <ModalProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </ModalProvider>
  </div>
}

export default App;
