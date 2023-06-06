import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import Select from 'react-select';
import Spiner from "../../components/Spiner/Spiner";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./register.css"


function RegisterAssistant() {



  const [inputdata, setInputData] = useState({
    name: "",
    lastname: "",
    secondlastname: "",
    rut: "",
    work: "",
    hours: "",
    salary: "",
    address: "",
    mobile: "",
    email: "",
    user: "",
    password: "",
  });

  const [status, setStatus] = useState("Active");
  const [showspin, setShowSpin] = useState(true);
  //const [image,setImage] = useState("");
  //const [preview,setPreview] = useState("");

  //status optios (Cuanta con 3 colegios)
  const options = [
    { value: 'Colegio_A', label: 'Colegio_A' },
    { value: 'Colegio_B', label: 'Colegio_B' },
    { value: 'Colegio_C', label: 'Colegio_C' },
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

    const { name, lastname, secondlastname, rut, work, hours,
      salary, address, mobile, email, user, password } = inputdata;

    if (name === "") {
      toast.error("Nombres es requerido!")
    } else if (lastname === "") {
      toast.error("Apellido Paterno es Requerido!")
      // } else if (secondlastname === "") {
      //   toast.error("Apellido Materno es Requerido!")
    } else if (rut === "") {
      toast.error("Rut es Requerido!")
    } else if (work === "") {
      toast.error("Trabajo es Requerido!")
    } else if (hours === "") {
      toast.error("Horas es Requerido!")
    } else if (salary === "") {
      toast.error("Sueldo es Requerido!")
    } else if (address === "") {
      toast.error("Direccion es Requerido!")
    } else if (mobile === "") {
      toast.error("telefono es Requerido!")
    } else if (mobile.length > 9) {
      toast.error("Número invalido!")
    } else if (email === "") {
      toast.error("Corro es Requerido!")
    } else if (!email.includes("@")) {
      toast.error("Ingrese un correo valido!")
    } else if (status === "") {
      toast.error("Elija colegio!")
    } else if (user === "") {
      toast.error("Ingrese un Usuario")
    } else if (password === "") {
      toast.error("Ingrese una contraseña!")
    } else {
      toast.success("El trabajador a sido ingresado!")
    }

  }

  // useEffect(()=>{
  //   if(image){
  //     setPreview(URL.createObjectURL(image))
  //   }
  // },[image])


  return (
    <>

      <div className='container'>
        <h2 className='text-center mt-1'>Registrar Asistente</h2>
        <Card className='shadow mt-3 p-3'>
          <div className="profile_div text-center">
            {/* <img src={preview ? preview : "/logo.png"} alt="img" /> */}
          </div>

          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="text" name='name' value={inputdata.nombres} onChange={setInputValue} placeholder='Nombres' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Apellido Paterno</Form.Label>
                <Form.Control type="text" name='lastname' value={inputdata.apellidop} onChange={setInputValue} placeholder='Primer Apellido' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Apellido Materno</Form.Label>
                <Form.Control type="text" name='secondlastname' value={inputdata.apellidom} onChange={setInputValue} placeholder='Segundo Apellido' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Rut</Form.Label>
                <Form.Control type="text" name='rut' value={inputdata.rut} onChange={setInputValue} placeholder='Ingrese su Rut' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Trabajo</Form.Label>
                <Form.Control type="text" name='work' value={inputdata.trabajo} onChange={setInputValue} placeholder='Trabajo' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Horas Contrato</Form.Label>
                <Form.Control type="number" name='hours' value={inputdata.horas} onChange={setInputValue} placeholder='Horas' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Sueldo</Form.Label>
                <Form.Control type="text" name='salary' value={inputdata.sueldo} onChange={setInputValue} placeholder='Sueldo' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" name='address' value={inputdata.direccion} onChange={setInputValue} placeholder='Ingrese su Direccion' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" name='mobile' value={inputdata.telefono} onChange={setInputValue} placeholder='Número Telefonico' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} placeholder='ingrese correo' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Codigo Colegio Contratado</Form.Label>
                <Select options={options} value={status} onChange={setStatusValue} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" name='user' value={inputdata.usuario} onChange={setInputValue} placeholder='Usuario' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="text" name='password' value={inputdata.contraseña} onChange={setInputValue} placeholder='Contraseña' />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={submitUserData}>
                Registrar Asistente
              </Button>
            </Row>

          </Form>
        </Card>
        <ToastContainer position="top-right" />
      </div>
    </>
  )
}

export default RegisterAssistant