import logo from './logo.svg';
import './App.css';
import AddressContainer from "./components/Address/AddressContainer";

function App() {
  return (
    <div className="App">
        <div>
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <AddressContainer />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
