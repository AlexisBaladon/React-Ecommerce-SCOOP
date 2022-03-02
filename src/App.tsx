import Routes from './routes/routes';

import { DatabaseProvider } from './context/databaseContext';
import { SessionProvider } from './context/sessionContext';
import { CartProvider } from './context/cartContext';
import { ModalProvider } from './context/modalContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return <div id="app">
    <DatabaseProvider>
      <SessionProvider>
        <ModalProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </ModalProvider>
      </SessionProvider>
    </DatabaseProvider>
  </div>
}

export default App;
