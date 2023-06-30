import "./buscador.css"
import { useState } from "react"


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
                            key={curso}
                            value={curso}
                            >
                                {curso.replace('_', ' ').toUpperCase()}
                            </option>
                        )
                    })}
            </select>

            <button className="btn-d btn-buscar" type="submit">Buscar</button>
        </form>
    </>
}


/* cuando se quiere ver las anotaciones */
function formCursoAlumno(buscarAnotaciones, cursos, alumnos, listaAlumnos, setListaAlumno){

    const handleChange = (event) => {
        let eleccion = event.target.value
        const curso = alumnos.filter(alumno => alumno.cursoID === eleccion)
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
                            key={curso}
                            value={curso}
                            >
                                {curso.replace('_', ' ').toUpperCase()}
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
                                key={alumno.nombres+' '+alumno.apellido_paterno+' '+alumno.apellido_materno}
                                value={alumno._id}
                                // value={alumno.nombres+' '+alumno.apellido_paterno+' '+alumno.apellido_materno}
                                >
                                    {alumno.nombres+' '+alumno.apellido_paterno+' '+alumno.apellido_materno}
                                </option>
                            )
                        })}
            </select>
            
            <button className="btn-d" type="submit">Buscar</button>
        </form>
    </>
}




/* funcion principal */
function Buscador ({alumnos, cursos, useBuscador, buscarCurso, buscarAnotaciones}){
    const [listaAlumnos, setListaAlumno] = useState(null)

    if(!cursos) return <div>Buscador....</div>

    return (useBuscador)
        ? formCurso(buscarCurso, cursos)
        : formCursoAlumno(buscarAnotaciones, cursos, alumnos, listaAlumnos, setListaAlumno)
}

export default Buscador












