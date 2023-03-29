import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect } from "react";
import Datepicker from "react-datepicker";
import moment from "moment";
import "./neuApp.scss";
import axios from "axios";

const localizer = momentLocalizer(moment);

const events = [
  {
    startDate: new Date(),
    endDate: new Date(),
  },
];

export default function NeuApp() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: "",
    endDate: "",
  });
  const [allEvents, setAllEvents] = useState(events);

  const fetchKalander = async () => {
    const response = await axios.get("http://localhost:7897/kalander");
    setAllEvents(response.data);
  };
  useEffect(() => {
    axios
      .get("http://localhost:7897/kalander")
      .then((res) => setAllEvents(res.data));
    console.log(allEvents);
  }, [newEvent]);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
    axios.post("http://localhost:7897/kalander/", {
      title: newEvent.title,
      startDate: newEvent.startDate,
      endDate: newEvent.endDate,
    });
    setNewEvent({ title: "", startDate: "", endDate: "" });
  }

  // function removeHandle(event) {
  //   const deleteKalander = allEvents.find((ev) => ev._id === event._id);
  //   axios
  //     .delete(`http://localhost:7897/kalander/${deleteKalander._id}`)
  //     .then(fetchKalander());
  // }
  function removeHandle(event) {
    console.log(event);
    const deleteKalander = allEvents.find((ev) => ev.title === event.title);
    console.log(deleteKalander);
    axios
      .delete(`http://localhost:7897/kalander/${deleteKalander._id}`)
      .then(() => fetchKalander());
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
          onChange={(event) =>
            setNewEvent({ ...newEvent, title: event.target.value })
          }
        />
        <Datepicker
          className="kalanderDate"
          placeholderText="Start Date"
          selected={newEvent.startDate}
          onChange={(startDate) => setNewEvent({ ...newEvent, startDate })}
        />
        <Datepicker
          className="kalanderDate"
          placeholderText="End Date"
          selected={newEvent.endDate}
          onChange={(endDate) => setNewEvent({ ...newEvent, endDate })}
        />

        <div className="kalanderButton">
          <button onClick={handleAddEvent}>Add Event</button>

          {/* <button onClick={removeHandle}>Remove Event</button> */}
        </div>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="startDate"
        endAccessor="endDate"
        style={{ height: "630px" }}
        onSelectEvent={(event) => removeHandle(event)}
      />
    </div>
  );
}
