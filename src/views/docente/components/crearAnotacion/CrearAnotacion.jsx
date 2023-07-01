import "./crearAnotacion.css"

function CrearAnotacion ({useCrearAnotacion, handleSubmitAnotaciones, handleChangeAnotaciones}){
    
    return (
        useCrearAnotacion && <>
        <form id="crear-anotacion" onSubmit={handleSubmitAnotaciones}>
            <textarea className="textAnotacion" 
                    name="anotacion"
                    id="anotacion-textArea"
                    placeholder="Redactar anotacion alumno" 
                    spellcheck="false"
                    onChange={handleChangeAnotaciones}>
            </textarea>

            <div className="caja-btn">    
                <button type="submit" className="btn-d btn-anotacion-d">
                    Crear
                </button>
            </div>    
        </form>
    </>)
}

export default CrearAnotacion