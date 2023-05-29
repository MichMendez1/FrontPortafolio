import React from "react";
import ProfileImage from "../../img/profile-pic.png";

const Perfil = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const { Nombre, Apellido_Paterno, Apellido_Materno, Correo, Direccion, Tipo } = user || {}

  return (
    <div className="container-fluid px-0">
      <div className="row justify-content-center no-gutters">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src={ProfileImage}
                      alt="Profile"
                      className="rounded-circle img-fluid"
                      style={{ width: "150px" }}
                    />
                    <h3 className="mt-2 mb-0">  {Nombre} {Apellido_Paterno} {Apellido_Materno}</h3>
                    <p className="text-muted mb-2">{Tipo}</p>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Info</h4>
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse scelerisque, nunc eu convallis interdum,
                        massa ligula molestie justo, quis ullamcorper sapien
                        lorem eget nisi.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h4>Informacion de contacto</h4>
                      <p className="mb-3">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:john.doe@example.com">
                          {Correo}
                        </a>
                      </p>
                      <p className="mb-3">
                        <strong>Celular:</strong> +569 45667890
                      </p>
                      <p className="mb-3">
                        <strong>Direccion:</strong> 
                        <a> {Direccion} </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
