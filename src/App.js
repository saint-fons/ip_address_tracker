import bg from './pattern-bg.png';
import './App.css';
import AddressContainer from "./components/Address/AddressContainer";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
              <img src={bg} alt={"bg"} />
          </div>
            <AddressContainer />
            <Map />
      </header>

    </div>
  );
}

export default App;
