 import React from "react";
 import { useState } from "react";
 import './App.css';

 import { BrowserRouter, Routes, Route } from "react-router-dom";

function App () {

    const [nombres,setNombres]=useState("");
    const [apellidopaterno,setApellidopaterno]=useState("");
    const [apellidomaterno,setApellidomaterno]=useState("");
    const [rut,setRut]=useState("");
    const [fechanacimiento,setFechanacimiento]=useState("");
    const [cargo,setCargo]=useState("");
    const [horas,setHoras]=useState("0");
    const [remuneracion,setRemuneracion]=useState("0");
    const [direccion,setDirecion]=useState("");
    const [telefono,setTelefono]=useState("");
    const [correo,setCorreo]=useState("");

    const mostrarDatos = ()=>{
        alert(nombres);
    }

     return (
        <div className="App">
            <div className="datos">
                <label>Nombres: <input 
                onChange={(event)=>{setNombres(event.target.value);
                }} type="text"/></label>
                <label>Apellido Paterno: <input 
                onChange={(event)=>{setApellidopaterno(event.target.value);
                }}type="text"/></label>
                <label>Apellido Materno: <input 
                onChange={(event)=>{setApellidomaterno(event.target.value);
                }}type="text"/></label>
                <label>Rut: <input 
                onChange={(event)=>{setRut(event.target.value);
                }}type="text"/></label>
                <label>Fecha de nacimiento: <input 
                onChange={(event)=>{setFechanacimiento(event.target.value);
                }} type="date"/></label>
                <label>Cargo: <input
                onChange={(event)=>{setCargo(event.target.value);
                }} type="text"/></label>
                <label>Horas Contrato: <input
                onChange={(event)=>{setHoras(event.target.value);
                }} type="number"/></label>
                <label>Remuneracion: <input
                onChange={(event)=>{setRemuneracion(event.target.value);
                }} type="number"/></label>
                <label>Dirección: <input
                onChange={(event)=>{setDirecion(event.target.value);
                }} type="text"/></label>
                <label>Telefono: <input
                onChange={(event)=>{setTelefono(event.target.value);
                }} type="number"/></label>
                <label>Correo: <input
                onChange={(event)=>{setCorreo(event.target.value);
                }} type="email"/></label>
                <button onClick={mostrarDatos}>Registrar</button>
            </div>
            </div>
     );
}
 export default App;