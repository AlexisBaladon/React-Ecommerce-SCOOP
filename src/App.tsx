import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/cartContext';
import Routes from './routes/routes';
import './App.css';
import { collection, Firestore, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {
  
  return <div id="app">
    <CartProvider>
      <Routes />
    </CartProvider>
  </div>
}

export default App;
