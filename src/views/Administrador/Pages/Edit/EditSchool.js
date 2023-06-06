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

  
function EditSchool() {

  const [inputdata, setInputData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
  });

  const [status, setStatus] = useState("Active");
  //const [image,setImage] = useState("");
  //const [preview,setPreview] = useState("");

  const [showspin,setShowSpin] = useState(true)

  //status optios (Cuanta con 3 colegios)


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

    const { name , address, mobile, email } = inputdata;

    if (name === "") {
      toast.error("Nombres es requerido!")
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
    } else {
      toast.success("El Colegio a sido Actualizado!")
    }

  }
  return (
    <>
    
      <div className='container'>
        <h2 className='text-center mt-1'>Actualizar Colegio</h2>
        <Card className='shadow mt-3 p-3'>
          <div className="profile_div text-center">
            {/* <img src={preview ? preview : "/logo.png"} alt="img" /> */}
          </div>

          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name='name' value={inputdata.nombres} onChange={setInputValue} placeholder='Nombre' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" name='address' value={inputdata.direccion} onChange={setInputValue} placeholder='Ingrese Direccion' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" name='mobile' value={inputdata.telefono} onChange={setInputValue} placeholder='Número Telefonico' />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} placeholder='ingrese correo' />
              </Form.Group>
              
              <Button variant="primary" type="submit" onClick={submitUserData}>
                Actualizar Colegio
              </Button>
            </Row>

          </Form>
        </Card>
        <ToastContainer position="top-right" />
      </div>
    </>
  )
}

export default EditSchool