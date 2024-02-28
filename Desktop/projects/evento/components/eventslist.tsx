import { EventEvento } from "@/lib/type"
import EventCard from "./eventcard"


type EventListProps = {
    city:string
}
export default async function EventsList({city}:EventListProps) {

    const res = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`)

  const events:EventEvento[] = await res.json()
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
        {events.map(event => <EventCard key={event.id} event={event}/>)}
  </section>
  )
}
