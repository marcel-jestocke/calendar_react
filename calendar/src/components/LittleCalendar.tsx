import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BigCalendar from './BigCalendar';


export function LittleCalendar() {
  const [value, onChange] = useState(new Date());

  


  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <p>{value.toString().split('T')[0]}</p>
      <BigCalendar 
      initialDate={value.toISOString().split('T')[0]}
      dateValue={value.toISOString().split('T')[0]}
      />
    </div>
  );
}