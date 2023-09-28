import React, {useState} from 'react';
import './Calendar.scss';
import Deer from '../../../../assets/smiling-deer.svg'

/** Rudimentary calendar, we can update events and stylize later */

const schedule = [
   {
      "date": "Friday, November 10th, 2023",
      "events": [
         {
            "name": "events will be announced soon!",
            "time": "TBA",
            "location": "TBA",
            "description": "TBD",
         },
         /**
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
         */
      ],
   },
   {
      "date": "Saturday, November 11th, 2023",
      "events": [
         {
            "name": "events will be announced soon!",
            "time": "TBA",
            "location": "TBA",
            "description": "TBD",
         },
      ],
   },
   {
      "date": "Sunday, November 12th, 2023",
      "events": [
         {
            "name": "events will be announced soon!",
            "time": "TBA",
            "location": "TBA",
            "description": "TBD",
         },
      ],
   }

]




function Calendar() {
   const [day, setDay] = useState(0);
   const setDay1 = () => {
      setDay(0);
    };
    const setDay2 = () => {
      setDay(1);
    };
    const setDay3 = () => {
      setDay(2);
    };
  return (
      <div className="schedule-container" id="schedule">
         <div className="schedule-title">
            schedule
            <img className="smiling-deer" src={Deer}/>
         </div>


         <div className="calendar">
            <div className="calendar-header">
               <div className='day1' onClick={setDay1} style={{ opacity: day === 0 ? "1.0" : "0.8" }}>day 1</div>
               <div className='day2' onClick={setDay2} style={{ opacity: day === 1 ? "1.0" : "0.8" }}>day 2</div>
               <div className='day3' onClick={setDay3} style={{ opacity: day === 2 ? "1.0" : "0.8" }}>day 3</div>
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

      </div>

  );
}

export default Calendar;