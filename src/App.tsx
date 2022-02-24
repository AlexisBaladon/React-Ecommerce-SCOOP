import Routes from './routes/routes';

import { CartProvider } from './context/cartContext';
import { ModalProvider } from './context/modalContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SessionProvider } from './context/sessionContext';

import './helpers/pdf'
import createPDF from './helpers/pdf';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
