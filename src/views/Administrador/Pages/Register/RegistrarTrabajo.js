import React,{useState} from 'react'

const RegistrarTrabajo = () => {

    const [Trabajos,setTrabajos] = useState(
        {
            tipo_trabajo : "",
        }
    )

    const handleInputChange = (e) => {
        setTrabajos({
            ...Trabajos,
            [e.target.name]: e.target.value
        })
        console.log(Trabajos);
    }

    const HacerFetch = async ()=>{
        try {
            const response = await fetch('http://localhost:4000/api/trabajos/', {
                method: 'POST',
                body: JSON.stringify(Trabajos),
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
        <input type="text" class="form-control" onChange={handleInputChange} name='tipo_trabajo' id="exampleFormControlInput1" placeholder="name"/>
    </div>
        <button className='btn btn-success' onClick={()=>HacerFetch()} > Crear Trabajo </button>
    </div>
  )
}

export default RegistrarTrabajo