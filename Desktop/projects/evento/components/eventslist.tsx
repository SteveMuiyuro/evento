import EventCard from "./eventcard"
import { FetchEvents } from "@/lib/fetchEvents"


type EventListProps = {
    city:string
}
export default async function EventsList({city}:EventListProps) {

  const events = await FetchEvents(city)


  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
        {events.map(event => <EventCard key={event.id} event={event}/>)}
  </section>
  )
}
