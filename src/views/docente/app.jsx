import "./app.css"
import React from "react"
import responseCursos from "./mocks/lista-cursos.json"
import responseAlumnos from "./mocks/lista-alumnos.json"
import Tabla from "./components/Tabla"
import Modal from "./components/Modal"
import { useState } from "react"
import logo from "./img/Nuevos_Horizontes.png"


function App() {
	const [listaAlumnos, setListaAlumno] = useState(null)
	const [estadoModal, setEstadoModal] = useState(false)
	const [tabla, setTabla] = useState(true)

	const buscarCurso = (event) => {
		event.preventDefault()
		const datos = new FormData(event.target)
		const eleccion = datos.get('seleccionCurso')
		const curso = responseAlumnos.filter(alumno => alumno.curso === eleccion)
		if (curso.length === 0) return false
		setListaAlumno(curso)
	}

	return (
		<div className="pagina-asistencia">

			<header className="cabezera">
				<img className="img-cabezera" alt="logo-colegio" src={logo}/>
				<div className="enlaces">
					<button 
						onClick={()=>setTabla(!tabla)}
						className="btn-cabezara">
							Notas</button>
					<button 
						onClick={()=>setTabla(!tabla)}
						className="btn-cabezara">
							Asistencia</button>
					<button 
						disabled
						className="btn-cabezara">
							Anotaciones</button>
				</div>
			</header>

			<h3 className="nombre-docente">Nombre Docente</h3>

			<form className="form-seleccion-curso" onSubmit={buscarCurso}>
				<select 
					id="seleccionCurso" 
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
						{/* opciones de curso */}
						{responseCursos.map(curso => {
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

				<button className="btn" type="submit">Buscar</button>
			</form>

			<div className="caja-tabla">
				<Tabla 
					listaAlumnos={listaAlumnos}
					esTablaAsistencia={tabla}
					modal={estadoModal}
					setModal={setEstadoModal}>
				</Tabla>

				<Modal
					estado={estadoModal}
					setEstado={setEstadoModal}>
				</Modal>
			</div>

		</div>
	)
}

export default App

