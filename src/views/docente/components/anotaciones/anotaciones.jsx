import "./anotaciones.css"

function MostrarAnotacion ({useVerAnotaciones, listaAnotaciones, borraAnotacion, cambiarCrearVerAnon}){

    if(!useVerAnotaciones){
        return <></>
    }else{
        if(!listaAnotaciones){
            return  <div className="caja-btn-especial">    
                        <button onClick={cambiarCrearVerAnon} className="btn-d btn-anotacion-d">
                            Crear anotaciones
                        </button>
                    </div> 
            }  
         if(listaAnotaciones){       
            return <> <div className="columnaAnotaciones">		
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
                    <div className="caja-btn-especial">    
                        <button onClick={cambiarCrearVerAnon} className="btn-d btn-anotacion-d">
                            Crear anotaciones
                        </button>
                    </div> 
                </>
        }
    }
    

}

export default MostrarAnotacion