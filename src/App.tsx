import Routes from './routes/routes';

import { SessionProvider } from './context/sessionContext';
import { CartProvider } from './context/cartContext';
import { ModalProvider } from './context/modalContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return <div id="app">
    <SessionProvider>
      <ModalProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </ModalProvider>
    </SessionProvider>
  </div>
}

export default App;
