import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import Spiner from "../../components/Spiner/Spiner";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./register.css"

function RegisterSchool() {


    const [inputdata, setInputData] = useState({
      name: "",
      code: "",
      address: "",
      mobil: "",
      email: "",
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
    const submitUserData = (e) => {
      e.preventDefault();
  
      const { name, code, address, mobil, email } = inputdata;
      if (name === "") {
        toast.error("Nombre es requerido!")
      } else if (code === "") {
        toast.error("Codigo es Requerido!")
      } else if (address === "") {
        toast.error("Direccion es Requerido!")
      } else if (mobil === "") {
        toast.error("telefono es Requerido!")
      } else if (mobil.length > 9) {
        toast.error("Número invalido!")
      } else if (email === "") {
        toast.error("Corro es Requerido!")
      } else if (!email.includes("@")) {
        toast.error("Ingrese un correo valido!")
      } else {
        toast.success("El establecimiento a sido ingresado!")
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
          <h2 className='text-center mt-1'>Registrar Colegio</h2>
          <Card className='shadow mt-3 p-3'>
            <div className="profile_div text-center">
              {/* <img src={preview ? preview : "/logo.png"} alt="img" /> */}
            </div>
  
            <Form>
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" name='name' value={inputdata.nombres} onChange={setInputValue} placeholder='Nombres' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Codigo Colegio </Form.Label>
                  <Form.Control type="text" name='code' value={inputdata.codigo} onChange={setInputValue} placeholder='Codigo Colegio' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Direccion</Form.Label>
                  <Form.Control type="text" name='address' value={inputdata.direccion} onChange={setInputValue} placeholder='Ingrese su Direccion' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="text" name='mobil' value={inputdata.telefono} onChange={setInputValue} placeholder='Número Telefonico' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} placeholder='ingrese correo' />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={submitUserData}>
                  Registrar Colegio
                </Button>
              </Row>
            </Form>
          </Card>
          <ToastContainer position="top-right" />
        </div>
      </>
    )
  }
  
  export default RegisterSchool