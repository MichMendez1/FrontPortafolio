import Sidebar from "./components/sidebar/SidebarS"
import "./student.scss"
import NavbarS from "./components/navbar/NavbarS";
import Widget from "./components/widget/Widget";

const Student = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <NavbarS />
        <div className="top">
          <h1>Bienvenido, </h1>
        </div>
        <div className="widgets">
          <Widget/>
          <Widget/>
        </div>

      </div>

    </div>
  )
}

export default Student
