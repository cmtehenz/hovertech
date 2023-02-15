
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { AuthenticateUserService } from "./AuthenticateUserService";


export class AuthenticateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    
    const authBody = z.object({
      email: z.string().email(),
      password: z.string()
    })
    const { email, password } = authBody.parse(request.body)

    const authenticateUserService = new AuthenticateUserService();
    const result = await authenticateUserService.execute({
      email,
      password,
    })

    return reply.send(result);

  }
}