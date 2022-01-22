import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/navbar.jsx";
import logo from './helado.png';

function App() {
  return (
    <div className="App">
      <div id="bg-superior">
        <NavBar />
        <div id="logo-banner" className="" align="left"/>
        <div id="bg-superior-inner"/>
      </div>
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
