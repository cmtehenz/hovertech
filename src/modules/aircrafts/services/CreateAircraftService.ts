import { prisma } from "../../../lib/prisma";

interface ICreateAircraft {
  prefix: string,
  model: string,
  engine_model: string,
  serial_celula: string,
  serial_engine: string,
  fabricante_celula: string,
  fabricante_engine: string,
  date_maker_engine: Date,
  date_maker_celula: Date,
  usage: number,
  time_celula: number,
  time_engine: number,
  n1: number,
  n2: number,
}

export class CreateAircraftService {
  async execute({
    prefix,
    model,
    engine_model,
    serial_celula,
    serial_engine,
    fabricante_celula,
    fabricante_engine,
    date_maker_engine,
    date_maker_celula,
    usage,
    time_celula,
    time_engine,
    n1,
    n2,
  }: ICreateAircraft){
    const aircraftExist = await prisma.aircraft.findUnique({
      where: {prefix}
    })

    if(aircraftExist){
      throw new Error("Aircraft already exists!")
    }

    const aircraft = await prisma.aircraft.create({
      data: {
        prefix,
        model,
        engine_model,
        serial_celula,
        serial_engine,
        fabricante_celula,
        fabricante_engine,
        date_maker_celula,
        date_maker_engine,
        usage,
        time_celula,
        time_engine,
        n1,
        n2,
        created_at: new Date()
      }
    })

    return aircraft;
  }
}