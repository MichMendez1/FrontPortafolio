import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./estudiante.scss";
import React from 'react';

const Estudiante = () => {
  const [date, setDate] = useState(new Date());

  

  return (
    <div className="estudiante-container">
      <Sidebar />
      <div className="estudiante-content">

        <div className='calendar-container'>
          <Calendar
            onChange={setDate}
            value={date}
            selectRange={true}
          />

        </div>
      </div>
    </div>
  );
};

export default Estudiante;
