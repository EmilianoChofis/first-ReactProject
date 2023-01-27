import React from 'react';

function Saludar(props){
    console.log(props)
    const {texto, usuario:{nombre, apellido, edad, color="Chino"}, funcion} = props //a esto se le llama destructuración
    const funSaludar = ()=>{
        const cosa = document.getElementById('nombre').value
        alert( cosa )
        console.log( `te saluda tu amigo ${nombre} ${apellido}`)
    }
    return(
        <div>
            <h1>Hola, comprate el Doom Eternal esta en descuento</h1>
             <h2>{texto}</h2>
            <h2>{props.name}</h2> {/*acceso sin destructuración*/}
            <p>te saluda tu amigo {nombre} {apellido} {edad} {color}</p>
            <button onClick={()=>alert("y puros corrudos aestetik")} title="botoncito">Botoneame</button>
            <input type="text" title="nombre" id="nombre"/>
            <button onClick={funSaludar} title="botoncitoSaludo">Botoneame</button>
            <button onClick={funcion} title="botoncitoApp">Botoneame</button>
        </div>
    )
}

export default Saludar;