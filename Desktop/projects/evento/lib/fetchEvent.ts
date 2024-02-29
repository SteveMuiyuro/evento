import prisma from "./db";

export async function FetchEvent(slug:string){
  const event = await prisma.eventEvento.findUnique({
    where: {
      slug:slug,
    }
  });

  return event;

}
