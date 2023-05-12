import "./modal.css"

export default function Modal({ estado, setEstado }) {
	
	const ocultarModal = () => {
		setEstado(!estado)
	}

	return (
			estado &&
				<div id='modal' className='modal '>
					<p>Se paso la lista con exito</p>
					<button className='btn' onClick={ocultarModal}>Aceptar</button>
				</div>		
	)
}