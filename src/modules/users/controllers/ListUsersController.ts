import { FastifyReply, FastifyRequest } from "fastify";
import { ListUsersService } from "../services/ListUsersService";

export class ListUsersController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    const listUsers = new ListUsersService();

    const result = await listUsers.execute();

    return reply.send(result)
  }
}