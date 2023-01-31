import logo from './logo.svg';
import './App.css';
import HolaMundo, {HolaPais} from "./components/HolaMundo";
import Saludar from "./components/Saludar";
import {useState, useEffect} from "react";

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


  const [estadoAuto, seteStadoAuto]= useState(false)
  const turnOff=()=>{
    //seteStadoAuto(!estadoAuto)
    seteStadoAuto(preValue=>!preValue)
    setConteo(conteo+1)
  }
  const [conteo, setConteo] = useState(0)

  useEffect(()=>{
    console.log("el conteo cambio "+conteo)
  },[conteo])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Saludar texto="mi primer prop"
          name = {name}
          usuario = {objeto}
                 funcion = {funApp}
        />*/}
        <h3>El automovil esta: {estadoAuto?"encendido":"apagado"}</h3>
        <h3>Has dado {conteo} clicks</h3>
        <button onClick={turnOff}>Encender/Apagar</button>
      </header>
    </div>
  );
}

export default App;
