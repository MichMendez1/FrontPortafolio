import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import Select from 'react-select';
import Spiner from "../../components/Spiner/Spiner";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import "./register.css"



function RegistrarTrabajador() {


  const [inputdata, setInputData] = useState({
    id_trabajador: "",
    nombre: "",
    ap_paterno: "",
    ap_materno: "",
    rut: "",
    direccion: "",
    telefono: "",
    correo: "",
    id_colegio: "",
    id_trabajo: "",

  });

  const [status, setStatus] = useState("Active");
  const [showspin, setShowSpin] = useState(true);
  //const [image,setImage] = useState("");
  //const [preview,setPreview] = useState("");

  //setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value })
  }

  // status set
  const setStatusValue = (e) => {
    setStatus(e.value)
  }

  // profile set
  // const setProfile = (e)=>{
  //   setImage(e.target.files[0])
  // }

  //Registrar submit userdata
  const submitUserData = async (e) => {
    e.preventDefault();

    const { id_trabajador, nombre, ap_paterno, ap_materno, rut, direccion,
      telefono, correo, id_colegio, id_trabajo } = inputdata;

    if (id_trabajador === "") {
        toast.error("id trabajador es requerido!");
    } else  if (nombre === "") {
      toast.error("Nombres es requerido!");
    } else if (ap_paterno === "") {
      toast.error("Apellido Paterno es Requerido!");
    } else if (ap_materno === "") {
       toast.error("Apellido Materno es Requerido!");
    } else if (rut === "") {
      toast.error("Rut es Requerido!");
    } else if (direccion === "") {
      toast.error("Direccion es Requerido!");
    } else if (telefono === "") {
      toast.error("telefono es Requerido!");
    } else if (telefono.length > 9) {
      toast.error("Número invalido!");
    } else if (correo === "") {
      toast.error("Corro es Requerido!");
    } else if (!correo.includes("@")) {
      toast.error("Ingrese un correo valido!");
    } else if (id_colegio === "") {
      toast.error("ID_Colegio es Requerido!");
    } else if (id_trabajo === "") {
      toast.error("ID_Trabajo es Requerido!");
    } else {
      try {
        const response = await axios.post('http://localhost:4000/api/Trabajadores', {
    id_trabajador: "",
    nombre: "",
    ap_paterno: "",
    ap_materno: "",
    rut: "",
    direccion: "",
    telefono: "",
    correo: "",
    id_colegio: "",
    id_trabajo: "",
        });
        console.log(response);
        toast.success("El trabajador ha sido ingresado!");
      } catch (error) {
        console.error(error);
        toast.error("Error al guardar el trabajador");
      }
    }
  };
  



  /* const inputdata = (e) => {
    setTrabajador({
        ...Trabajador,
        [e.target.name]: e.target.value
    })
    console.log(Trabajador);
}

const HacerFetch = async ()=>{
    try {
        const response = await fetch('http://localhost:4000/api/Trabajadores/', {
            method: 'POST',
            body: JSON.stringify(Trabajador),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response);
        const json = await response.json();
        console.log(json);
        alert('hola')
    } catch (error) {
        console.log('error', error);
        alert('error')
    }
    } */


  // useEffect(()=>{
  //   if(image){
  //     setPreview(URL.createObjectURL(image))
  //   }
  // },[image])


  return (
    <>

      <div className='container'>
        <h2 className='text-center mt-1'>Registrar Trabajador</h2>
        <Card className='shadow mt-3 p-3'>
          <div className="profile_div text-center">
            {/* <img src={preview ? preview : "/logo.png"} alt="img" /> */}
          </div>

          <Form>
            <Row>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>ID_Trabajador</Form.Label>
                <Form.Control type="text" name='id_trabajador' value={inputdata.id_trabajador} onChange={setInputValue} placeholder='Nombre' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name='nombre' value={inputdata.nombre} onChange={setInputValue} placeholder='Nombre' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Apellido Paterno</Form.Label>
                <Form.Control type="text" name='ap_paterno' value={inputdata.ap_paterno} onChange={setInputValue} placeholder='Primer Apellido' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Apellido Materno</Form.Label>
                <Form.Control type="text" name='ap_materno' value={inputdata.ap_materno} onChange={setInputValue} placeholder='Segundo Apellido' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Rut</Form.Label>
                <Form.Control type="text" name='rut' value={inputdata.rut} onChange={setInputValue} placeholder='Ingrese su Rut' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" name='direccion' value={inputdata.direccion} onChange={setInputValue} placeholder='Trabajo' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" name='telefono' value={inputdata.telefono} onChange={setInputValue} placeholder='Número Telefonico' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name='correo' value={inputdata.correo} onChange={setInputValue} placeholder='ingrese correo' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>ID_Colegio</Form.Label>
                <Form.Control type="text" name='id_colegio' value={inputdata.id_colegio} onChange={setInputValue} placeholder='ingrese correo' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>ID_Trabajo</Form.Label>
                <Form.Control type="text" name='id_trabajo' value={inputdata.id_trabajo} onChange={setInputValue} placeholder='ingrese correo' />
              </Form.Group>


              <Button variant="primary" type="submit" onClick={submitUserData}>
                Registrar Trabajador
              </Button>
            </Row>

          </Form>
        </Card>
        <ToastContainer position="top-right" />
      </div>
    </>
  )
}

export default RegistrarTrabajador