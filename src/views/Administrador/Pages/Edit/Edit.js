import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import Select from 'react-select';
import Spiner from "../../components/Spiner/Spiner";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./edit.css"

  
function Edit() {

  const [inputdata, setInputData] = useState({
    nombres: "",
    apellidop: "",
    apellidom: "",
    rut: "",
    trabajo: "",
    horas: "",
    sueldo: "",
    direccion: "",
    telefono: "",
    email: "",
  });

  const [status, setStatus] = useState("Active");
  //const [image,setImage] = useState("");
  //const [preview,setPreview] = useState("");

  const [showspin,setShowSpin] = useState(true)

  //status optios (Cuanta con 3 colegios)
  const options = [
    { value: 'Nuevos Horizontes A', label: 'Nuevos Horizontes A' },
    { value: 'Nuevos Horizontes B', label: 'Nuevos Horizontes B' },
    { value: 'Nuevos Horizontes C', label: 'Nuevos Horizontes C' },
  ];

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
  const submitUserData = (e) => {
    e.preventDefault();

    const { nombres, apellidop, apellidom, rut, trabajo, horas,
      sueldo, direccion, telefono, email } = inputdata;

    if (nombres === "") {
      toast.error("Nombres es requerido!")
    } else if (apellidop === "") {
      toast.error("Apellido Paterno es Requerido!")
      // } else if (apellidom === "") {
      //   toast.error("Apellido Materno es Requerido!")
      // } else if (rut === "") {
      toast.error("Rut es Requerido!")
    } else if (trabajo === "") {
      toast.error("Trabajo es Requerido!")
    } else if (horas === "") {
      toast.error("Horas es Requerido!")
    } else if (sueldo === "") {
      toast.error("Sueldo es Requerido!")
    } else if (direccion === "") {
      toast.error("Direccion es Requerido!")
    } else if (telefono === "") {
      toast.error("telefono es Requerido!")
    } else if (telefono.length > 9) {
      toast.error("Número invalido!")
    } else if (email === "") {
      toast.error("Corro es Requerido!")
    } else if (!email.includes("@")) {
      toast.error("Ingrese un correo valido!")
    } else if (status === "") {
      toast.error("Elija colegio!")
    } else {
      toast.success("El trabajador a sido ingresado!")
    }

  }
  return (
    <>
    
      <div className='container'>
        <h2 className='text-center mt-1'>Actualizar Trabajador</h2>
        <Card className='shadow mt-3 p-3'>
          <div className="profile_div text-center">
            {/* <img src={preview ? preview : "/logo.png"} alt="img" /> */}
          </div>

          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="text" name='nombres' value={inputdata.nombres} onChange={setInputValue} placeholder='Nombres' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Apellido Paterno</Form.Label>
                <Form.Control type="text" name='apellidop' value={inputdata.apellidop} onChange={setInputValue} placeholder='Primer Apellido' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Apellido Materno</Form.Label>
                <Form.Control type="text" name='appelidom' value={inputdata.apellidom} onChange={setInputValue} placeholder='Segundo Apellido' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Rut</Form.Label>
                <Form.Control type="text" name='rut' value={inputdata.rut} onChange={setInputValue} placeholder='Ingrese su Rut' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Trabajo</Form.Label>
                <Form.Control type="text" name='trabajo' value={inputdata.trabajo} onChange={setInputValue} placeholder='Trabajo' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Horas Contrato</Form.Label>
                <Form.Control type="number" name='horas' value={inputdata.horas} onChange={setInputValue} placeholder='Horas' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Sueldo</Form.Label>
                <Form.Control type="text" name='sueldo' value={inputdata.sueldo} onChange={setInputValue} placeholder='Sueldo' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" name='direccion' value={inputdata.direccion} onChange={setInputValue} placeholder='Ingrese su Direccion' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" name='telefono' value={inputdata.telefono} onChange={setInputValue} placeholder='Número Telefonico' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} placeholder='ingrese correo' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Codigo Colegio Contratado</Form.Label>
                <Select options={options} value={status} onChange={setStatusValue} />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={submitUserData}>
                Actualizar
              </Button>
            </Row>

          </Form>
        </Card>
        <ToastContainer position="top-right" />
      </div>
    </>
  )
}

export default Edit
