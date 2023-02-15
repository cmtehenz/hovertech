import { prisma } from "../../../lib/prisma";
import { hash } from "bcrypt";

interface ICreateUser {
  name: string,
  email: string,
  password: string,
  whatsapp: string,
  role: string,
  image_url?: string,
}

export class CreateUserService {
  async execute({name, email, password, whatsapp, role, image_url}: ICreateUser){
    const userExist = await prisma.user.findUnique({
      where: {email}
    })

    if(userExist){
      throw new Error("User already exists!")
    }

    const hashPassword = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
        whatsapp,
        role,
        image_url,
        created_at: new Date(),
      }
    })

    return user;
  }
}