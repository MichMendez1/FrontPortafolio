import "./app.css"
import React from "react"
import Tabla from "./components/tabla/Tabla"
import Modal from "./components/modal/Modal"
import Buscador from "./components/buscador/Buscador"
import CrearAnotacion from "./components/crearAnotacion/CrearAnotacion"
import { useEffect, useState } from "react"
import Sidebar from './components/sidebar/Sidebar';

function App() {
	const [listaAlumnos, setListaAlumno] = useState(null)
	const [listaAnotaciones, setlistaAnotaciones] = useState(null)
	const [Alumnos, setAlumno] = useState(null)
	const [useMostrarTabla, setMostrarTabla] = useState(false)
	const [estadoModal, setEstadoModal] = useState(false)
	const [anotaciones, setAnotaciones] = useState(null)
	const [useTipoTabla, setTipoTabla] = useState('asistencia')
	const [useTabla, setTabla] = useState(true)
	const [useBuscador, setBuscador] = useState(true)
	const [useCrearAnotacion, setCrearAnotacion] = useState(false)
	const [useCursos, setCursos] = useState(null);    

	const [useDatoAnotacion, setDatoAnotacion] = useState(null);    
	const [useDatoIdAlumno, setDatoIdAlumno] = useState(null);    
	const [useBuscarAnotacion, setBuscarAnotacion] = useState(true);    
	const [useEventCrearAnotacion, setEventCrearAnotacion] = useState(true);    
	const [useAsistenciaNota, setAsistenciaNota] = useState(true);    
	const [useListaNotas, setListaNotas] = useState(true);    
	const [useBuscarNotas, setBuscarNotas] = useState(true);    


	const baseUrl="http://localhost:4000"

	/* traer todos los cursos */
	useEffect(() => {
		if (!useCursos) {
		  async function fetchData() {
			try {
			  const response = await fetch(`${baseUrl}/api/cursos/cursos`);
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
	  
	/* traer todos los estudiantes */
	useEffect(() => {
		  async function fetchData() {
			try {
			  const response = await fetch(`${baseUrl}/api/estudiantes/usuarios`);
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

	/* traer todas las anotaciones */
	useEffect(() => {
		  async function fetchData() {
			try {
			  const response = await fetch(`${baseUrl}/api/anotaciones/anotaciones`);
			  if (response.ok) {
				const anotaciones = await response.json();
				const listaAnotaciones = anotaciones;
				setlistaAnotaciones(listaAnotaciones);
			  } 
			} catch (error) {
			  console.log(error)
			}
		  }
		  fetchData();
	  }, [useBuscarAnotacion]);

	/* traer todas las notas */
	useEffect(() => {
		  async function fetchData() {
			try {
			  const response = await fetch(`${baseUrl}/api/notas/obtener-notas`);
			  if (response.ok) {
				const notas = await response.json();
				const listaNotas = notas;
				// console.log(listaNotas+''+notas);
				setListaNotas(listaNotas);
			} 
			} catch (error) {
			  console.log(error)
			}
		  }
		  fetchData();
	  }, [useBuscarNotas]);

	/* buscador de todo un curso de alumnos  */
	const buscarCurso = (event) => {
        event.preventDefault()
		const cursoCompleto = []
		const notasPorAlumno = []
		let nota1 = 0
		let nota2 = 0
		let nota3 = 0
        const datos = new FormData(event.target)
        const eleccion = datos.get('seleccionCurso')
        const curso = Alumnos.filter(alumno => alumno.cursoID === eleccion)
        // console.log(curso) 
		curso.forEach(c => {
			let not = (useListaNotas.filter(
				n => n.id_alumno === c._id
			))

			
			if(not.length !==0){ 
				not.forEach(i => {
					if(i.nombre_nota === "nota_1"){
						nota1 = i.nota 
					}
					if(i.nombre_nota === "nota_2"){
						nota2 = i.nota 
					}
					if(i.nombre_nota === "nota_3"){
						nota3 = i.nota 
					}
				})
			}

			cursoCompleto.push(
				{
				"_id":c._id,
				"nombres":c.nombres,
				"apellido_paterno":c.apellido_paterno,
				"apellido_materno":c.apellido_materno,
				"nota_1":nota1,
				"nota_2":nota2,
				"nota_3":nota3
				}
			)
			nota1=0
			nota2=0
			nota3=0
		});

        if (curso.length === 0) return false
		
        setListaAlumno(cursoCompleto)
        setMostrarTabla(true)
    }

    const buscarAnotaciones = (event) => {
        event.preventDefault()
		setEventCrearAnotacion(event)
        const datos = new FormData(event.target)
        const eleccion = datos.get('seleccionAlumno') 
        const textos = (listaAnotaciones)
            ?listaAnotaciones.filter(anotacion => anotacion.id_alumno === eleccion)
            :""
        setDatoIdAlumno(eleccion)
        if(eleccion) setCrearAnotacion(true) 
        if (textos.length === 0) {
            setMostrarTabla(false)
            return false
        }   
        setMostrarTabla(true)
        setAnotaciones(textos) 
    }

	  /* crear una anotacion */
	const handleSubmitAnotaciones = () => {
		if (!useDatoAnotacion) return 
		let dataAnotacion = {
			anotacion:useDatoAnotacion, 
			id_alumno:useDatoIdAlumno
		}
		const config = {
			method: 'POST',
			body: JSON.stringify(dataAnotacion),
			headers: {
				'Content-Type': 'application/json'
			},
		}
		fetch(`${baseUrl}/api/anotaciones/crear-anotacion`, config)
		.then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(setBuscarAnotacion(!useBuscarAnotacion))
		.then(buscarAnotaciones(useEventCrearAnotacion))
	}

	/* funcion para pasar lista o poner notas */
	function handleSubmitAnotAsistencia(event) {
		event.preventDefault()
		const datosForm = new FormData(event.target)
		const formLength = Array.from(datosForm.keys()).length
		const config = {
			method: 'POST',
			body: '',
			headers: {
				'Content-Type': 'application/json'
			},
		}
		let listaDatos = []
		const hoy = new Date()
		const fechaActual = hoy.toLocaleDateString();

		if(listaAlumnos.length > formLength) return  /* si no estan todos en la lista */

		/* si se pasara la lista */
		if(useAsistenciaNota){ 
			for (const d of datosForm.entries()) {
				listaDatos.push(
					{
						fecha: fechaActual,
						id_alumno: d[0], 
						estado: d[1]
					}
				)
			}
			config.body = JSON.stringify(listaDatos)
			fetch(`${baseUrl}/api/asistencia/pasar-lista`, config)
			.then(res => res.json())
			.then(listaDatos = '')
			.catch(error => console.error('Error:', error))

		}

		/* si se pondran notas */	
		if(!useAsistenciaNota){
			let contador = 0
			const notasCrear = []
			const notasActualizar = []
			setBuscarNotas(!useBuscarNotas)
			

			for (const d of datosForm.entries()) {
				contador ++
				if(contador > 3) contador = 1
				if(!d[1]) continue 
				listaDatos.push(
					{
						id_alumno: d[0],
						id_asignatura: null,
						nombre_nota: `nota_${contador}`,
						nota: d[1]
					}           
				)   
			}

			listaDatos.forEach(dato => {
				let notasExistentes = useListaNotas.findIndex(e => e.id_alumno===dato.id_alumno && e.nombre_nota===dato.nombre_nota)
				if(notasExistentes !== -1){
					notasActualizar.push(dato)
				}else{
					notasCrear.push(dato)
				}
			})
			
			config.body = JSON.stringify(notasCrear)
			fetch(`${baseUrl}/api/notas/crear-notas`, config)
			.then(res => res.json())
			.catch(error => console.error('Error:', error))


			config.body = JSON.stringify(notasActualizar)
			fetch(`${baseUrl}/api/notas/actualizar-notas`, config)
			.then(res => res.json())
			.catch(error => console.error('Error:', error))


			setBuscarNotas(!useBuscarNotas)
		}
	}
	

	const borraAnotacion = (e) => {
		// console.log(e.target.value)
		let data = {id:e.target.value}
		console.log(data)
		const config = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
		}
		fetch(`${baseUrl}/api/anotaciones/eliminar-anotacion`, config)
		.then(res => res.json())
		.catch(error => console.error('Error:', error))
	}


	const cambiarPage = (event) => {
		const pageActual = event.target.textContent.toLowerCase()
		if (pageActual === 'notas'){
			setTipoTabla('notas')
			setBuscador(true)
			setAnotaciones(true)
			setTabla(true)
			setCrearAnotacion(false)
			setBuscarNotas(!useBuscarNotas)
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

			<Sidebar cambiarPage={cambiarPage}/>

			<div className="contenido">	
				<div className="caja-componente superior">				
					<Buscador
						alumnos={Alumnos}
						cursos={useCursos}
						useBuscador={useBuscador}
						buscarCurso={buscarCurso}
						buscarAnotaciones={buscarAnotaciones}>
					</Buscador>
				</div>

				<div className="caja-componente">
					<CrearAnotacion
						useCrearAnotacion={useCrearAnotacion}
						modal={estadoModal}
						setModal={setEstadoModal}
						setDatoAnotacion={setDatoAnotacion}
						handleSubmitAnotaciones={handleSubmitAnotaciones}>
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
						mostrarTabla={useMostrarTabla}
						borraAnotacion={borraAnotacion}
						setAsistenciaNota={setAsistenciaNota}
						handleSubmitAnotAsistencia={handleSubmitAnotAsistencia}>
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

