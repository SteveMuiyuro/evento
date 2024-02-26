import H1 from '@/components/H1'

type EventsProps = {
  params:{
    city:string
  }
}
export default function Events({params}:EventsProps) {

  const city = params.city

  console.log(city)

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>{
       city === "all" ? "All Events" : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`

        }</H1>
    </main>
  )
}
