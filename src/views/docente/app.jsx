import "./app.css"
import React from "react"
// import responseCursos from "./mocks/lista-cursos.json"
// import responseAlumnos from "./mocks/lista-alumnos.json"
import responseAnotaciones from "./mocks/lista-anotaciones.json"
import Tabla from "./components/tabla/Tabla"
import Modal from "./components/modal/Modal"
import Buscador from "./components/buscador/Buscador"
import CrearAnotacion from "./components/crearAnotacion/CrearAnotacion"
import { useEffect, useState } from "react"
import logo from "./img/Nuevos_Horizontes.png"
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';


function App() {
	const [listaAlumnos, setListaAlumno] = useState(null)
	const [Alumnos, setAlumno] = useState(null)
	const [useMostrarTabla, setMostrarTabla] = useState(false)
	const [estadoModal, setEstadoModal] = useState(false)
	const [anotaciones, setAnotaciones] = useState(null)
	const [useTipoTabla, setTipoTabla] = useState('asistencia')
	const [useTabla, setTabla] = useState(true)
	const [useBuscador, setBuscador] = useState(true)
	const [useCrearAnotacion, setCrearAnotacion] = useState(false)

	const [useCursos, setCursos] = useState(null);    /* //////////////////// */

	const baseUrl="http://localhost:3001"

	useEffect(() => {
		if (!useCursos) {
		  async function fetchData() {
			try {
			  const response = await fetch(`${baseUrl}/cursos`);
			  if (response.ok) {
				const cursos = await response.json();
				const listaCursos = [];
				cursos.forEach(e => {
					if(e.nombre) listaCursos.push(e.nombre)
				});
				setCursos(listaCursos);
			  } 
			} catch (error) {
			  console.log(error)
			}
		  }
		  fetchData();
		}
	  }, [useCursos]);
	  
	useEffect(() => {
		  async function fetchData() {
			try {
			  const response = await fetch(`${baseUrl}/estudiantes`);
			  if (response.ok) {
				const estudiantes = await response.json();
				const listaEstudiantes = estudiantes;
				setAlumno(listaEstudiantes);
			  } 
			} catch (error) {
			  console.log(error)
			}
		  }
		  fetchData();
	  }, []);

	


	const cambiarPage = (event) => {
		const pageActual = event.target.textContent.toLowerCase()

		if (pageActual === 'notas'){
			setTipoTabla('notas')
			setBuscador(true)
			setAnotaciones(true)
			setTabla(true)
			setCrearAnotacion(false)
		}
		if (pageActual === 'asistencia'){
			setTipoTabla('asistencia')
			setBuscador(true)
			setAnotaciones(true)
			setTabla(true)
			setCrearAnotacion(false)
		}
		if (pageActual === 'anotaciones'){
			setListaAlumno(null)
			setTipoTabla('anotaciones')
			setBuscador(false)
			setAnotaciones(false)
			setTabla(false)
			// setCrearAnotacion(true)
		}
	}


	return (
		<div className="pagina-asistencia">
			
			<header className="cabezera">
				<img className="img-cabezera" alt="logo-colegio" src={logo}/>
				<div className="enlaces">
					<button 
						onClick={cambiarPage}
						className="btn-cabezara">
							<LocalLibraryOutlinedIcon className="icon" />
							Asistencia
					</button>
					<button 
						onClick={cambiarPage}
						className="btn-cabezara">
							<SchoolOutlinedIcon className="icon" />
							Notas</button>
					<button 
						onClick={cambiarPage}
						className="btn-cabezara">
							<EditNoteIcon className="icon" />
							Anotaciones
					</button>
				</div>
			</header>

			<div className="contenido">	
				<div className="caja-componente">				
					<Buscador
						alumnos={Alumnos}
						// alumnos={responseAlumnos}
						// cursos={responseCursos}
						cursos={useCursos}
						anotaciones={responseAnotaciones}
						setAnotaciones={setAnotaciones}
						setAlumnos={setListaAlumno}
						useBuscador={useBuscador}
						setCrearAnotaciones={setCrearAnotacion}
						setMostrarTabla={setMostrarTabla}>
					</Buscador>
				</div>

				<div className="caja-componente">
					<CrearAnotacion
						useCrearAnotacion={useCrearAnotacion}
						modal={estadoModal}
						setModal={setEstadoModal}>
					</CrearAnotacion>
				</div>
		

				<div className="caja-componente">
					<Tabla 
						listaAlumnos={listaAlumnos}
						listaAnotaciones={anotaciones}
						tipoTabla={useTipoTabla}
						modal={estadoModal}
						setModal={setEstadoModal}
						useTabla={useTabla}
						mostrarTabla={useMostrarTabla}>
					</Tabla>

					<Modal
						estado={estadoModal}
						setEstado={setEstadoModal}>
					</Modal>
				</div>
			</div>
		</div>
	)
}

export default App

