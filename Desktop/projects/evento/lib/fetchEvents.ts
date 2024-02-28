import { EventEvento } from "./type"

export async function FetchEvents(city:string):Promise<EventEvento[]>{

    const res = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`)

    const events:EventEvento[] = await res.json()

    return events;

}
