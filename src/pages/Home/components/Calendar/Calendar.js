import React, {useState} from 'react';
import './Calendar.scss';
import Deer from '../../../../assets/smiling-deer.svg'

/** Rudimentary calendar, we can update events and stylize later */

const schedule = [
   {
      "date": "Thursday, November 9th, 2023",
      "events": [
         {
            "name": "Opening Ceremony",
            "time": "7:30pm",
            "location": "E2-180",
         },
         {
            "name": "Dinner + Team Formation",
            "time": "8:30pm",
            "location": "E2-180",
         },
      ],
   },
   {
      "date": "Friday, November 10th, 2023",
      "events": [
         {
            "name": "Ideation: Understanding and Designing for Accessibility",
            "time": "9:00am",
            "location": "E2-280",
            "description": "Hosted with Tech4Good",
         },
         {
            "name": "Introduction to Figma",
            "time": "10:00am",
            "location": "E2-280",
            "description": "Hosted with Creative Tech Design (CTD)",
         },
         {
            "name": "Industry Insights",
            "time": "11:00am",
            "location": "E2-280",
            "description": "Hosted with Professor Leilani Gilpin",
         },
         {
            "name": "Intro to Source Control and GitHub Copilot",
            "time": "12:00pm",
            "location": "E2-280",
            "description": "Hosted with Dr. Emily Lovell",
         },
         {
            "name": "Resume Review + Technical Interview Prep",
            "time": "2:00pm",
            "location": "E2-280",
            "description": "Hosted with Girls Who Code (GWC)",
         },
         {
            "name": "Intro to HMTL + CSS",
            "time": "3:00pm",
            "location": "E2-280",
            "description": "Hosted with BluePrint",
         },
      ],
   },
   {
      "date": "Saturday, November 12th, 2023",
      "events": [
         {
            "name": "Hacking Ends",
            "time": "10:00am",
            "location": "E2-180",
         },
         {
            "name": "Judges Begin!",
            "time": "10:00am",
            "location": "E2-180",
         },
         {
            "name": "Closing Ceremony",
            "time": "1:30pm",
            "location": "E2-180",
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
                        <td className="event-details">
                           <div className='event-name'>{event.name}</div>
                           <ul>
                              <li>Located @ {event.location}</li>
                              {event.description ? <li>{event.description}</li>: ''}
                           </ul>
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>

      </div>

  );
}

export default Calendar;