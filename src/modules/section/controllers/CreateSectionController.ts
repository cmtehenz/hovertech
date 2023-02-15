import { FastifyRequestType } from "fastify/types/type-provider"
import { z } from "zod"
import { CreateSectionService } from "../services/CreateSectionService"

export class CreateSectionController {

  async handle(request: FastifyRequestType){
    const createMapaBody = z.object({
      title: z.string(),
      mapaMotorId: z.string().uuid().optional(),
      mapaCelulaId: z.string().uuid().optional(),
    })
    
    const { title, mapaCelulaId, mapaMotorId } = createMapaBody.parse(request.body)
    
    const createSectionService = new CreateSectionService()

    const result =  await createSectionService.execute({
      title,
      mapaCelulaId,
      mapaMotorId
    })

    return result;
  
  }

}