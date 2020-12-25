import logo from './logo.svg';
import './App.css';
import AddressContainer from "./components/Address/AddressContainer";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
        <div>
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <AddressContainer />
            <Map />
        </p>
      </header>

    </div>
  );
}

export default App;
