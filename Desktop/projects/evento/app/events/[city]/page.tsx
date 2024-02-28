import H1 from '@/components/H1'
import EventsList from '@/components/eventslist'
import { Suspense } from 'react'
import Loading from './loading'


type EventsProps = {
  params:{
    city:string
  }
}
export default async function Events({params}:EventsProps) {

  const city = params.city



  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">{
       city === "all" ? "All Events" : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`
        }</H1>

   <Suspense fallback={<Loading/>}>
     <EventsList city={city}/>
   </Suspense>

    </main>
  )
}
