import "./crearAnotacion.css"

function CrearAnotacion ({useCrearAnotacion, modal, setModal, setDatoAnotacion, handleSubmitAnotaciones}){

    const handleSubmit = event => {
        event.preventDefault()
        document.getElementById("anotacion-textArea").value = "";
        // const datos = new FormData(event.target)
        // const texto = datos.get('anotacion') 
        // setDatoAnotacion(texto)
        setModal(!modal)
        handleSubmitAnotaciones()
    }

    const handleChange = event =>{
        event.preventDefault()
        // console.log(event.target.value)
        // // const datos = new FormData(event.target)
        // // const texto = datos.get('anotacion')
        setDatoAnotacion(event.target.value) 
    }
    
    return (
        useCrearAnotacion && <>
        <form id="crear-anotacion" onSubmit={handleSubmit}>
            <textarea className="textAnotacion" 
                    name="anotacion"
                    id="anotacion-textArea"
                    placeholder="Redactar anotacion alumno" 
                    spellcheck="false"
                    onChange={handleChange}>
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