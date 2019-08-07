import React from "react";
import { EventsProvider } from "../events-context";
import EventList from "./components/EventList";

export default function Index() {
  return (
    <EventsProvider>
      <h1>Hello State</h1>
      <EventList />
    </EventsProvider>
  );
}
