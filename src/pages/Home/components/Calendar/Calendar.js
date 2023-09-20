import React, {useState} from 'react';
import './Calendar.scss';

/** Rudimentary calendar, we can update events and stylize later */

const schedule = [
   {
      "date": "Saturday, November 13th, 2022",
      "events": [
         {
            "name": "Hackathon Starts",
            "time": "12:00pm",
            "location": "TBA",
            "description": "TBD",
         },
         {
            "name": "Ceremony",
            "time": "1:00pm",
            "location": "TBA",
            "description": "TBD",
         },
         {
            "name": "Workshop",
            "time": "3:00pm",
            "location": "TBA",
            "description": "TBD",
         },
         {
            "name": "Workshop",
            "time": "4:00pm",
            "location": "TBA",
            "description": "TBD",
         },
      ],
   },
   {
      "date": "Sunday, November 14th, 2022",
      "events": [
         {
            "name": "Workshop",
            "time": "3:00pm",
            "location": "TBA",
            "description": "TBD",
         },
         {
            "name": "Workshop",
            "time": "4:00pm",
            "location": "TBA",
            "description": "TBD",
         },

      ],
   }

]




function Calendar() {
   const [day, setDay] = useState(0);
   const prevDay = () => {
      setDay(0);
    };
    const nextDay = () => {
      setDay(1);
    };
  return (
      <div className="calendar-container" id="calendar">
         <div className="calendar-header">
            <div className='day1' onClick={prevDay} style={{ background: day === 0 ? "white" : "gray" }}>Day 1</div>
            <div className='day2' onClick={nextDay} style={{ background: day === 1 ? "white" : "gray" }}>Day 2</div>
         </div>
         <table className="calendar-body">
            <tbody>
               <th colspan="2">{schedule[day].date}</th>
               {schedule[day].events.map((event) =>
                  <tr>
                     <td className="event-time">{event.time}</td>
                     <td className="event-name">{event.name}</td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
  );
}

export default Calendar;