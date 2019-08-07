import React, { useEffect } from "react";
import { useEvents, fetchEvents } from "./EventsProvider";

function EventList() {
  const [state, dispatch] = useEvents();

  useEffect(() => {
    fetchEvents(dispatch);
  }, []);

  return state.isLoadingEvents ? (
    "LOADING..."
  ) : (
    <>
      <ul>
        {state.events.map(event => (
          <li key={event.name}>{event.name}</li>
        ))}
      </ul>
      <button onClick={() => fetchEvents(dispatch)}>Re-fetch events</button>
    </>
  );
}

export default EventList;
