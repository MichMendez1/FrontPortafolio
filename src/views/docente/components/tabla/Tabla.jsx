import "./tabla.css"

 /* tabla para ver la asistencia o notas del curso  */
function tablaCurso(listaAlumnos, tipoTabla, setAsistenciaNota, handleSubmitAnotAsistencia){
	const inputAsistencia = (alumnoId) => {
		setAsistenciaNota(true)
		return <>
			<div className="caja-input">
				<label><input type="radio" name={alumnoId} value="presente" required/> Presente </label>
			</div>
			<div className="caja-input">
				<label><input type="radio" name={alumnoId} value="ausente" required/> Ausente </label>
			</div>
			<div className="caja-input">
				<label><input type="radio" name={alumnoId} value="justificado" required/> Justificado </label>
			</div>
		</>
	}
	const inputNotas = (alumno) => {
		setAsistenciaNota(false)
		return <>
			<label><input className="input-nota" type="number" name={alumno._id} min="1" max="7" step="0.1" placeholder={alumno.nota_1} nota={1}/> Nota 1 </label>
			<label><input className="input-nota" type="number" name={alumno._id} min="1" max="7" step="0.1" placeholder={alumno.nota_2} nota={2}/> Nota 2 </label>
			<label><input className="input-nota" type="number" name={alumno._id} min="1" max="7" step="0.1" placeholder={alumno.nota_3} nota={3}/> Nota 3 </label>
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
							key={alumno._id}
						>
							{alumno.nombres}
						</div>)}
				</div>
				<div className="columna">
					<div className="celda-titulo">Apellido</div>
					{listaAlumnos.map(alumno =>
						<div
							className="celda-contenido"
							key={alumno._id}  
						>
							{alumno.apellido_paterno+' '+alumno.apellido_materno}
						</div>)}
				</div>

				<form
					onSubmit={handleSubmitAnotAsistencia}
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
								? inputAsistencia(alumno._id) 
								: inputNotas(alumno)
							}
						</div>)
					}

					<div className="caja-btn-d">
						<input 
							className="btn-d btn-tabla" 
							type="submit" 
							form="formTabla"
							value="Aceptar">
						</input>
					</div>
				</form>
			</div>		
		</div>
	</>
}


 /* tabla para ver las  anotaciones de un alumno*/
function tablaAlumno(listaAnotaciones, borraAnotacion){
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
							key={anotacion._id}
							className="celda-contenido celda-anotaciones"
						>
							<div className="caja-anotacion">
								{anotacion.anotacion}
							</div>
							<button 
								className="btn-d btn-eliminar-d" 
								value={anotacion._id}
								onClick={borraAnotacion}>
									Borrar
							</button>
						</div>
					)}
				</div>	
			</div>	
		</div>
		</>
}



/* funcion principal */
function Tabla({listaAlumnos, listaAnotaciones, tipoTabla, useTabla, mostrarTabla, borraAnotacion, setAsistenciaNota, handleSubmitAnotAsistencia}) {
	
	if (!mostrarTabla){
		return <span>Lista....</span>
	}else {
		return (useTabla)
			? tablaCurso(listaAlumnos, tipoTabla, setAsistenciaNota, handleSubmitAnotAsistencia)
			: tablaAlumno(listaAnotaciones, borraAnotacion)
	} 
}

export default Tabla

