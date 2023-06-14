import "./crearAnotacion.css"

function CrearAnotacion ({useCrearAnotacion, modal, setModal}){
    const handleSubmit = event => {
        event.preventDefault()
        setModal(!modal)
    }
    return (
        useCrearAnotacion && <>
        <form id="crear-anotacion">
            <textarea className="textAnotacion" 
                    name="anotacion"
                    id="anotacion"
                    placeholder="Redactar anotacion alumno" 
                    spellcheck="false">
            </textarea>

            <div className="caja-btn">    
                <button className="btn btn-crear" onClick={handleSubmit}>
                    Crear
                </button>
            </div>    
        </form>
    </>)
}

export default CrearAnotacion