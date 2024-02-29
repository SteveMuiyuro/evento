import { EventEvento } from "@prisma/client"

export async function FetchEvents(city:string):Promise<EventEvento[]>{

    const res = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`)

    const events:EventEvento[] = await res.json()

    return events;

}
