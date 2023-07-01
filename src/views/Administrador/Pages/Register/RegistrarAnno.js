import React, { useState } from 'react';
import {
    MDBInput,
    MDBInputGroup,
    MDBBtn,
    MDBCheckbox,
    MDBValidation,
    MDBValidationItem
} from 'mdb-react-ui-kit';

function RegistrarAnno() {

    const [annos, setAnnos] = useState({
        id_anno: '',
        anno: '',
    });


    const handleInputChange = (e) => {
        setAnnos({
            ...annos,
            [e.target.name]: e.target.value
        });
        console.log(annos);
    };

    const HacerFetch = async () => {
        let campoFaltante = "";

        if (annos.id_anno === "") {
            campoFaltante = "ID Dia";
        } else if (annos.nombre_anno === "") {
            campoFaltante = "Año";
        }

        if (campoFaltante !== "") {
            alert(`Por favor, completa el campo ${campoFaltante}.`);
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/annos/', {
                method: 'POST',
                body: JSON.stringify(annos),
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
                        value={annos.id_anno}
                        name='id_anno'
                        onChange={handleInputChange}
                        id='validationCustom01'
                        required
                        label='ID Año'
                    />
                </MDBValidationItem>

                <MDBValidationItem tooltip className='col-md-4'>
                    <MDBInput
                        value={annos.anno}
                        name='anno'
                        onChange={handleInputChange}
                        id='validationCustom02'
                        required
                        label='Año'
                    />
                </MDBValidationItem>

                <div className='col-12'>
                    <MDBBtn type='submit' onClick={HacerFetch} >Registrar Año</MDBBtn>
                </div>
            </MDBValidation>
        </div>
    )
}

export default RegistrarAnno;






