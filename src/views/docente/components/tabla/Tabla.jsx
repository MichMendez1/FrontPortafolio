import "./tabla.css"
const cl = console.log

function handleSubmit(event) {
	event.preventDefault()
	const datos = new FormData(event.target)
	console.log(datos)
}


 /* tabla para ver la asistencia o notas del curso  */
function tablaCurso(listaAlumnos, tipoTabla, setModal, modal){
	const inputAsistencia = (alumnoId) => {
		return <>
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
	}
	const inputNotas = (alumnoId) => {
		return <>
			<label><input className="input-nota" type="number" name={alumnoId} /> Nota 1 </label>
			<label><input className="input-nota" type="number" name={alumnoId} /> Nota 2 </label>
			<label><input className="input-nota" type="number" name={alumnoId} /> Nota 3 </label>
		</>
	}

	return (!listaAlumnos)
		? <span>List....</span> 
		:  <> 
		<div className="tabla">
			<div className="caja-columnas">
				<div className="columna">
					<div className="celda-titulo">Nombre</div>
					{listaAlumnos.map(alumno =>
						<div
							className="celda-contenido"
							key={alumno.id}
						>
							{alumno.nombres}
						</div>)}
				</div>
				<div className="columna">
					<div className="celda-titulo">Apellido</div>
					{listaAlumnos.map(alumno =>
						<div
							className="celda-contenido"
							key={alumno.id}  
						>
							{alumno.apellido_paterno+' '+alumno.apellido_materno}
						</div>)}
				</div>

				<form
					onSubmit={handleSubmit}
					id="formTabla"
					className="columna"
				>
					<div className="celda-titulo">
						Estado
					</div>
					{listaAlumnos.map(alumno =>
						<div
							key={alumno.id}
							className="celda-contenido celda-form"
						>
							{(tipoTabla === 'asistencia') 
								? inputAsistencia(alumno.id) 
								: inputNotas(alumno.id)
							}
						</div>)}
				</form>
			</div>
					
			<div className="caja-btn">
				<button 
					className="btn-d btn-tabla" 
					type="submit" 
					form="formTabla"
					onClick={() => setModal(!modal)}>
						Aceptar
				</button>
			</div>		
		</div>
	</>
}


 /* tabla para ver las  anotaciones de un alumno*/
function tablaAlumno(listaAnotaciones){
	let contador = 0

	return (!listaAnotaciones) 
		? <span>Lista....</span>
		: <> 
		<div className="">
			<div className="caja-columnas">
				<div className="columnaContador">
					<div className="celda-titulo">N°</div>
					{listaAnotaciones.map(anotacion =>
						<div
							className="celda-contenido"
							key={anotacion.id}
						>
							{contador++}
						</div>)
					}
				</div>
				<div className="columnaAnotaciones">		
					<div className="celda-titulo">Anotaciones</div>
					{listaAnotaciones.map(anotacion =>
						<div
							key={anotacion.id}
							className="celda-contenido"
						>
							<p>{anotacion.texto}</p>
						</div>
					)}
				</div>	
			</div>	
		</div>
		</>
}



/* funcion principal */
function Tabla({listaAlumnos, listaAnotaciones, tipoTabla, modal, setModal, useTabla, mostrarTabla}) {
	// if (!mostrarTabla){
	// 	return <span>Lista....</span>
	// }else {
		return (useTabla)
			? tablaCurso(listaAlumnos, tipoTabla, setModal, modal)
			: tablaAlumno(listaAnotaciones)
	} 
// }

export default Tabla

