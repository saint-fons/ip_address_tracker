import bg from './pattern-bg.png';
import AddressContainer from "./components/Address/AddressContainer";
import Map from "./components/Map/Map";
import "./../src/index.css"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
              {<img src={bg} alt={"bg"} className={"bg_img"} />}
          </div>
            <AddressContainer />
            <Map />
      </header>
    </div>
  );
}

export default App;
