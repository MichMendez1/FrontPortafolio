import Sidebar from "./components/sidebar/SidebarS"
import "./student.scss"
import NavbarS from "./components/navbar/NavbarS";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Student = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        {/* <NavbarS /> */}
        <div className="top">
          <h1>Bienvenido, </h1>
        </div>
        <div className='app'>
      <h1 className='text-center'></h1>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          {/* <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()} */}
        </p> ) : (
        <p className='text-center'>
          {/* <span className='bold'>Default selected date:</span>{' '} */}
          {/* {date.toDateString()} */}
        </p>
      )}
    </div>

      </div>

    </div>
  )
}

export default Student
