import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar.jsx";

function App() {
  return (
    <div className="App">
      <div id="bg-superior">
        <NavBar />
        <div id="logo-banner" className="" align="left"/>
        <div id="bg-superior-inner"/>
      </div>
      {/* Futuro componente 
      <div id="scoop-div">
        <img id="scoop" width="50%" height="50%" src="background.png" alt="SCOOP"></img>
        <p id="scoop-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      /* Futuro componente */}
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
