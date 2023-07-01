import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./register.css";

const RegistrarAnno = () => {
    const [Annos, setAnnos] = useState({
        id_anno: "",
        anno: "",
    });

    const handleInputChange = (e) => {
        setAnnos({
            ...Annos,
            [e.target.name]: e.target.value
        });
        console.log(Annos);
    };

    const HacerFetch = async () => {
        let campoFaltante = "";
        
        if (Annos.id_anno === "") {
            campoFaltante = "ID Anno";
        } else if (Annos.id_colegio === "") {
            campoFaltante = "ID Colegio";
        } else if (Annos.siglas_sala === "") {
            campoFaltante = "Sigla Anno";
        }
        
        if (campoFaltante !== "") {
            alert(`Por favor, completa el campo ${campoFaltante}.`);
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/annos/', {
                method: 'POST',
                body: JSON.stringify(Annos),
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
                            <Form.Label>ID Año</Form.Label>
                            <Form.Control type="text" name='id_anno' onChange={handleInputChange} required placeholder='ID Año' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Año</Form.Label>
                            <Form.Control type="text" name='anno' onChange={handleInputChange} required placeholder='Año' />
                        </Form.Group>
                    </Row>
                    <Button className='btn btn-success' onClick={HacerFetch}>Crear Trabajo</Button>
                </Form>
            </Card>
            <ToastContainer position="top-right" />
        </div>
    );
};

export default RegistrarAnno;
