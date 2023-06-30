import "./modal.css"

export default function Modal({ estado, setEstado }) {
	
	const ocultarModal = () => {
		setEstado(!estado)
	}

	return (
		estado &&
			<div id='modal-d' className='modal-d'>
				<p>Se realizo la operacion con exito</p>
				<button className='btn-d' onClick={ocultarModal}>Aceptar</button>
			</div>		
	)
}