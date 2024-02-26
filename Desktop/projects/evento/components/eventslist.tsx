import { EventEvento } from "@/lib/type"
import EventCard from "./eventcard"

type EventListProps = {
    events:EventEvento[]
}
export default function EventsList({events}:EventListProps) {
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
        {events.map(event => <EventCard key={event.id} event={event}/>)}
  </section>
  )
}
