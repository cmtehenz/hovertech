import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ListComponentsServices } from "../service/ListComponentsService";


export class ListComponentsController {
  async handle (request: FastifyRequest, reply: FastifyReply){
    const listComponentsQuery = z.object({
      prefix: z.string()
    })

    const { prefix } = listComponentsQuery.parse(request.query);

    const listComponents = new ListComponentsServices();

    const result = await listComponents.execute({ prefix })

    return reply.send(result)
  }
}