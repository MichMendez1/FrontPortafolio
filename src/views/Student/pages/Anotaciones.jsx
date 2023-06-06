import React from 'react'
import List from "../components/table/List"
import Sidebar from '../components/sidebar/SidebarS'
import Navbar from '../components/navbar/NavbarS'

const Anotaciones = () => {
    return (
        <div className='asistencia'>
            <Sidebar />
            <div className='asistenciaContainer'>
                <Navbar />
                <div className="listContainer">
                    <div className="listTitle"></div>
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default Anotaciones
