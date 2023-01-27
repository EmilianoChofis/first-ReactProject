import logo from './logo.svg';
import './App.css';
import HolaMundo, {HolaPais} from "./components/HolaMundo";
import Saludar from "./components/Saludar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HolaMundo>
        </HolaMundo>
        <HolaPais></HolaPais>
        <Saludar texto="mi primer prop"/>
      </header>
    </div>
  );
}

export default App;
