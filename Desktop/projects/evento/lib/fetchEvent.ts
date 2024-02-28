import { EventEvento } from "./type";

export async function FetchEvent(slug:string):Promise<EventEvento>{


  const res = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);

  const event  = await res.json();

  return event;

}
