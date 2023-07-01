import React,{useState} from 'react'

const RegistrarAsignatura = () => {

    const [Asignatura,setAsignatura] = useState(
        {
            nombre : "",
            id_Profesor:""
        }
    )

    const handleInputChange = (e) => {
        setAsignatura({
            ...Asignatura,
            [e.target.name]: e.target.value
        })
        console.log(Asignatura);
    }

    const HacerFetch = async ()=>{
        try {
            const response = await fetch('http://localhost:4000/api/asignaturas/', {
                method: 'POST',
                body: JSON.stringify(Asignatura),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log(response);
            const json = await response.json();
            console.log(json);
            alert('hola')
        } catch (error) {
            console.log('error', error);
            alert('error')
        }
    }

  return (
    <div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
        <input type="text" class="form-control" onChange={handleInputChange} name='nombre' id="exampleFormControlInput1" placeholder="name"/>
        <label for="exampleFormControlInput1"  class="form-label">ID Profesor</label>
        <input type="text" class="form-control" onChange={handleInputChange} name='id_Profesor' id="exampleFormControlInput1" placeholder="ID"/>
    </div>
        <button className='btn btn-success' onClick={()=>HacerFetch()} > Crear Asignatura </button>
    </div>
  )
}

export default RegistrarAsignatura