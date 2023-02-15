import { prisma } from "../../../lib/prisma";

export class ListAircraftsService {
  async execute(){
    const aircrafts = await prisma.aircraft.findMany()

    return aircrafts;
  }
}