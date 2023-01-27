import logo from './logo.svg';
import './App.css';
import HolaMundo, {HolaPais} from "./components/HolaMundo";
import Saludar from "./components/Saludar";
function App() {
  const name = "Emiliano Ortiz"
  const objeto = {
    nombre: "Chombo",
    apellido: "puchis",
    edad: "19",
    color: "carton mojado"
  }

  const funApp=()=>{
    alert("hola desde app")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Saludar texto="mi primer prop"
          name = {name}
          usuario = {objeto}
                 funcion = {funApp}
        />
      </header>
    </div>
  );
}

export default App;
