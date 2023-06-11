import "./apoderado.scss"
import Navbar from '../Student/components/navbar/NavbarS'
import Sidebar from '../Student/components/sidebar/SidebarS'
import PerfilSt from './components/perfilSt/PerfilSt'
import Otro from './components/otro/Otro'
const Apoderado = () => {
  return (
    <div className='apoderado'>
      <Sidebar />
      <div className='apoderadoContainer'>
        <div className="top">
          <h1>Bienvenido, </h1>
        </div>
        <div className="perfil">
          <PerfilSt/>
          <Otro/>
         
        </div>
          
        </div>

      </div>

    
  )
}

export default Apoderado
