import React, { useState } from 'react';
import {
    MDBInput,
    MDBInputGroup,
    MDBBtn,
    MDBCheckbox,
    MDBValidation,
    MDBValidationItem
} from 'mdb-react-ui-kit';

function RegistrarDia() {

    const [dias, setDias] = useState({
        id_dia: '',
        nombre_dia: '',
    });


    const handleInputChange = (e) => {
        setDias({
            ...dias,
            [e.target.name]: e.target.value
        });
        console.log(dias);
    };

    const HacerFetch = async () => {
        let campoFaltante = "";

        if (dias.id_dia === "") {
            campoFaltante = "ID Dia";
        } else if (dias.nombre_dia === "") {
            campoFaltante = "Nombre Dia";
        }

        if (campoFaltante !== "") {
            alert(`Por favor, completa el campo ${campoFaltante}.`);
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/dias/', {
                method: 'POST',
                body: JSON.stringify(dias),
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


    //   const onChange = (e: any) => {
    //     setFormValue({ ...formValue, [e.target.name]: e.target.value });
    //   };

    return (
        <div>
            <MDBValidation className='row g-3'>

                <MDBValidationItem tooltip className='col-md-4'>
                    <MDBInput
                        value={dias.id_dia}
                        name='id_dia'
                        onChange={handleInputChange}
                        id='validationCustom01'
                        required
                        label='ID Dia'
                    />
                </MDBValidationItem>

                <MDBValidationItem tooltip className='col-md-4'>
                    <MDBInput
                        value={dias.nombre_dia}
                        name='nombre_dia'
                        onChange={handleInputChange}
                        id='validationCustom02'
                        required
                        label='Last Nombre Dia'
                    />
                </MDBValidationItem>

                <div className='col-12'>
                    <MDBBtn type='submit' onClick={HacerFetch} >Registrar Dia</MDBBtn>
                </div>
            </MDBValidation>
        </div>
    )
}

export default RegistrarDia;






