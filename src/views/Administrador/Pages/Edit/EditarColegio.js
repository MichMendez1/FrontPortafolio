import React from 'react'

function EditarColegio() {
  return (
<div>
            <div className='container forms'>
                <div className='row'>
                    <div className='col-md-12 text-center'><h2>Agregar Colegio</h2></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>Id Sostenedor</div>
                    <div className='col-md-4'><input type='text' className='form-control' /></div>
                    <div className='col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>Nombre</div>
                    <div className='col-md-4'><input type='text' name='name' className='form-control' /></div>
                    <div className='col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>Dirección</div>
                    <div className='col-md-4'><input type='text' name='adress' className='form-control' /></div>
                    <div className='col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>Teléfono</div>
                    <div className='col-md-4'><input type='text' name='phono' className='form-control' /></div>
                    <div className='col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>Email</div>
                    <div className='col-md-4'><input type='email' name='email' className='form-control' /></div>
                    <div className='col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 text-center'>
                        <button className='btn btn-warning'>Agregar Colegio</button>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </div>
  )
}

export default EditarColegio
