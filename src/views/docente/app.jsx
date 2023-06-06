import "./app.css"
import React from "react"
import responseCursos from "./mocks/lista-cursos.json"
import responseAlumnos from "./mocks/lista-alumnos.json"
import responseAnotaciones from "./mocks/lista-anotaciones.json"
import Tabla from "./components/tabla/Tabla"
import Modal from "./components/modal/Modal"
import Buscador from "./components/buscador/Buscador"
import CrearAnotacion from "./components/crearAnotacion/CrearAnotacion"
import { useState } from "react"
import logo from "./img/Nuevos_Horizontes.png"


function App() {
	const [listaAlumnos, setListaAlumno] = useState(null)
	const [estadoModal, setEstadoModal] = useState(false)
	const [anotaciones, setAnotaciones] = useState(null)
	const [useTipoTabla, setTipoTabla] = useState('asistencia')
	const [useTabla, setTabla] = useState(true)
	const [useBuscador, setBuscador] = useState(true)
	const [useCrearAnotacion, setCrearAnotacion] = useState(false)



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
				<div className="caja-hamburgueza"></div>
				{/* <button className="btn-hamburgeza">Expandir</button>
				<div class="hamburgeza" id="hamburgeza">
                	<a href="renderComponente.html" class="item-menu">Opciones</a>
                	<a href="#" class="item-menu">Opciones</a>
                	<a href="#" class="item-menu">Opciones</a>
                	<a href="#" class="item-menu">Opciones</a>
                	<a href="#" class="item-menu">Opciones</a>
        		</div>	 */}
				<div className="enlaces">
					<button 
						onClick={cambiarPage}
						className="btn-cabezara">
							Asistencia</button>
					<button 
						onClick={cambiarPage}
						className="btn-cabezara">
							Notas</button>
					<button 
						onClick={cambiarPage}
						className="btn-cabezara">
							Anotaciones</button>
				</div>
			</header>

			<h3 className="nombre-docente">Nombre Docente</h3>

			<div className="caja-componente">				
				<Buscador
					alumnos={responseAlumnos}
					cursos={responseCursos}
					anotaciones={responseAnotaciones}
					setAnotaciones={setAnotaciones}
					setAlumnos={setListaAlumno}
					useBuscador={useBuscador}
					setCrearAnotaciones={setCrearAnotacion}>
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
					useTabla={useTabla}>
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

