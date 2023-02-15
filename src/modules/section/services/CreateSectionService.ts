import { prisma } from "../../../lib/prisma"



interface ICreateSection {
  title: string,
  mapaMotorId?: string,
  mapaCelulaId?: string
}

export class CreateSectionService {
  async execute({ title, mapaCelulaId, mapaMotorId}: ICreateSection){
    const section = await prisma.section.create({
      data: {
        title,
        mapaCelulaId,
        mapaMotorId
      }
    })

    return section

  }

}