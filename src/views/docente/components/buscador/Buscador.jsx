import "./buscador.css"
import { useState } from "react"

const cl = console.log

/* cuando se quiere pasar asistencia o colocar notas */
function formCurso(buscarCurso, cursos){
    return <>
        <form className="form-seleccion-curso" onSubmit={buscarCurso}>
            <select 
                id="seleccionCurso" 
                className="curso-select"
                name="seleccionCurso" 
                placeholder="Buscar curso">
                    {/* opcion por defecto */}
                    <option 
                        value={null} 
                        selected 
                        disabled
                    >
                        Curso A.. Curso B... Curso C....
                    </option>
                    {/* opciones de alumno */}
                    {cursos.map(curso => {
                        return(
                            <option
                            key={curso.id}
                            value={curso.nombre}
                            >
                                {curso.nombre}
                            </option>
                        )
                    })}
            </select>

            <button className="btn btn-buscar" type="submit">Buscar</button>
        </form>
    </>
}


/* cuando se quiere ver las anotaciones */
function formCursoAlumno(buscarAnotaciones, cursos, alumnos, listaAlumnos, setListaAlumno){

    const handleChange = (event) => {
        let eleccion = event.target.value
        const curso = alumnos.filter(alumno => alumno.curso === eleccion)
        if (curso.length === 0) return false
        setListaAlumno(curso)
    }


    return <>
        <form className="form-seleccion-curso" onSubmit={buscarAnotaciones}>
            <select 
                id="seleccionCurso" 
                className="select-curso"
                name="seleccionCurso" 
                placeholder="Buscar curso"
                onChange={handleChange} >
                    {/* opcion por defecto */}
                    <option 
                        value={null} 
                        selected 
                        disabled
                    >
                        Curso A.. Curso B... Curso C....
                    </option>
                    {/* opciones de curso */}
                    {cursos.map(curso => {
                        return(
                            <option
                            key={curso.id}
                            value={curso.nombre}
                            >
                                {curso.nombre}
                            </option>
                        )
                    })}
            </select>
            <select 
                id="seleccionAlumno" 
                className="select-alumno"
                name="seleccionAlumno" 
                placeholder="Buscar Alumno">
                    {/* opcion por defecto */}
                    <option 
                        value={null} 
                        selected 
                        disabled
                    >
                        Alumno A...  Alumno B...  Alumno C....
                    </option>
                    {/* opciones de curso */}
                    {listaAlumnos &&
                          listaAlumnos.map(alumno => {
                            return(
                                <option
                                key={alumno.id}
                                value={alumno.id}
                                >
                                    {alumno.nombre}
                                </option>
                            )
                        })}
            </select>
            
            
            <button className="btn" type="submit">Buscar</button>
        </form>
    </>
}




/* funcion principal */
function Buscador ({alumnos, cursos, anotaciones, setAnotaciones, setAlumnos, useBuscador, setCrearAnotaciones}){
    const [listaAlumnos, setListaAlumno] = useState(null)

    const buscarCurso = (event) => {
        event.preventDefault()
        const datos = new FormData(event.target)
        const eleccion = datos.get('seleccionCurso')
        const curso = alumnos.filter(alumno => alumno.curso === eleccion)
        if (curso.length === 0) return false
        setAlumnos(curso)
    }

    const buscarAnotaciones = (event) => {
        // console.log('ha')
        event.preventDefault()
        const datos = new FormData(event.target)
        const eleccion = parseInt(datos.get('seleccionAlumno')) 
        const textos = anotaciones.filter(anotacion => anotacion.id_alumno === eleccion)
        if (textos.length === 0) return false   
        setAnotaciones(textos)  
        setCrearAnotaciones(true)   
    }

    return (useBuscador)
        ? formCurso(buscarCurso, cursos)
        : formCursoAlumno(buscarAnotaciones, cursos, alumnos, listaAlumnos, setListaAlumno)
}

export default Buscador












