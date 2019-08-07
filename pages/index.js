import React from "react";
import { EventsProvider } from "./components/EventsProvider";
import EventList from "./components/EventList";

export default function Index() {
  return (
    <EventsProvider>
      <h1>Hello State</h1>
      <EventList />
    </EventsProvider>
  );
}
