import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./register.css";

const RegistrarBloque = () => {
    const [Bloques, setBloques] = useState({
        id_bloque: "",
        nombre: "",
        id_asignatura: "",
        id_dia: "",
        id_curso: "",
        hora_inicio: "",
        hora_termino: "",
    });

    const handleInputChange = (e) => {
        setBloques({
            ...Bloques,
            [e.target.name]: e.target.value
        });
        console.log(Bloques);
    };

    const HacerFetch = async () => {
        let campoFaltante = "";
        
        if (Bloques.id_bloque === "") {
            campoFaltante = "ID Sala";
        } else if (Bloques.id_colegio === "") {
            campoFaltante = "ID Colegio";
        } else if (Bloques.siglas_bloque === "") {
            campoFaltante = "Sigla Sala";
        }
        
        if (campoFaltante !== "") {
            alert(`Por favor, completa el campo ${campoFaltante}.`);
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/bloques/', {
                method: 'POST',
                body: JSON.stringify(Bloques),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log(response);
            const json = await response.json();
            console.log(json);
            alert('hola');
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
                            <Form.Label>ID Sala</Form.Label>
                            <Form.Control type="text" name='id_bloque' onChange={handleInputChange} required placeholder='ID Sala' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>ID Colegio</Form.Label>
                            <Form.Control type="text" name='id_colegio' onChange={handleInputChange} required placeholder='ID Colegio' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Sigla Sala</Form.Label>
                            <Form.Control type="text" name='siglas_bloque' onChange={handleInputChange} required placeholder='Sigla Sala' />
                        </Form.Group>
                    </Row>
                    <Button className='btn btn-success' onClick={HacerFetch}>Crear Trabajo</Button>
                </Form>
            </Card>
            <ToastContainer position="top-right" />
        </div>
    );
};

export default RegistrarBloque;
