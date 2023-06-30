import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./register.css";

const RegistrarSala = () => {
    const [Salas, setSalas] = useState({
        id_sala: "",
        id_colegio: "",
        siglas_sala: "",
    });

    const handleInputChange = (e) => {
        setSalas({
            ...Salas,
            [e.target.name]: e.target.value
        });
        console.log(Salas);
    };

    const HacerFetch = async () => {
        let campoFaltante = "";
        
        if (Salas.id_sala === "") {
            campoFaltante = "ID Sala";
        } else if (Salas.id_colegio === "") {
            campoFaltante = "ID Colegio";
        } else if (Salas.siglas_sala === "") {
            campoFaltante = "Sigla Sala";
        }
        
        if (campoFaltante !== "") {
            alert(`Por favor, completa el campo ${campoFaltante}.`);
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/salas/', {
                method: 'POST',
                body: JSON.stringify(Salas),
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
                            <Form.Control type="text" name='id_sala' onChange={handleInputChange} required placeholder='ID Sala' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>ID Colegio</Form.Label>
                            <Form.Control type="text" name='id_colegio' onChange={handleInputChange} required placeholder='ID Colegio' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Sigla Sala</Form.Label>
                            <Form.Control type="text" name='siglas_sala' onChange={handleInputChange} required placeholder='Sigla Sala' />
                        </Form.Group>
                    </Row>
                    <Button className='btn btn-success' onClick={HacerFetch}>Crear Trabajo</Button>
                </Form>
            </Card>
            <ToastContainer position="top-right" />
        </div>
    );
};

export default RegistrarSala;
