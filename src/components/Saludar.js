import React from 'react';

function Saludar(props){
    console.log(props)
    const {texto} = props
    return(
        <div>
            <h1>Hola, comprate el Doom Eternal esta en descuento</h1>
            <h2>{texto}</h2>
        </div>
    )
}

export default Saludar;