import React from 'react'
import Sidebar from "../components/sidebar/SidebarS"
import NavbarS from "../components/navbar/NavbarS";
import Table from "../components/table/Table";
import "./notas.scss";

const Notas = () => {
  return (
    <div className='nota'>
      <Sidebar />
      <div className="notaContainer">
        <NavbarS />
        <div className="listContainer">
          <div className="listTitle">Notas</div>
          <Table/>
        </div>
      </div>

    </div>
  )
}

export default Notas
