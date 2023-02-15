import { prisma } from "../../../lib/prisma";

interface IList {
  prefix: string
}

export class ListComponentsServices {
  async execute({ prefix }: IList) {
    const components = await prisma.aircraft.findMany({
      where:{
        prefix,
      },
      include: {
        mapaMotor: {
          include: {
            section: {
              include: {
                components: true
              }
            }
          }
        },
        mapaCelula: {
          include: {
            section: {
              include: {
                components: true
              }
            }
          }
        }

      }
    })
    return components;
  }
}