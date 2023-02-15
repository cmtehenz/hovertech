import { FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateAircraftService } from "../services/CreateAircraftService";

export class CreateAircraftController {

  async handle(request: FastifyRequest){
    const createAircraftBody = z.object({
      prefix: z.string(),
      model: z.string(),
      engine_model: z.string(),
      serial_celula: z.string(),
      serial_engine: z.string(),
      fabricante_celula: z.string(),
      fabricante_engine: z.string(),
      date_maker_engine: z.coerce.date(),
      date_maker_celula: z.coerce.date(),
      usage: z.number(),
      time_celula: z.number(),
      time_engine: z.number(),
      n1: z.number(),
      n2: z.number(),
    })

    const {
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
    } = createAircraftBody.parse(request.body)

    const createAircraftService = new CreateAircraftService();

    const result = await createAircraftService.execute({
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
    })

    return result;
  }
}