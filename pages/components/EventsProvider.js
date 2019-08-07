import React, { useReducer, useContext } from "react";

const EventsStateContext = React.createContext();
const EventsDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_EVENTS":
      return {
        ...state,
        isLoadingEvents: true
      };
    case "FETCH_EVENTS_SUCCESS":
      return {
        ...state,
        isLoadingEvents: false,
        events: action.payload
      };
    case "FETCH_EVENTS_ERROR":
      return {
        ...state,
        isLoadingEvents: false
      };
    default:
      return state;
  }
};

function useEventState() {
  const context = useContext(EventsStateContext);
  if (context === undefined) {
    throw new Error("useEventState must be used within EventsProvider");
  }
  return context;
}

function useEventDispatch() {
  const context = useContext(EventsDispatchContext);
  if (context === undefined) {
    throw new Error("useEventDispatch must be used within EventsProvider");
  }
  return context;
}

function useEvents() {
  return [useEventState(), useEventDispatch()];
}

async function fetchEvents(dispatch) {
  dispatch({ type: "FETCH_EVENTS" });
  return new Promise(resolve => {
    setTimeout(() => {
      const events = [
        { name: "Birthday party" },
        { name: "Dinner" },
        { name: "Work" }
      ];
      resolve(events);
      dispatch({ type: "FETCH_EVENTS_SUCCESS", payload: events });
    }, 1000);
  });
}

function EventsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    events: [],
    isLoadingEvents: false
  });

  return (
    <EventsStateContext.Provider value={state}>
      <EventsDispatchContext.Provider value={dispatch}>
        {children}
      </EventsDispatchContext.Provider>
    </EventsStateContext.Provider>
  );
}

export { EventsProvider, useEvents, fetchEvents };
