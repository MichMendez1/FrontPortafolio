import React from "react"
function AgregarDirector (){

    function agregarDirector() {

    }


    return(
        <div className="container">
            <div className="row">
            <h2>Ingresar un nuevo Director</h2>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">

                <div className="mb-3">
                        <label htmlFor="idcolegio" className="form-label">Codigo Colegio</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombres</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="apellidopaterno" className="form-label">Apellido Paterno</label>
                    <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="apellidomaterno" className="form-label">Apellido Materno</label>
                    <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="rut" className="form-label">Rut</label>
                    <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">direccion</label>
                    <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input type="text" className="form-control"></input>
                    </div>

                      <button onClick={agregarDirector} className="btn btn-success">Guardar Usuario</button>
                </div>
            </div>
        </div>
    )
}

export default AgregarDirector