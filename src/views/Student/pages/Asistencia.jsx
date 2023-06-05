import "./asistencia.scss"
import Sidebar from '../components/sidebar/SidebarS'
import Navbar from '../components/navbar/NavbarS'
import Table2 from "../components/table/table2"

const Asistencia = () => {
    return (
        <div className='asistencia'>
            <Sidebar />
            <div className='asistenciaContainer'>
                <Navbar />
                <div className="listContainer">
                    <div className="listTitle">Asistencia</div>
                    <Table2/>
                </div>
            </div>
        </div>
    )
}

export default Asistencia
