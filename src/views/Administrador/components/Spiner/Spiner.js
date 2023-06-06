import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Spiner() {

  
  return (
    <>
      <div className='d-flex justify-content-center align-align-items-center' style={{ width: "100%", height: "50vh" }}>
        <Spinner animation="border" variant="danger" />&nbsp; Cargando...
      </div>
    </>
  )
}

export default Spiner
