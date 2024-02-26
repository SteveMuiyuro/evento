import H1 from '@/components/H1'
import EventsList from '@/components/eventslist'
import { EventEvento } from '@/lib/type'

type EventsProps = {
  params:{
    city:string
  }
}
export default async function Events({params}:EventsProps) {

  const res = await fetch("https://bytegrad.com/course-assets/projects/evento/api/events?city=austin")

  const events:EventEvento[] = await res.json()

  const city = params.city

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">{
       city === "all" ? "All Events" : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`
        }</H1>


     <EventsList events={events}/>.

    </main>
  )
}
