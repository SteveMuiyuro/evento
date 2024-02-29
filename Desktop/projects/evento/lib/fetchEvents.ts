
import capitalize from "./capitalize";
import prisma from "./db";

export async function FetchEvents(city:string){

const events = prisma.eventEvento.findMany({
    where:{
        city: city === "all" ? undefined : capitalize(city)
    }
})
    return events;

}
