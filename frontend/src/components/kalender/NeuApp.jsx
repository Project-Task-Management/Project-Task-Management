import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import Datepicker from "react-datepicker";
import moment from "moment";
import "./neuApp.scss";

const localizer = momentLocalizer(moment);

const events = [
  {
    start: new Date(),
    end: new Date(),
  },
];

export default function NeuApp() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
    setNewEvent({ title: "", start: "", end: "" });
  }
  function removeHandle(i) {
    const copy = [...allEvents];
    copy.splice(i, 1);
    setAllEvents(copy);
  }

  return (
    <div className="neuApp">
      <h1 className="kalanderH1">Calender</h1>
      <h2 className="kalanderH2">Aus New Event</h2>
      <div className="kalanderAllInput">
        <input
          className="kalanderInput"
          type="text"
          placeholder="Add Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <Datepicker
          className="kalanderDate"
          placeholderText="Start Date"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <Datepicker
          className="kalanderDate"
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />

        <div className="kalanderButton">
          <button onClick={handleAddEvent}>Add Event</button>

          <button onClick={removeHandle}>Remove Event</button>
        </div>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 550 }}
      />
    </div>
  );
}
