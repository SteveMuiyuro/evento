
import { notFound } from "next/navigation";
import prisma from "./db";

export async function FetchEvent(slug:string){
  const event = await prisma.eventEvento.findUnique({
    where: {
      slug:slug,
    }
  });

  if(!event){
    return notFound()
  }

  return event;

}
