import React,{useState} from 'react'

const Poc = () => {

    const [Estudiante,setEstudiante] = useState(
        {
            nombre : "",
            apellido_paterno:"",
            rut : "1-9",
            email : "",
            password: "",
            cursoID: "B504"
        }
    )

    const handleInputChange = (e) => {
        setEstudiante({
            ...Estudiante,
            [e.target.name]: e.target.value
        })
        console.log(Estudiante);
    }

    const HacerFetch = async ()=>{
        try {
            const response = await fetch('http://localhost:4000/api/estudiantes/', {
                method: 'POST',
                body: JSON.stringify(Estudiante),
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
        <input type="text" class="form-control" onChange={handleInputChange} name='nombre' id="exampleFormControlInput1" placeholder="name@example.com"/>
        <label for="exampleFormControlInput1"  class="form-label">Apellido</label>
        <input type="text" class="form-control" onChange={handleInputChange} name='apellido_paterno' id="exampleFormControlInput1" placeholder="name@example.com"/>
        <label for="exampleFormControlInput1" class="form-label">Email </label>
        <input type="email" class="form-control" onChange={handleInputChange} name='email' id="exampleFormControlInput1" placeholder="name@example.com"/>
        <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
        <input type="text" class="form-control" onChange={handleInputChange} name='password' id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>

        <button className='btn btn-success' onClick={()=>HacerFetch()} > Crear Estudiante </button>
    </div>
  )
}

export default Poc