import "./tabla.css"


const handleSubmit = (event) =>{
	event.preventDefault()
	const datos = new FormData(event.target)
	console.log(datos)
}

const inputAsistencia = (alumnoId) =>{
	return (
		<>
			<div className="caja-input">
				<label><input type="radio" name={alumnoId} value="presente" /> Presente </label>
			</div>
			<div className="caja-input">
				<label><input type="radio" name={alumnoId} value="ausente" /> Ausente </label>
			</div>
			<div className="caja-input">
				<label><input type="radio" name={alumnoId} value="justificado" /> Justificado </label>
			</div>
		</>
	)
}

const inputNotas = (alumnoId) =>{
	return (
		<>
		<label><input className="input-nota" type="number" name={alumnoId} /> Nota 1 </label>
		<label><input className="input-nota" type="number" name={alumnoId} /> Nota 2 </label>
		<label><input className="input-nota" type="number" name={alumnoId} /> Nota 3 </label>
		</>
	)
}

const Columnas = (listaAlumnos, esTablaAsistencia, modal, setModal) => {
	return (
		<div className="tabla">
			<div className="caja-columnas">

				<div className="columna">
					<div className="titulo">Nombre</div>
					{listaAlumnos.map(alumno =>
						<div
							className="celda-contenido"
							key={alumno.id}
						>
							{alumno.nombre}
						</div>)}
				</div>
			
				<div className="columna">
					<div className="titulo">Apellido</div>
					{listaAlumnos.map(alumno =>
						<div
							className="celda-contenido"
							key={alumno.id}  
						>
							{alumno.apellido}
						</div>)}
				</div>

				<form
					onSubmit={handleSubmit}
					id="formTabla"
					className="columna"
				>
					<div className="titulo">Estado</div>
					{listaAlumnos.map(alumno =>
						<div
							key={alumno.id}
							className="celda-contenido celda-form"
						>
							{(esTablaAsistencia) ? inputAsistencia(alumno.nombre) : inputNotas(alumno.nombre)}
						</div>)}
				</form>
			</div>
					
			<div className="caja-btn">
				<button 
					className="btn btn-tabla" 
					type="submit" 
					form="formTabla"
					onClick={() => setModal(!modal)}>
						Aceptar
				</button>
			</div>		
		</div>
	)
}

const Tabla = ({ listaAlumnos, esTablaAsistencia, modal, setModal}) => {
	return (listaAlumnos)
		? Columnas(listaAlumnos, esTablaAsistencia, modal, setModal)
		: <span>Lista de alumnos....</span>
}

export default Tabla

