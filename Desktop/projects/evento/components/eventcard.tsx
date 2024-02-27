import { EventEvento } from "@/lib/type"
import Image from "next/image"
import Link from "next/link"
type EventProps = {
    event:EventEvento
}

export default function EventCard({event}:EventProps) {
  return (
    <Link className="max-w-[500px] flex-1 basis-80" href={`/event/${event.slug}`}>
        <section className="flex flex-col h-[380px]  bg-white/[3%] rounded-xl overflow-hidden relative state-effects">
            <Image src={event.imageUrl} alt={event.name} width={500} height={280} className="h-[60%] object-fit"/>

            <div className="flex  flex-1 flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold">{event.name}</h2>
              <p className="italic text-white/75">{event.organizerName}</p>
              <p className="text-sm text-white/50 mt-4">{event.location}</p>
          </div>
          <section className="absolute left-[12px] flex flex-col justify-center items-center top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
            <p className="text-xl font-bold -mb-[5px]">{

              new Date(event.date).toLocaleDateString("en-US", {
                day: "2-digit",
              })
            }</p>

            <p className="text-xs uppercase text-accent">{
              new Date(event.date).toLocaleDateString("en-US", {
                month: "short"
              })
            }</p>

          </section>

        </section>

    </Link>
  )
}
