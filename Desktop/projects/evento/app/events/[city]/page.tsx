import H1 from "@/components/h1";
import EventsList from "@/components/eventslist";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import Capitalize from "@/lib/capitalize";

type Props = {
  params: {
    city: string;
  };
};

type EventPageProps = Props & {

searchParams: { [key: string]: string | string[] | undefined }

}

export function generateMetadata({ params}:Props): Metadata {
  const city = params.city;


  return {
    title: city === "all" ? "All Events" : `Events in ${Capitalize(city)}`,
  };
}

export default async function Events({ params, searchParams }:EventPageProps) {
  const city = params.city;
  const page = searchParams.page || 1;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} page={+page}/>
      </Suspense>
    </main>
  );
}
