import logo from './logo.svg';
import './App.css';
import AddressContainer from "./components/Address/AddressContainer";
import MapContainer from "./components/Map/MapContainer";

function App() {
  return (
    <div className="App">
        <div>
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <AddressContainer />
            <MapContainer />
        </p>
      </header>

    </div>
  );
}

export default App;
