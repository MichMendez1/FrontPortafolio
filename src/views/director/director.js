import React, { Fragment, useEffect, useState } from "react";
import Gato from '../../img/gato.jpg'
import { useNavigate } from 'react-router-dom'
import Calendario from '../../img/calendar2-date.svg';
import FlechaAtras from '../../img/arrow-left-square-fill.svg';
import Personas from '../../img/people-fill.svg';
import Moneda from '../../img/coin.svg';


const Director = () => {

    const navigate = useNavigate();

    const [vista, setVista] = useState(0);
    const [selectCurso, setSelectcurso] = useState(0);
    const [selectAlumno, setSelectAlumno] = useState(0);
    const [estadoInput,setEstadoInput] = useState('Disable')
    const [cursos, setCursos] = useState([
        {
            nombre: '1-A',
            numAlumnos: 3,
            profJefe: 'Juan',
            id: 1,
            
        }, {
            nombre: '1-B',
            numAlumnos: 8,
            profJefe: 'Eduardo',
            id: 2,
            
        }
    ])


    const [alumnos,setAlumno] = useState(
        [
            {
                id:1,
                nombre: 'Esteban',
                promedioGeneral: 5.4,
                apoderado: 'Antonio',
                apellido_materno:'Silva',
                apellido_paterno:'Torres',
                correo: 'esteban@colegionh.cl',
                idCurso:1
            },
            {
                id:2,
                nombre: 'Andres',
                apellido_materno:'Silva',
                apellido_paterno:'Torres',
                promedioGeneral: 4.0,
                apoderado: 'Roberto',
                correo: 'andres@colegionh.cl',
                idCurso:1
            },
            {
                id:3,
                nombre: 'Eduardo',
                apellido_materno:'Silva',
                apellido_paterno:'Torres',
                promedioGeneral: 6.0,
                apoderado: 'alejandro',
                correo: 'Eduardo@colegionh.cl',
                idCurso:2
            },
        ]
    )

    const [Profesores,setProfesores] = useState(
        [
            {
                nombre:'Juan',
                asignatura:'Matematicas',
                sueldo:500000,
                jefatura:'1-A'
            },
            {
                nombre:'Eduardo',
                asignatura:'Lenguaje',
                sueldo:500000,
                jefatura:'1-B'
            }
        ]
    )

    const [gastos,setGastos]=useState(
        [
            {
                nombre:'Agua',
                costo:200000,
            },
            {
                nombre:'Electricidad',
                costo:350000,
            },
            {
                nombre:'Gas',
                costo:600000,
            },
            {
                nombre:'Sueldo Profesores',
                costo:3000000,
            },
            {
                nombre:'Sueldo Cocina',
                costo:1000000,
            },
            {
                nombre:'Sueldo administracion',
                costo:2000000,
            },




        ]
    )

    const [total,setTotal]=useState(200000+350000+600000+3000000+1000000+2000000)

    

    const Volver = () => {
        navigate('/login');
    }

    const SeleccionarCurso = (numVista, numCurso) => {
        setSelectcurso(numCurso);
        setVista(numVista);
    }

    const SeleccionarAlumno = (numVista, numAlumno) => {
        setSelectAlumno(numAlumno);
        setVista(numVista);
    }




    const Render0 = () => {
        //General
        return (
            
            <div className="row" >
                <div className="col-12" style={{ paddingTop: '2%' }} >
                        <div style={{ paddingTop: '2%' }} >
                            <h1 style={{ color: '#45b0e5' }} >Bienvenido </h1>
                        </div>
                    </div>
                <div className="offset-1 col-11 row" style={{ paddingTop: '5%' }} >
                    <div onClick={() => setVista(1)} className="col-2" style={{ backgroundColor: '#0071bc', textAlign: 'center', paddingTop: '5%', borderRadius: '50%', aspectRatio: '1/1', cursor: 'pointer' }} >
                        <div>
                            <img src={Calendario} style={{ width: '20%', color: 'white' }} />
                        </div>
                        <h2>Cursos</h2>
                    </div>
                    <div onClick={() => setVista(4)} className="offset-1 col-2" style={{ backgroundColor: '#45b0e5', textAlign: 'center', paddingTop: '5%', borderRadius: '50%', aspectRatio: '1/1', cursor: 'pointer' }} >
                        <div>
                            <img src={Personas} style={{ width: '20%', color: 'white' }} />
                        </div>
                        <h2>Trabajadores</h2>
                    </div>
                    <div onClick={() => setVista(8)} className="offset-1 col-2" style={{ backgroundColor: '#0071bc', textAlign: 'center', paddingTop: '5%', borderRadius: '50%', aspectRatio: '1/1', cursor: 'pointer' }} >
                        <div>
                            <img src={Moneda} style={{ width: '20%', color: 'white' }} />
                        </div>
                        <h2>Gastos</h2>
                    </div>
                </div>
            </div>
        )
    }


    const RenderVistas = () => {
        //Cursos
        if (vista === 1) {
            return (
                <div className="row" >
                    <div className="col-12" style={{ paddingTop: '2%' }} >
                        <img onClick={() => setVista(0)} src={FlechaAtras} style={{ width: '3%', cursor: 'pointer' }} />
                        <div style={{ paddingTop: '2%' }} >
                            <h1 style={{ color: '#0071bc' }} >Cursos</h1>
                        </div>
                    </div>
                    <div className="offset-1 col-10" style={{ paddingTop: '8%' }} >
                        <table class="table">
                            <thead>
                                <tr style={{ textAlign: 'center' }} >
                                    <th scope="col">Curso</th>
                                    <th scope="col">Profesor jefe</th>
                                    <th scope="col">Alumnos</th>
                                    <th scope="col">Ver</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cursos.map((value, index) =>
                                    <tr style={{ textAlign: 'center' }} >
                                        <th>{value.nombre} </th>
                                        <td>{value.profJefe} </td>
                                        <td>{value.numAlumnos}</td>
                                        <td><button onClick={() => SeleccionarCurso(2, value.id)} className="btn btn-success" >Detalles </button>  </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        //Curso
        if (vista === 2) {
            return (
                <div className="row" >
                    <div className="col-12" style={{ paddingTop: '2%' }} >
                        <img onClick={() => setVista(1)} src={FlechaAtras} style={{ width: '3%', cursor: 'pointer' }} />
                        <div style={{ paddingTop: '2%' }} >
                            <h1 style={{ color: '#0071bc' }} >Curso {cursos[selectCurso-1].nombre} </h1>
                        </div>
                    </div>
                    <div className="offset-1 col-10" style={{ paddingTop: '8%' }} >
                        <table class="table">
                            <thead>
                                <tr style={{ textAlign: 'center' }} >
                                    <th scope="col">Alumno</th>
                                    <th scope="col">Apoderado</th>
                                    <th scope="col">Coreo</th>
                                    <th scope="col">Promedio</th>
                                    <th scope="col">Ver</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alumnos.filter(alumno=>alumno.idCurso==selectCurso).map((value, index) =>
                                    <tr style={{ textAlign: 'center' }} >
                                        <th>{value.nombre} </th>
                                        <td>{value.apoderado} </td>
                                        <td>{value.correo}</td>
                                        <td>{value.promedioGeneral}</td>
                                        <td><button className="btn btn-success" onClick={()=>SeleccionarAlumno(3,value.id)} >Detalles </button>  </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
        //Perfil Alumno
        if(vista===3){
            return(
                <div className="row" >
                    <div className="col-12" style={{ paddingTop: '2%' }} >
                        <img onClick={() => setVista(2)} src={FlechaAtras} style={{ width: '3%', cursor: 'pointer' }} />
                        <div style={{ paddingTop: '2%' }} >
                            <h1 style={{ color: '#45b0e5' }} >Alumno </h1>
                        </div>
                    </div>
                    <div className="offset-1 col-10" style={{ paddingTop: '5%' }} >
                        <div class="card" style={{width:'100%'}}>
                            <img src={Personas} style={{width:'10%',alignSelf:'center'}} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <div className="form-group">
                                <label>Nombre</label>
                                <input value={alumnos[selectAlumno-1].nombre}/>
                                <label>Apellido Paterno</label>
                                <input value={alumnos[selectAlumno-1].apellido_paterno} />
                                <label>Apellido Materno</label>
                                <input value={alumnos[selectAlumno-1].apellido_materno} />
                                </div>
                                
                            </div>
                            <ul class="list-group list-group-flush">
                                <h6 style={{marginLeft:'1%'}} class="card-title">Datos Personales</h6>
                                <p style={{marginLeft:'1%'}} >Apoderado: {alumnos[selectAlumno-1].apoderado}</p>
                                <li class="list-group-item"></li>
                                <h6 style={{marginLeft:'1%'}} class="card-title">Datos Academicos</h6>
                                <p style={{marginLeft:'1%'}} >Promedio: {alumnos[selectAlumno-1].promedioGeneral}</p>
                                <li class="list-group-item"></li>
                                <h6 style={{marginLeft:'1%'}} class="card-title">Anotaciones</h6>
                                <li class="list-group-item">A third item</li>
                            </ul>
                            <div className="card-body" style={{width:'100%',textAlign:'end'}}  >
                                <button className="btn btn-success">Editar</button>
                                <button style={{marginLeft:'2%'}} className="btn btn-danger">Eliminar</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            )
        }
        //trabajadores
        if(vista===4){
            return(
                <div className="row" >
                    <div className="col-12" style={{ paddingTop: '2%' }} >
                        <img onClick={() => setVista(0)} src={FlechaAtras} style={{ width: '3%', cursor: 'pointer' }} />
                        <div style={{ paddingTop: '2%' }} >
                            <h1 style={{ color: '#45b0e5' }} >Trabajadores </h1>
                        </div>
                    </div>
                    <div className="offset-1 col-11 row" style={{ paddingTop: '3%' }} >
                        <div onClick={() => setVista(5)} className="col-2" style={{ backgroundColor: '#0071bc', textAlign: 'center', paddingTop: '5%', borderRadius: '50%', aspectRatio: '1/1', cursor: 'pointer' }} >
                            <div>
                                <img src={Personas} style={{ width: '20%', color: 'white' }} />
                            </div>
                            <h2>Profesores</h2>
                        </div>
                        <div onClick={() => setVista(0)} className="offset-1 col-2" style={{ backgroundColor: '#45b0e5', textAlign: 'center', paddingTop: '5%', borderRadius: '50%', aspectRatio: '1/1', cursor: 'pointer' }} >
                            <div>
                                <img src={Personas} style={{ width: '20%', color: 'white' }} />
                            </div>
                            <h2>Pesonal aseo</h2>
                        </div>
                        <div onClick={() => setVista(0)} className="offset-1 col-2" style={{ backgroundColor: '#45b0e5', textAlign: 'center', paddingTop: '5%', borderRadius: '50%', aspectRatio: '1/1', cursor: 'pointer' }} >
                            <div>
                                <img src={Personas} style={{ width: '20%', color: 'white' }} />
                            </div>
                            <h2>Cocina</h2>
                        </div>
                        <div onClick={() => setVista(0)} className="offset-1 col-2" style={{ backgroundColor: '#45b0e5', textAlign: 'center', paddingTop: '5%', borderRadius: '50%', aspectRatio: '1/1', cursor: 'pointer' }} >
                            <div>
                                <img src={Personas} style={{ width: '20%', color: 'white' }} />
                            </div>
                            <h2 style={{fontSize:'25px'}} >Personal Administrativo</h2>
                        </div>
                    </div>
                </div>
            )
                
        }
        //Profesores
        if(vista===5){
            return(
                <div>
                    <div className="col-12" style={{ paddingTop: '2%' }} >
                        <img onClick={() => setVista(4)} src={FlechaAtras} style={{ width: '3%', cursor: 'pointer' }} />
                        <div style={{ paddingTop: '2%' }} >
                            <h1 style={{ color: '#45b0e5' }} >Profesores </h1>
                        </div>
                    </div>
                    <div className="offset-1 col-10" style={{ paddingTop: '8%' }} >
                        <table class="table">
                            <thead>
                                <tr style={{ textAlign: 'center' }} >
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Asignatura</th>
                                    <th scope="col">Prof jefe</th>
                                    <th scope="col">Sueldo</th>
                                    <th scope="col">Ver</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Profesores.map((value, index) =>
                                    <tr style={{ textAlign: 'center' }} >
                                        <th>{value.nombre} </th>
                                        <td>{value.asignatura} </td>
                                        <td>{value.jefatura} </td>
                                        <td>${value.sueldo}</td>
                                        <td><button className="btn btn-success" onClick={()=>setVista(6)} >Detalles </button>  </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>


                </div>
            )
        }
        //Detalle Profesor
        if(vista===6){
            return(
                <div>
                    <div className="col-12" style={{ paddingTop: '2%' }} >
                        <img onClick={() => setVista(5)} src={FlechaAtras} style={{ width: '3%', cursor: 'pointer' }} />
                        <div style={{ paddingTop: '2%' }} >
                            <h1 style={{ color: '#45b0e5' }} >Detalle profesor </h1>
                        </div>
                    </div>

                </div>
            )
        }
        //Gastos
        if(vista===8){
            return(
                <div>
                    
                    <div className="col-12" style={{ paddingTop: '2%' }} >
                        <img onClick={() => setVista(0)} src={FlechaAtras} style={{ width: '3%', cursor: 'pointer' }} />
                        <div style={{ paddingTop: '2%' }} >
                            <h1 style={{ color: '#45b0e5' }} >Gastos</h1>
                        </div>
                    </div>
                    <div className="offset-1 col-10" style={{ paddingTop: '8%' }} >
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Valor</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {gastos.map((value, index) =>
                                    <tr>
                                        <th>{value.nombre} </th>
                                        <td>${value.costo}</td>
                                        
                                    </tr>
                                )}
                                <tr>
                                        <th>Total </th>
                                        <td>${total} </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        //Inicio
        else {
            return (
                <Render0></Render0>
            );
        }
    }



    return (
        <Fragment>
            <div className="row">
                <div className="col-2">
                    <div className="col-12" style={{ backgroundColor: '#213c4e', height: '100vh', boxShadow: '10px 0px 50px grey' }} >
                        <ul class="nav flex-column" style={{ paddingTop: '50%', textAlign: 'center' }} >
                            <li class="nav-item">
                                <img src={Gato} style={{ width: '70%', borderRadius: '50%', aspectRatio: '1/1' }} />
                            </li>
                            <li class="nav-item" style={{ marginTop: '10%' }} >
                                <h5 style={{ color: '#47ae6a' }} >Nombre </h5>
                            </li>
                            <li class="nav-item">
                                <h5 style={{ color: '#47ae6a' }} >Apellido</h5>
                            </li>
                            <li class="nav-item" style={{ marginTop: '8%' }}>
                                <h6 style={{ color: '#47ae6a' }} >Cargo</h6>
                            </li>
                            <li class="nav-item" style={{ marginTop: '10%' }}>
                                <h6 style={{ color: '#47ae6a' }} >Editar</h6>
                            </li>
                            <li class="nav-item" style={{ marginTop: '10%' }}>
                                <button className="btn btn-danger" onClick={Volver} > Cerrar Sesion </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-10" >
                    <RenderVistas></RenderVistas>
                </div>

            </div>
        </Fragment>
    );
}
export default Director