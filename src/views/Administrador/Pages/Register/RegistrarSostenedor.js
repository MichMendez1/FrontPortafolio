import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./register.css";

const RegistrarSostenedor = () => {
    const [Sostenedores, setSostenedor] = useState({
        id_sostenedor: "",
        nombre: "",
        ap_paterno: "",
        ap_materno: "",
        rut: "",
        direccion: "",
        telefono: "",
        correo: "",
    });

    const handleInputChange = (e) => {
        setSostenedor({
            ...Sostenedores,
            [e.target.name]: e.target.value
        });
        console.log(Sostenedores);
    };

    const HacerFetch = async () => {
        let campoFaltante = "";
        
        if (Sostenedores.id_sostenedor === "") {
            campoFaltante = "ID Sostenedor";
        } else if (Sostenedores.nombre === "") {
            campoFaltante = "Nombre";
        } else if (Sostenedores.ap_paterno === "") {
            campoFaltante = "Apellido Paterno";
        } else if (Sostenedores.ap_materno === "") {
            campoFaltante = "Apellido Materno";
        } else if (Sostenedores.rut === "") {
            campoFaltante = "Rut";
        } else if (Sostenedores.direccion === "") {
            campoFaltante = "Dirección";
        } else if (Sostenedores.telefono === "") {
            campoFaltante = "Teléfono";

        } else if (Sostenedores.correo === "") {
            campoFaltante = "Correo";
        }
        
        if (campoFaltante !== "") {
            alert(`Por favor, completa el campo ${campoFaltante}.`);
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/Sostenedores/', {
                method: 'POST',
                body: JSON.stringify(Sostenedores),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log(response);
            const json = await response.json();
            console.log(json);
            alert('Registro Exitoso');
        } catch (error) {
            console.log('error', error);
            alert('error');
        }
    };

    return (
        <div className='container'>
            <Card className='shadow mt-3 p-3'>
                <Form>
                    <Row>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>ID Sostenedor</Form.Label>
                            <Form.Control type="text" name='id_sala' onChange={handleInputChange} required placeholder='ID Sostenedor' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name='nombre' onChange={handleInputChange} required placeholder='ID Colegio' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Apellido Paterno</Form.Label>
                            <Form.Control type="text" name='ap_paterno' onChange={handleInputChange} required placeholder='Sigla Sostenedor' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Apellido Materno</Form.Label>
                            <Form.Control type="text" name='ap_materno' onChange={handleInputChange} required placeholder='Sigla Sostenedor' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Rut</Form.Label>
                            <Form.Control type="text" name='rut' onChange={handleInputChange} required placeholder='Sigla Sostenedor' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label> Dirección</Form.Label>
                            <Form.Control type="text" name='direccion' onChange={handleInputChange} required placeholder='Sigla Sostenedor' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" name='telefono' onChange={handleInputChange} required placeholder='Sigla Sostenedor' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="text" name='correo' onChange={handleInputChange} required placeholder='Sigla Sostenedor' />
                        </Form.Group>
                    </Row>
                    <Button className='btn btn-success' onClick={HacerFetch}>Crear Trabajo</Button>
                </Form>
            </Card>
            <ToastContainer position="top-right" />
        </div>
    );
};

export default RegistrarSostenedor;
