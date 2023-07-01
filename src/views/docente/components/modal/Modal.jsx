import "./modal.css"

export default function Modal({ estado, setEstado }) {
	
	const ocultarModal = () => {
		setEstado(!estado)
	}

	return (
<<<<<<< HEAD
		estado &&
			<div id='modal-d' className='modal-d'>
				<p>Se realizo la operacion con exito</p>
				<button className='btn-d' onClick={ocultarModal}>Aceptar</button>
			</div>		
=======
		estado = true ? estado &&
			<div id='modal' className='modal '>
				<p>Se realizo la operacion con exito</p>
				<button className='btn' onClick={ocultarModal}>Aceptar</button>
			</div>	 : <></>
				
>>>>>>> AlejandroS
	)
}