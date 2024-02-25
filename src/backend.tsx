export interface ICalendar {
  id: number;
  name: string;
  color: string;
}

export interface IEvent {
  id: number;
  date: string;
  time?: string;
  desc: string;
  calendarId: number;
}

export function getCalendarsEndpoint(): Promise<ICalendar[]> {
  return fetch('http://localhost:5000/api/calendars').then(resp => {
    return resp.json();
  });
}

export function getEventsEndpoint(): Promise<IEvent[]> {
  return fetch('http://localhost:5000/api/events').then(resp => {
    return resp.json();
  });
}
