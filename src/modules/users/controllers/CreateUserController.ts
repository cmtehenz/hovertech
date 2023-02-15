import { FastifyRequestType } from "fastify/types/type-provider";
import { z } from "zod";
import { CreateUserService } from "../services/CreateUserService";


export class CreateUserController {
  
  async handle(request: FastifyRequestType){
    const createUserBody = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
      whatsapp: z.string(),
      role: z.string(),
      image_url: z.string().optional(),
    })

    const { name, email, password, whatsapp, role, image_url } = createUserBody.parse(request.body)
  
    const createUserService = new CreateUserService();

    const result = await createUserService.execute({
      name,
      email,
      password,
      whatsapp,
      role,
      image_url,
    })
    
    return result
  }
}