import { FastifyReply, FastifyRequest } from "fastify";
import { ListAircraftsService } from "../services/ListAircraftsService";

export class ListAircraftsController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    const listAircrafts = new ListAircraftsService();

    const result = await listAircrafts.execute();

    return reply.send(result)
  }
}