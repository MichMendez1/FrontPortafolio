import React from 'react'
import { Link } from 'react-router-dom'

 const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li>
                <Link to="">Asistencia</Link>
            </li>
            <li>
                <Link to="">Anotaciones</Link>
            </li>
            <li>
                <Link to="">Notas</Link>
            </li>
        </ul>
    
    
    
    
    </div>
  )
}

export default Sidebar